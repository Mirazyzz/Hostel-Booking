import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [result, setResult] = useState(null);
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post('/send', { ...state })
      .then((response) => {
        setResult(response.data);
        setState({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later',
        });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="contact-form">
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <h2>Contact Us</h2>
      <form className="contact" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          className="text-box"
          placeholder="Your Name"
          required
          onChange={onInputChange}
        />
        <input
          type="email"
          name="email"
          className="text-box"
          placeholder="Your Email"
          required
          onChange={onInputChange}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          onChange={onInputChange}
        ></textarea>
        <input type="submit" name="submit" className="send-btn" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
