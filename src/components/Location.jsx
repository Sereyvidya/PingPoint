import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

// Fix default icon issue in some setups
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Location = ({ lat = 51.505, lng = -0.09 }) => {
  const RecenterMap = ({ lat, lng }) => {
    const map = useMap();

    useEffect(() => {
      map.setView([lat, lng], map.getZoom());
    }, [lat, lng, map]);

    return null;
  };

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={true}
      className="map-top"
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">Carto</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          Location: [{lat}, {lng}]
        </Popup>
      </Marker>
      <RecenterMap lat={lat} lng={lng} />
    </MapContainer>
  );
};

export default Location;
