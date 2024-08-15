import React, { useEffect, useState } from 'react';
import GoogleMaps from './GoogleMaps.css';
import './GoogleMaps.css'; // Import the CSS file for styling



const GoogleMap = () => {
  const [location, setLocation] = useState('');
    
  const handleLocationChange = (e) => {
      setLocation(e.target.value);
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();
      updateMap(location);
  };

  const updateMap = (location) => {
      // Use a geocoding service to convert the location to coordinates
      // Update the map with the new location
  };
    useEffect(() => {
      // AIzaSyDrbvRKc11CfmH9gt19VWlAaiVVh20eO14
        const googleScript = document.createElement('script');
        googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDrbvRKc11CfmH9gt19VWlAaiVVh20eO14&callback=initMap`;
        googleScript.async = true;
        window.initMap = initMap; // Function to initialize the map

        document.body.appendChild(googleScript);

        return () => {
            document.body.removeChild(googleScript);
        };
    }, []);

    const initMap = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const map = new window.google.maps.Map(document.getElementById('map'), {
                    center: { lat: position.coords.latitude, lng: position.coords.longitude },
                    zoom: 15
                });
                new window.google.maps.Marker({
                    position: { lat: position.coords.latitude, lng: position.coords.longitude },
                    map: map,
                    title: 'Your Location'
                });
            });
        }
    };

    // return <div id="map" style={{ width: '50%', height: '400px' }}></div>;
    return (
      <div>
          {/* <form className="mapPos"onSubmit={handleFormSubmit}>
              <input
                  type="text"
                  placeholder="Enter a location"
                  value={location}
                  onChange={handleLocationChange}
              />
              <button type="submit">Show Location</button>
          </form> */}
          <div id="map" className="map-container"></div>
      </div>
  );
};

export default GoogleMap;