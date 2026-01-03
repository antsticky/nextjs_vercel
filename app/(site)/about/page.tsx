export const dynamic = 'force-dynamic'

import styles from './about.module.css'

export default async function AboutPage() {
  const res = await fetch(process.env.NEXT_PUBLIC_FASTAPI_URL + 'about', {
    next: { revalidate: 60 }
  })
  const about = await res.json()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{about.title}</h1>

      <img
        src={about.heroImage}
        alt="About hero"
        className={styles.heroImage}
      />

      {about.sections.map((section: any, index: number) => (
        <section key={index} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>

          {section.paragraphs?.map((p: string, i: number) => (
            <p key={i}>{p}</p>
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
                    <strong>{section.contact.github.replace('https://', '')}</strong>
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
