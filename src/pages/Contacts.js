import React from 'react';

import MapSection from '../components/Map';
import ContactForm from '../components/ContactForm';

const location = {
  address: 'Poland, Warsaw, Bartycka 16A',
  lat: 52.21268,
  lng: 21.07049,
};

export default function Contacts() {
  return (
    <div>
      <div className="contact-section">
        <div className="contact-info">
          <div>
            <i className="fas fa-map-marker-alt"></i>Bartycka 16A, 00-716,
            Warszawa,
          </div>
          <div>
            <i className="fas fa-envelope"></i>tadeusz@bist.pl
          </div>
          <div>
            <i className="fas fa-phone"></i>+00 0000 000 000
          </div>
          <div>
            <i className="fas fa-clock"></i>Mon - Fri 9:00 - 18:00
          </div>
        </div>
        <ContactForm />
      </div>
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    </div>
  );
}
