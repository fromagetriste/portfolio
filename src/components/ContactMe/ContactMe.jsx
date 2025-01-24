import React from "react";
import Title from "./Title";
import WhatsApp from "./WhatsApp";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  return (
    <section className="component-container" id="ContactIdForScroll">
      <Title />
      <div className="form-container">
        <ContactForm />
        <WhatsApp />
      </div>
    </section>
  );
};

export default ContactMe;
