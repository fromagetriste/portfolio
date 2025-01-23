import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rg9ukxs", "template_0h5p1ve", form.current, {
        publicKey: "Ay6ykcX_tPB-IRLYE",
      })
      .then(
        () => {
          alert("Your message was sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send your message. Please try again.", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <input
        className="form-input"
        type="text"
        id="name"
        name="from_name"
        placeholder="Name"
        autoComplete="name"
        required
      />
      <input
        className="form-input"
        type="email"
        id="email"
        name="from_email"
        placeholder="Email"
        autoComplete="email"
        required
      />
      <textarea
        className="form-input"
        id="message"
        name="message"
        placeholder="Message"
        required
      ></textarea>
      <button type="submit" value="Send" className="submit-button">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
