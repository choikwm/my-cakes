import React, { useCallback, useState, useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const ImportGoogleMap = () => {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: 22.279902,
    lng: 114.185947,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  // const [map, setMap] = useState(null);

  // const onLoad = useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // const onUnmount = useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
        >
          <Marker position={center} />
          {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
      )}
    </>
  );
};

export default ImportGoogleMap;
