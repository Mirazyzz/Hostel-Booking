import React from 'react'
import GoogleMapReact from 'google-map-react'

import {SiGooglemaps} from 'react-icons/si';

const LocationPin = ({text}) => {
    return (
        <div className="pin">
            <SiGooglemaps className="pin-icon"/>
            <p className="pin-text">{text}</p>
        </div>
    )
}

const Map = ({ location, zoomLevel }) => (
    <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Hostel</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY}}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map;