import React, { useEffect, useRef } from 'react';

// Declare the Leaflet variable
declare const L: any;

const MAPCOMPONENT: React.FC<{ contact: boolean }> = ({ contact }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contact && mapRef.current) {
      // Initialize the map
      const map = L.map(mapRef.current, { scrollWheelZoom: false }).setView(
        [51.222836, 4.458097],
        13
      );

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      ).addTo(map);

      const greenIcon = L.icon({
        iconUrl: "./assets/icons/location-dot-solid.svg",
        iconSize: [35, 35],
      });

      L.marker([51.222836, 4.458097], { icon: greenIcon }).addTo(map);

      // Cleanup function to remove the map on unmount
      return () => {
        map.remove();
      };
    }
  }, [contact]); // Run effect when `contact` changes

  return (
    <div>
      {contact ? <div id="map" ref={mapRef} style={{ height: '400px' }} /> : null}
    </div>
  );
};

export default MAPCOMPONENT;
