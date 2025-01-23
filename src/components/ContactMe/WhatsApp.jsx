import React from "react";

const WhatsApp = () => {
  return (
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
        <button
          className="contact-button contact-whatsapp"
          onClick={() => window.open("https://wa.me/33695739622", "_blank")}
        >
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default WhatsApp;
