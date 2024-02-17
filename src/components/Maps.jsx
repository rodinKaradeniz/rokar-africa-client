import React from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  // Marker,
} from "@react-google-maps/api";

const libraries = ["places"];

const center = {
  lat: -6.7443425794251,
  lng: 39.27738346931208,
};

const Maps = (mapContainerStyle) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDmkHV1-px80tQrX4zqygRaMCR-bhJ9Tu8",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle.data}
        zoom={10}
        center={center}
      >
        <MarkerF position={center} />
        {/* <Marker position={center} /> */}
      </GoogleMap>
    </div>
  );
};

export default Maps;
