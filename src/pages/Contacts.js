import React from 'react';

import MapSection from '../components/Map';

const location = {
  address: 'Poland, Warsaw, Bartycka 16A',
  lat: 52.21268,
  lng: 21.07049,
};

export default function Contacts() {
  return (
    <div className="contact-section">
      <div class="contact-info">
        <div>
          <i class="fas fa-map-marker-alt"></i>Address, City, Country
        </div>
        <div>
          <i class="fas fa-envelope"></i>contact@email.com
        </div>
        <div>
          <i class="fas fa-phone"></i>+00 0000 000 000
        </div>
        <div>
          <i class="fas fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM
        </div>
      </div>
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
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    </div>
  );
}
