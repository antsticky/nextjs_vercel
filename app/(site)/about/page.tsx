import styles from './about.module.css'

export default async function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About This Project</h1>

      <img
        src="/about/cooking.png"
        alt="About US"
        className={styles.heroImage}
      />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What Is This Site?</h2>
        <p>
          This website collects the best recipes we’ve cooked and enjoyed over
          the years. Every dish here has been{' '}
          <span className={styles.highlight}>tested in our own kitchen</span> —
          nothing random, nothing untried.
        </p>
        <p>
          It’s a small, personal cookbook that keeps growing as we discover new
          favorites.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Technology Behind the Project</h2>
        <p>
          This site is built with <strong>Next.js</strong> and powered by a
          lightweight <span className={styles.highlight}>FastAPI</span> backend.
          It’s hosted on <span className={styles.highlight}>Vercel</span> using
          the free tier — perfect for a hobby project like this.
        </p>
        <p>
          The goal is simple: learn modern web development while building
          something useful and enjoyable.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p>
          I’m a passionate{' '}
          <span className={styles.highlight}>
            home cook and a curious developer
          </span>
          . This project combines both: a love for good food and a desire to
          learn new technologies.
        </p>
        <p>
          When I’m not experimenting with recipes or code, I enjoy exploring new
          cuisines and tweaking UI layouts.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p>You can reach me here:</p>
        <ul className={styles.contactList}>
          <li>
            Email:{' '}
            <a target="_blank" href="mailto:antsticky@gmail.com">
              <span className={styles.highlight}>
                <strong>antsticky@gmail.com</strong>
              </span>
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a
              target="_blank"
              href="https://github.com/antsticky?tab=repositories"
            >
              <span className={styles.highlight}>
                <strong>github.com/antsticky</strong>
              </span>
            </a>
          </li>
          <li>Location: Budapest, Hungary</li>
        </ul>
      </section>

      <p className={styles.footerNote}>
        Thanks for visiting — hope you find something delicious to cook!
      </p>
    </div>
  )
}
