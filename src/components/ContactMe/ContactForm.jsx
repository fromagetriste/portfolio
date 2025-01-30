import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "./Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rg9ukxs", "template_0h5p1ve", form.current, {
        publicKey: "Ay6ykcX_tPB-IRLYE",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("You received an e-mail confirmation.", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setIsLoading(false);
        },
        (error) => {
          toast.error("Failed. Contact me on WhatsApp instead.", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          form.current.reset();
          setIsLoading(false);
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <>
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
        <button
          type="submit"
          value="Send"
          className="submit-button"
          onClick={() => setIsLoading(true)}
        >
          {isLoading ? <Spinner /> : "Send"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
