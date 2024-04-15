import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Search from '../Search';

  
const MapComponent = () => {

    const campusBounds = [
        [-23.5045,-47.4031], // Canto inferior esquerdo (sudoeste)
        [-23.4938,-47.3924]  // Canto superior direito (nordeste)
      ];

    return (
    
      <MapContainer  
        center={[-23.4938,-47.3924]} 
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        maxBounds={campusBounds} 
        minZoom={17} 
        maxZoom={19} 
        zoomControl = {false}
        >
        <Search />
        <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

      </MapContainer>
    );
  };
  

export default MapComponent;
