import Map from "google-map-react";
import {FaMapMarkerAlt} from "react-icons/fa"

const AnyReactComponent = ({ text }) => <div><FaMapMarkerAlt size="3em" color="orange" /></div>;

function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 19.38564,
      lng: -96.97317,
    },
    zoom: 18,
  };
  return (
    <div style={{ height: "220px", width: "100%" }}>
      <Map
        bootstrapURLKeys={{ key: "AIzaSyAKfla2N-rgl5NZodA8BfBzIwpHkGUMqAY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={19.38564} lng={-96.97317} text="" />
      </Map>
    </div>
  );
}

export default GoogleMap;
