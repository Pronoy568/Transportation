import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 23.724446,
  lng: 90.412001
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAXUMMZZWRpmxnlGG0WzIbrEaxM3gWDsy4"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
