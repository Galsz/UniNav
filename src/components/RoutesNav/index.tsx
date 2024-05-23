import * as S from './styles'
import { SvgIcon } from '../../common/SvgIcon';
import Input from '../../common/Input';
import { Button } from '../../common/Button';
import { useState } from 'react';


const RoutesNav = ({ onRouteSelection, onStartNavigation}) =>{
    const [startInput, setStartInput] = useState('');
    const [endInput, setEndInput] = useState('');
    const [startLocation, setStartLocation] = useState(null);
    const [endLocation, setEndLocation] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [travelMode, setTravelMode] = useState('foot-walking'); 
    const [activeMode, setActiveMode] = useState('');
    const [startSuggestions, setStartSuggestions] = useState([]);
    const [endSuggestions, setEndSuggestions] = useState([]);    
    const [activeInput, setActiveInput] = useState('start');
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);

    const handleCalculateClick = async () => {
        
        await fetchRouteDetails();
        onRouteSelection(startLocation, endLocation, travelMode);
    };

    const handleNavigateClick = () => {
        onStartNavigation();  
    };

    const fetchRouteDetails = async () => {
        if (startLocation && endLocation) {
            try {
                const response = await fetch(`https://api.openrouteservice.org/v2/directions/${travelMode}?api_key=5b3ce3597851110001cf6248fd136983c8be46e7999192aad066a4c5&start=${startLocation.lng},${startLocation.lat}&end=${endLocation.lng},${endLocation.lat}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch route details');
                }
                const data = await response.json();
                const routeDetails = data.features[0].properties.summary;
                setDistance(routeDetails.distance);
                setDuration(routeDetails.duration);
            } catch (error) {
                console.error('Error fetching route details:', error);
                alert('Error fetching route details');
            }
        }
    };
    

    
    const fetchSuggestions = async (value, inputType) => {
        if (value !== ''){
            try {
                const response = await fetch(`https://uninavapi-production.up.railway.app/locais?name=${encodeURIComponent(value)}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); // Checa se a resposta do servidor é ok
                }
                const data = await response.json();
              
                if (inputType === 'start') {
                    setStartSuggestions(data);
                } else {
                    setEndSuggestions(data);
                }
                
            } catch (error) {
                console.error("Fetch error: ", error.message);
            }
        }else{
            setStartSuggestions([]);
            setEndSuggestions([]);
        }

    };
    

     const handleUseCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                const currentCoords = { lat: latitude, lng: longitude };
                setStartInput('Localização Atual');
                setCurrentLocation(currentCoords);
                setStartLocation(currentCoords);
            }, (error) => {
                console.error('Erro ao obter a localização', error);
                alert('Erro ao obter a localização. Por favor, verifique as permissões.');
            });
        } else {
            alert('Geolocalização não é suportada por este navegador.');
        }
    };

    const handleInputChange = (value, inputType) => {
        if (inputType === 'start') {
            setStartInput(value);

        } else {
            setEndInput(value);
        }
        setActiveInput(inputType);
        fetchSuggestions(value, inputType);
    };

    const handleSuggestionClick = (location) => {
        const coordinates = { lng: location.coordinates.lng, lat: location.coordinates.lat };
        if (activeInput === 'start') {
            setStartInput(location.name);
            setStartLocation(coordinates);
            setStartSuggestions([]);
        } else {
            setEndInput(location.name);
            setEndLocation(coordinates);
            setEndSuggestions([]);
        }
    }
    
    const handleTravelModeChange = (mode) => {
        setActiveMode(mode);
        setTravelMode(mode);
    };

    const getModeIcon = (mode) => {
        const modeIcons = {
            'driving-car': 'icon_car.svg',
            'cycling-electric': 'icon_moto.svg',
            'foot-walking': 'icon_person.svg',
            'cycling-regular': 'icon_bike.svg',
            'wheelchair': 'icon_wheelchair.svg'
        };
        return modeIcons[mode] || 'icon_default.svg'; // Retorna um ícone padrão caso não haja correspondência
    };

    const showNavigateButton = () => {
        return currentLocation && startLocation && 
               currentLocation.lat === startLocation.lat && 
               currentLocation.lng === startLocation.lng;
    };
    
    return (
    <S.NavBox>
        <S.TypeRouteBox>  
            <S.TypeRouteSelection isActive={activeMode === 'driving-car'} onClick={() => handleTravelModeChange('driving-car')}>        
                <SvgIcon src="icon_car.svg" aria-label="homepage" width="27px" height="27px" />        
            </S.TypeRouteSelection> 
            <S.TypeRouteSelection isActive={activeMode === 'cycling-electric'} onClick={() => handleTravelModeChange('cycling-electric')}>        
                <SvgIcon src="icon_moto.svg" aria-label="homepage" width="30px" height="27px" />        
            </S.TypeRouteSelection>   
            <S.TypeRouteSelection isActive={activeMode === 'foot-walking'} onClick={() => handleTravelModeChange('foot-walking')}>        
                <SvgIcon src="icon_person.svg" aria-label="homepage" width="27px" height="27px" />        
            </S.TypeRouteSelection>      
            <S.TypeRouteSelection isActive={activeMode === 'cycling-regular'} onClick={() => handleTravelModeChange('cycling-regular')}>        
                <SvgIcon src="icon_bike.svg" aria-label="homepage" width="30px" height="27px" />        
            </S.TypeRouteSelection>
            <S.TypeRouteSelection isActive={activeMode === 'wheelchair'} onClick={() => handleTravelModeChange('wheelchair')}>        
                <SvgIcon src="icon_wheelchair.svg" aria-label="homepage" width="27px" height="27px" />        
            </S.TypeRouteSelection>
        </S.TypeRouteBox>
        
        <S.Group>
            <S.iconNav>
                <SvgIcon src="icon_nav.svg" aria-label="homepage" width="30px" height="80px" />   
            </S.iconNav>
            <S.Row>
                <S.GroupRow>
                    <Input 
                        type="text" 
                        name="name" 
                        t=''
                        value={startInput}
                        onChange={e => handleInputChange(e.target.value, 'start')}
                        placeholder='Escolha o ponto de partida'
                    
                    />
                    <S.atualLocateButton onClick={handleUseCurrentLocation}>        
                            <SvgIcon src="icon_locate.svg" aria-label="homepage" width="22px" height="22px" />        
                    </S.atualLocateButton>
                    <S.SeachSelectionInicio>
                        {startSuggestions.length > 0 && (
                            <ul>
                            {startSuggestions.map((location) => (
                                <S.SeachLi key={location.id} onClick={() => handleSuggestionClick(location, 'start')}>
                                    {location.name}
                                </S.SeachLi>
                            ))}
                                </ul>
                        )}
                    </S.SeachSelectionInicio>
                </S.GroupRow>
            </S.Row>
            
            <S.Row>
                <Input 
                    type="text" 
                    name="out" 
                    t='' 
                    value={endInput}
                    onChange={e => handleInputChange(e.target.value, 'end')}
                    placeholder='Informe o destino..'
                    
                />
                <S.SeachSelectionFinal>
                    {endSuggestions.length > 0 && (
                        <ul>
                        {endSuggestions.map((location) => (
                            <S.SeachLi key={location.id} onClick={() => handleSuggestionClick(location, 'end')}>
                            {location.name}
                            </S.SeachLi>
                        ))}
                        </ul>
                )}
            </S.SeachSelectionFinal>
            </S.Row>
            <S.FormActions>
                <Button color='#4285F4' onClick={handleCalculateClick}>Calcular</Button>
            </S.FormActions>
          
        </S.Group>
              {distance && duration && (
                <S.Navegue>
                    <S.RouteDataContainer>
                        <S.Icon>
                            <SvgIcon src={getModeIcon(travelMode)} aria-label={travelMode} width="35px" height="35px" />
                        </S.Icon>
                        <S.RouteDataBox>
                            <S.Time><label>{Math.round(duration / 60)} min</label></S.Time>
                            <S.Distance><label>{distance.toFixed(2)} m</label></S.Distance>
                        </S.RouteDataBox>
                    </S.RouteDataContainer>
                    <S.Actions>
                        {showNavigateButton() && <S.ButtonNavegue onClick={handleNavigateClick}>Ir agora</S.ButtonNavegue>}
                    </S.Actions>

                </S.Navegue>
                )}
   
        
    </S.NavBox>
    )
};

export default RoutesNav;