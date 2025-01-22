import React from "react";
import Title from "./Title";

const ContactMe = () => {
  return (
    <section className="component-container">
      <Title />
      <div className="form-container">
        <form action="" className="form">
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="form-input"
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>

        <div className="form-card" id="contact-shadow">
          <div className="photo-container">
            <img
              className="contact-photo"
              src="/public/icons/contact/whatsapp.svg"
              alt="profile picture"
            />
          </div>

          <div className="contact-buttons-container">
            <button className="contact-button contact-cv">View my CV</button>
            <button className="contact-button contact-whatsapp">
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
