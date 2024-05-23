import { useState } from "react";
import MapComponent from "../../components/Map";
import Search from "../../components/Search";


const Navegation = () => {
  const [startCoords, setStartCoords] = useState(null);
  const [endCoords, setEndCoords] = useState(null);
  const [mode, setMode] = useState('foot-walking'); 
  const [isNavigating, setIsNavigating] = useState(false);

  function handleRouteUpdate(start, end, selectedMode) {
    setStartCoords(start);
    setEndCoords(end);
    setMode(selectedMode);
  }

  function startNavigation() {
    setIsNavigating(true);
  }
    return (<>
        <Search onRouteUpdate={handleRouteUpdate} onStartNavigation={startNavigation}/>
        <MapComponent start={startCoords} end={endCoords} travelMode={mode} isNavigating={isNavigating}/>
        </>
      )
}

export default Navegation;
