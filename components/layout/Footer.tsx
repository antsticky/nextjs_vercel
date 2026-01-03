import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        © {new Date().getFullYear()} antsticky — Total Viewers: 4o4
      </div>
    </footer>
  )
}
