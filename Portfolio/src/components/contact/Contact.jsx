import './contact.css';
import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_k2qawqh', // this one is urs Service ID
        'template_c6rkpn6', // this one is template ID
        formRef.current,
        'X7K7ebhIeOy3YwHki' // thats Public Key
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setMessage(true);
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          setMessage(false);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Sahilkulria27@gmail.com</h5>
            <a href="mailto:mekomerikomg@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks you for connecting Sahilkulria27, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
