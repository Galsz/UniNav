import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-rotatedmarker'; 
import L from 'leaflet';


const LocationTracker = ({ onLocationChange, isNavigating }) => {
  const map = useMap();
  const markerRef = useRef(null);
  const lastPositionRef = useRef(null);

  useEffect(() => {
      const customIcon = L.icon({
          iconUrl: 'src/assets/imgs/svg/nav-ico.svg',  
          iconSize: [50, 50],
          iconAnchor: [25, 25]
      });

      const onLocationFound = (e) => {
          const newPos = [e.latlng.lat, e.latlng.lng];
          const lastPosition = lastPositionRef.current;
          const marker = markerRef.current;

          if (marker) {
              const angle = lastPosition ? calculateAngle(lastPosition, newPos) : 0;
              marker.setLatLng(newPos).setRotationAngle(angle);
              if (isNavigating) {
                map.setView(newPos, map.getZoom());
              }
          } else {
              markerRef.current = L.marker(newPos, { icon: customIcon }).addTo(map);
          }
        
          lastPositionRef.current = newPos;
          onLocationChange(newPos);
      };

      map.on('locationfound', onLocationFound);
      map.locate({ watch: true, enableHighAccuracy: true });

      return () => {
          map.stopLocate();
          map.off('locationfound', onLocationFound);
      };
  }, [map, isNavigating, onLocationChange]);

  return null;
};


function calculateAngle(start, end) {
  const dy = end[0] - start[0];
  const dx = end[1] - start[1];
  const theta = Math.atan2(dy, dx);
  return theta * 180 / Math.PI;
}

const FinishMarker = L.icon({
  iconUrl: 'src/assets/imgs/svg/finish-ico.svg',
  iconSize: [30, 42], 
  iconAnchor: [15, 42], 
  popupAnchor: [0, -42] 
});

const MapComponent = ({ start, end, travelMode, isNavigating }) => {
  const [route, setRoute] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [destination, setDestination] = useState(null);

  const mapRef = useRef();


  useEffect(() => {
    const fetchRoute = async () => {
      const response = await fetch(
        `https://api.openrouteservice.org/v2/directions/${travelMode}?api_key=5b3ce3597851110001cf6248fd136983c8be46e7999192aad066a4c5&start=${start.lng},${start.lat}&end=${end.lng},${end.lat}`
      );
      const data = await response.json();
      const coordinates = data.features[0].geometry.coordinates;
      const latLngs = coordinates.map(([lng, lat]) => [lat, lng]);
      setRoute(latLngs);
      setInstructions(data.features[0].properties.segments[0].steps);
      // setDestination({ 'lat': end[1], 'lng': end[0] });
    };

    if (start && end) {
      fetchRoute();
    }
  }, [start, end, travelMode]);

  const campusBounds = [
    [-23.510639, -47.410374], // Canto inferior esquerdo (sudoeste)
    [-23.490590, -47.386437]  // Canto superior direito (nordeste)
  ];

  return (
    <MapContainer  
      center={[-23.500636, -47.398976]} 
      zoom={15}
      style={{ height: '100%', width: '100%' }}
      maxBounds={campusBounds} 
      minZoom={17} 
      maxZoom={18} 
      zoomControl={false}
      ref={mapRef}
    >
      <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {route.length > 0 && <Polyline positions={route} color="blue" />}
      <LocationTracker setRoute={setRoute} setInstructions={setInstructions} onLocationChange={(newPos) => (newPos)} isNavigating={isNavigating}/>
      {destination && (
        <Marker position={[destination.lat, destination.lng]} icon={customIcon}>
          <Popup>Destino</Popup>
        </Marker>
      )}
      {/* <div>
        {instructions.map((step, index) => (
          <div key={index}>
            <p>{step.instruction}</p>
            <p>Distance: {step.distance} meters</p>
            <p>Duration: {Math.round(step.duration / 60)} minutes</p>
          </div>
        ))}
      </div> */}

    </MapContainer>

    
  );
};

export default MapComponent;
