import styles from "./ContactFrom.module.css";
import { useState } from "react";
import Swal from "sweetalert2";

function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "577d4c75-469c-49ab-ae70-ffd76f514a65");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <section className={styles.contact}>
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>
          <div className={styles.inputBox}>
            <label>Name</label>
            <input
              type="text"
              className={styles.field}
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={styles.inputBox}>
            <label>Email Address</label>
            <input
              type="email"
              className={styles.field}
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.inputBox}>
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Write your message"
              className={`${styles.field} ${styles.message}`}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default ContactForm;

// 577d4c75-469c-49ab-ae70-ffd76f514a65
