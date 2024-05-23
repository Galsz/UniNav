import * as S from './styles';
import { SvgIcon } from '../../common/SvgIcon';
import Input from '../../common/Input';
import { useState, useEffect } from 'react';
import RoutesNav from '../RoutesNav';


const Search = ({ onRouteUpdate, onStartNavigation }) => {
    const [search, setSeach] = useState('')
    const [searchData, setsearchData] = useState([])
    const [showRoutesNav, setShowRoutesNav] = useState(true);

    const handleRoutesButtonClick = () => {
        setShowRoutesNav(prevState => !prevState);
    };

    const handleRouteSelection = (start, end, mode) => {
        onRouteUpdate(start, end, mode);
    };
    
    
    const handleChange = e => {
        setSeach(e.target.value)
    }

    useEffect(() => {
        if (search !== ''){
            fetch(`api/locais?name=${encodeURIComponent(search)}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setsearchData(data)
            })
            .catch((err) => console.log(err))
        }
    }, [search]);

    
    const startNavigation = () => {
        setShowRoutesNav(false);
        onStartNavigation();
    };

    return (
    <S.Container>
        
    {!showRoutesNav && 
    <S.SeachBox>
            <S.SeachInputBox>
                <S.SeachInput
                    type="text" 
                    name="search_input" 
                    placeholder='Navegue na UniNav'
                    autoComplete='off'
                    onChange={handleChange}
                    value={search}
                />
            </S.SeachInputBox>
            <S.SeachActtions>
                <S.SeachButton>
                    <SvgIcon src="icon_Search.svg" aria-label="homepage" width="18px" height="18px" />
                </S.SeachButton>
                <S.RoutesButton
                    onClick={handleRoutesButtonClick}
                >
                    <SvgIcon src="icon_Routes.svg" aria-label="homepage" width="18px" height="18px" />
                </S.RoutesButton>
            </S.SeachActtions>
            <S.SeachSelection>
                {searchData.length > 0 && (
                    <ul>
                        {searchData.map((data) =>{
                            return <S.SeachLi key={data.id}>{data.name}</S.SeachLi>
                        })}
                    </ul>
                )}
            </S.SeachSelection>
        
        </S.SeachBox>
    }
        {showRoutesNav && (<RoutesNav onRouteSelection={handleRouteSelection} onStartNavigation={startNavigation} />)}
        {showRoutesNav && <S.CloseButton onClick={handleRoutesButtonClick}>
            <SvgIcon src="icon_close.svg" aria-label="homepage" width="18px" height="18px" />
        </S.CloseButton>}
       
    </S.Container>
    
    
)}

export default Search;