import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const ImportGoogleMap = () => {
  const containerStyle = {
    width: "300px",
    height: "300px",
  };

  const center = {
    lat: 22.297242,
    lng: 114.171682,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      )}
    </>
  );
};

export default ImportGoogleMap;
