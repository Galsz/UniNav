import { useEffect, useState } from 'react';
import * as S from './style'
import Input from '../../common/Input';
import Select from '../../common/Select';
import { Button } from '../../common/Button';
import TextArea from '../../common/TextArea';
import Slide from '../Slider';
import img1 from '../../assets/imgs/haha.png'
import img2 from '../../assets/imgs/kevinnm.png'
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
    
    const [event, setEvent] = useState({
        startDate: '',
        endDate: '',
        name: '',
        location: '',
        description: ''
      });

      const navigate = useNavigate();  

      const routeChange = () => { 
          navigate('/map');  
      };

      const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
      };
        
    return (
        <S.main>
            <S.SlideBox>
                <Slide imgUrls={[img1,img2]}></Slide>
            </S.SlideBox>
            <S.LoginContainer>
                <S.FormContainer>
                    <S.FormGroup>
                        <Input 
                            type="text" 
                            name="name" 
                            t='Usuario'
                            placeholder=''
                            value={event.name} 
                            onChange={handleChange} 
                        />
                    </S.FormGroup>
                    <S.FormGroup>
                        <Input 
                            type="text" 
                            name="name" 
                            t='Senha'
                            placeholder=''
                            value={event.name} 
                            onChange={handleChange} 
                        />
                    </S.FormGroup>
                    <S.FormActions>
                        <Button color='#083c8f' onClick={routeChange}>Login</Button>
                    </S.FormActions>
                </S.FormContainer>
            </S.LoginContainer>
        </S.main>
    );
}

export default FormLogin;