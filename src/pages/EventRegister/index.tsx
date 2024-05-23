import * as S from './styles'
import FormEvent from "../../components/Form";

const EventRegister = () => {
  return (
    <S.EventFormContainer>
        <S.EventFormTitle>Cadastro de Eventos</S.EventFormTitle>
        <FormEvent />
    </S.EventFormContainer>
  )
}

export default EventRegister;
