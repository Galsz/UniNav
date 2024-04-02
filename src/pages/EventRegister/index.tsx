import React from "react";
import * as S from './styles'
import FormEvent from "../../components/FormEvent";

const EventRegister = () => {
  return (
    <S.EventFormContainer>
        <S.EventFormTitle><h2>Cadastro de Eventos</h2></S.EventFormTitle>
        <FormEvent />
    </S.EventFormContainer>
  )
}

export default EventRegister;
