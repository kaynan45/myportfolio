import styles from './Contact.module.css'

function Contact() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <p className={styles.aboutNumber}>04</p>
        <p className={styles.aboutTitle}>Contact</p>
        <hr className={styles.aboutDivider} aria-orientation="horizontal" />
      </div>
    </section>
  )
}

export default Contact