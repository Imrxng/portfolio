import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const MAP = () => {

  const CUSTOM_ICON = new Icon( {
    iconUrl: "./assets/icons/location-dot-solid.svg",
    iconSize: [35, 35]
  });

  return (
    <MapContainer center={[51.222836, 4.458097]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
      url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
    />

      <Marker position={[51.222836, 4.458097]} icon={CUSTOM_ICON}>
        <Popup>
          Let's meet up!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MAP;
