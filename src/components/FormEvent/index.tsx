import React, { useState } from 'react';
import * as S from './style'
import Input from './FormInput';
import Select from './FormSelect';
import { Button } from '../../common/Button';

const FormEvent = () => {

    const [event, setEvent] = useState({
        startDate: '',
        endDate: '',
        name: '',
        location: '',
        description: ''
      });
    
      const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
      };
        
    return (
        <S.FormContainer>
            <S.FormRow>
                <S.FormGroup>
                    <Input 
                        type="datetime-local" 
                        t='Dt. Hr. Inicio'
                        name="startDate" 
                        placeholder=''
                        value={event.startDate} 
                        onChange={handleChange} 
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <Input 
                        type="datetime-local" 
                        t='Dt. Hr. Final'
                        name="endDate" 
                        placeholder=''
                        value={event.endDate} 
                        onChange={handleChange} 
                    />
                </S.FormGroup>
            </S.FormRow>
            <S.FormRow>
                <S.FormGroup>
                    <Input 
                        type="text" 
                        name="name" 
                        t='Nome do Evento'
                        placeholder=''
                        value={event.name} 
                        onChange={handleChange} 
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <Select name={'Local_id'} t={'Local do Evento'}/>
                </S.FormGroup>
            </S.FormRow>
            <Input 
                type="discription" 
                name="name" 
                t='Descrição'
                placeholder=''
                value={event.name} 
                onChange={handleChange} 
            />
            <S.FormActions>
                <Button color='#286ddd'>Confirmar</Button>
            </S.FormActions>
      </S.FormContainer>
    );
}

export default FormEvent;