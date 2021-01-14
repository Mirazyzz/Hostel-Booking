import React from 'react';

import MapSection from '../components/Map';

const location = {
  address: 'Poland, Warsaw, Bartycka 16A',
  lat: 52.21268,
  lng: 21.07049,
};

export default function Contacts() {
  return (
    <div>
      <div className="contact-section">
        <div class="contact-info">
          <div>
            <i class="fas fa-map-marker-alt"></i>Bartycka 16A, 00-716, Warszawa,
          </div>
          <div>
            <i class="fas fa-envelope"></i>tadeusz@bist.pl
          </div>
          <div>
            <i class="fas fa-phone"></i>+00 0000 000 000
          </div>
          <div>
            <i class="fas fa-clock"></i>Mon - Fri 9:00 - 18:00
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
      </div>
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    </div>
  );
}
