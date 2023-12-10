import GoogleMapReact from "google-map-react";

function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 19.38565,
      lng: -96.97316,
    },
    zoom: 19,
  };
  return (
    <div className="h-[220px] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
