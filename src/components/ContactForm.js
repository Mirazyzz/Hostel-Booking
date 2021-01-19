import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [result, setResult] = useState(null);
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ax9bdmi',
        'template_v1xi5uq',
        e.target,
        'user_AJnO0f8sRDthnfrz3PRUw',
        {
          name: state.name,
          email: state.email,
          message: state.message,
        }
      )
      .then(
        (res) => {
          setState({ name: '', email: '', subject: '', message: '' });
          setResult({ success: true, message: 'Your email was delivered!' });
          clearInputs();
        },
        (error) => {
          setResult({
            success: false,
            message:
              'Something went wrong. Please, try again later or give us a call',
          });
          console.log(error.text);
        }
      );
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const clearInputs = () => {
    const inputs = document.querySelectorAll('input');
    const textArea = document.querySelector('textArea');

    for (let input of inputs) {
      if (input.type !== 'submit') input.value = '';
    }

    textArea.value = '';
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
