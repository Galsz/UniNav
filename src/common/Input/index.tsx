import * as S from './styles'
import { InputProps } from '../../@types/types';

function Input({type, t, name, placeholder, onChange, value}: InputProps) {
    return (
        <S.FormControl>
            <S.FormControlLabel htmlFor={name}>{t}</S.FormControlLabel>
            <S.FormControlInput 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder}  
                onChange={onChange}
                value={value}
            />
        </S.FormControl>
    )
}
export default Input;