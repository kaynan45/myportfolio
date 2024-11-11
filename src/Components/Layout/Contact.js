import ContactForm from "../Utils/ContactForm";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="Contact_me" className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <p className={styles.aboutNumber}>04</p>
        <p className={styles.aboutTitle}>Contact</p>
        <hr className={styles.aboutDivider} aria-orientation="horizontal" />
      </div>
      <ContactForm />
    </section>
  );
}

export default Contact;
