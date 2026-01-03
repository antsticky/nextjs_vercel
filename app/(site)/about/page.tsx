export const dynamic = 'force-dynamic'

import styles from './about.module.css'

// Helper to render [highlight]...[/highlight] markers
function renderWithHighlights(text: string) {
  const parts = text.split(/(\[highlight\]|\[\/highlight\])/)
  let isHighlighted = false

  return parts.map((part, index) => {
    if (part === '[highlight]') {
      isHighlighted = true
      return null
    }
    if (part === '[\/highlight]') {
      isHighlighted = false
      return null
    }

    return isHighlighted ? (
      <span key={index} className={styles.highlight}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  })
}

export default async function AboutPage() {
  let about = null

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_FASTAPI_URL + 'about', {
      cache: 'no-store',
    })
    about = await res.json()
  } catch (e) {
    console.error('Failed to load /about API', e)
  }

  // Fallback to avoid build/runtime crashes
  if (!about) {
    about = {
      title: 'About',
      heroImage: '',
      sections: [],
      footerNote: '',
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{about.title}</h1>

      {about.heroImage && (
        <img
          src={about.heroImage}
          alt="About hero"
          className={styles.heroImage}
        />
      )}

      {Array.isArray(about.sections) &&
        about.sections.map((section: any, index: number) => (
          <section key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>

            {section.paragraphs?.map((p: string, i: number) => (
              <p key={i}>{renderWithHighlights(p)}</p>
            ))}

            {section.contact && (
              <ul className={styles.contactList}>
                <li>
                  Email:{' '}
                  <a href={`mailto:${section.contact.email}`} target="_blank">
                    <span className={styles.highlight}>
                      <strong>{section.contact.email}</strong>
                    </span>
                  </a>
                </li>

                <li>
                  GitHub:{' '}
                  <a href={section.contact.github} target="_blank">
                    <span className={styles.highlight}>
                      <strong>
                        {section.contact.github.replace('https://', '')}
                      </strong>
                    </span>
                  </a>
                </li>

                <li>Location: {section.contact.location}</li>
              </ul>
            )}
          </section>
        ))}

      <p className={styles.footerNote}>{about.footerNote}</p>
    </div>
  )
}
