import * as S from './styles'
import FormEvent from "../../components/Form";

const EventRegister = () => {
  return (
    <S.EventFormContainer>
        <S.EventFormTitle><h2>Cadastro de Eventos</h2></S.EventFormTitle>
        <FormEvent />
    </S.EventFormContainer>
  )
}

export default EventRegister;
