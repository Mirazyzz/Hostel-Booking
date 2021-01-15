import React, { useState } from 'react';

const RequestAccess = async (e) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitRequest = async (e) => {
    e.preventDefault();
    console.log({ email, message });
    const response = await fetch('/access', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });
    const resData = await response.json();
    if (resData.status === 'success') {
      alert('Message Sent.');
      this.resetForm();
    } else if (resData.status === 'fail') {
      alert('Message failed to send.');
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form class="contact" action="" method="post">
        <input
          type="text"
          name="name"
          class="text-box"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          class="text-box"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <input type="submit" name="submit" class="send-btn" value="Send" />
      </form>
    </div>
  );
};
