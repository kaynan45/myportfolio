import styles from './ContactFrom.module.css'

function ContactForm() {
  return (
    <div>
      <section className={styles.contact}>
        <form>
          <h2>Contact Form</h2>
          <div className={styles.inputBox}>
            <label>Name</label>
            <input type='text' className={styles.field} placeholder='Enter your name' required/>
          </div>
          <div className={styles.inputBox}>
            <label>Email Address</label>
            <input type='email' className={styles.field} placeholder='Enter your email' required/>
          </div>
          <div className={styles.inputBox}>
            <label>Your Message</label>
            <textarea placeholder='Write your message' className={`${styles.field} ${styles.message}`} required></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default ContactForm