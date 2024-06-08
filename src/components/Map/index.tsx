import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-rotatedmarker'; 
import L from 'leaflet';
import * as turf from '@turf/turf';


const LocationTracker = ({ route, onLocationChange, onUpdateRoute, onCompleteNavigation, onRouteDeviation, isNavigating }) => {
  const map = useMap();
  const markerRef = useRef(null);
  const lastPositionRef = useRef(null);
  const [navigationStarted, setNavigationStarted] = useState(false);

  useEffect(() => {
    const customIcon = L.icon({
      iconUrl: 'src/assets/imgs/svg/nav-ico.svg',
      iconSize: [50, 50],
      iconAnchor: [25, 25]
    });

    const updateMarker = (latlng) => {
      if (isNavigating && route.length > 0) {
        setNavigationStarted(true);

        const point = turf.point([latlng.lng, latlng.lat]);
        const line = turf.lineString(route.map(pos => [pos[1], pos[0]]));
        const snapped = turf.nearestPointOnLine(line, point);

        const newPos = [snapped.geometry.coordinates[1], snapped.geometry.coordinates[0]];

        if (markerRef.current) {
          const angle = lastPositionRef.current ? calculateAngle(lastPositionRef.current, newPos) : 0;
          markerRef.current.setLatLng(newPos).setRotationAngle(angle);
          map.setView(newPos, map.getZoom());
        } else {
          markerRef.current = L.marker(newPos, { icon: customIcon }).addTo(map);
        }

        // Atualizar a rota
        const remainingRoute = turf.lineSlice(snapped, turf.point(route[route.length - 1]), line);
        const updatedRoute = remainingRoute.geometry.coordinates.map(coord => [coord[1], coord[0]]);
        onUpdateRoute(updatedRoute);

        lastPositionRef.current = newPos;
        onLocationChange(newPos);

        // Verificar se o usuário está perto do destino
        const destination = route[route.length - 1];
        const distanceToEnd = turf.distance(point, turf.point([destination[1], destination[0]]));
        if (distanceToEnd < 0.01 && navigationStarted) { 
          onCompleteNavigation();
          setNavigationStarted(false);
        }

        // Verificar se o usuário está fora do buffer da rota
        const buffer = turf.buffer(line, 0.01, { units: 'kilometers' }); 
        const isPointInBuffer = turf.booleanPointInPolygon(point, buffer);

        if (!isPointInBuffer) {
          onRouteDeviation(latlng); 
        }
      }
    };

    const onLocationFound = (e) => {
      updateMarker(e.latlng);
    };

    map.on('locationfound', onLocationFound);
    map.locate({ watch: true, enableHighAccuracy: true });

    return () => {
      map.stopLocate();
      map.off('locationfound', onLocationFound);
    };
  }, [map, route, isNavigating, onLocationChange, onUpdateRoute, onCompleteNavigation, onRouteDeviation]);

  return null;
};

function calculateAngle(start, end) {
  const dy = end[0] - start[0];
  const dx = end[1] - start[1];
  const theta = Math.atan2(dy, dx);
  return theta * 180 / Math.PI;
};

const finishIcon = L.icon({
  iconUrl: 'src/assets/imgs/svg/finish-ico.svg',
  iconSize: [30, 42], 
  iconAnchor: [15, 42], 
  popupAnchor: [0, -42] 
});

const MapComponent = ({ start, end, travelMode, isNavigating }) => {
  const [route, setRoute] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [destination, setDestination] = useState(null);
  const [navigationComplete, setNavigationComplete] = useState(false);

  const mapRef = useRef();

  const fetchRoute = async (start, end) => {
    const response = await fetch(
      `https://api.openrouteservice.org/v2/directions/${travelMode}?api_key=5b3ce3597851110001cf6248fd136983c8be46e7999192aad066a4c5&start=${start.lng},${start.lat}&end=${end.lng},${end.lat}`
    );
    const data = await response.json();
    const coordinates = data.features[0].geometry.coordinates;
    const latLngs = coordinates.map(([lng, lat]) => [lat, lng]);
    setRoute(latLngs);
    setInstructions(data.features[0].properties.segments[0].steps);
    setDestination({ lat: end.lat, lng: end.lng });
  };

  useEffect(() => {
    if (start && end) {
      fetchRoute(start, end);
    }
  }, [start, end, travelMode]);

  const handleUpdateRoute = (newRoute) => {
    setRoute(newRoute);
  };

  const handleCompleteNavigation = () => {
    if (!navigationComplete) {
      setNavigationComplete(true);
      alert('Você chegou ao destino!');
    }
  };

  const handleRouteDeviation = (newStart) => {
    setNavigationComplete(false);
    setRoute([]);
    setInstructions([]);
    fetchRoute(newStart, end);
  };

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
      <LocationTracker
        route={route}
        onLocationChange={(newPos) => (newPos)}
        onUpdateRoute={handleUpdateRoute}
        onCompleteNavigation={handleCompleteNavigation}
        onRouteDeviation={handleRouteDeviation}
        isNavigating={isNavigating && !navigationComplete}
      />
      {destination && (
        <Marker position={[destination.lat, destination.lng]} icon={finishIcon}>
          <Popup>Destino</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};


export default MapComponent;
