import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import locationsList from '../utilits/location';

// Fix the default icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = React.memo(({ searchData }) => {
  // Default position (fallback) in case location is not found in the list
  const defaultPosition = [17.385044, 78.486671]; // Default to Hyderabad

  // Function to find the matching location from locationsList
  const getLocationPosition = (locationName) => {
    const location = locationsList.find((loc) => loc.name === locationName);
    // If location found, return [lat, lng], else return default position
    return location ? [location.lat, location.lng] : defaultPosition;
  };

  // Get the position based on searchData.location
  const position = getLocationPosition(searchData.location);

  return (
    <div className='container mt-3 mb-3'>
      <div className='row'>
        <div className='col-12'>
          {/* Use `key` to force re-render of MapContainer when the position changes */}
          <MapContainer 
            center={position} 
            zoom={9} 
            style={{ height: '370px', width: '100%' }}
            key={position.toString()}  // Forces the map to re-render whenever position changes
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                {searchData.location || "Selected Location"} <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
});

export default MapComponent;
