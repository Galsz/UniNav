import { SelectProps } from '../../../@types/types';
import * as S from './styles'

function Select({t, name, options, OnChange, value}: SelectProps) {
    return (
        <S.FormControl>
            <S.FormControlLabel htmlFor={name}>{t}</S.FormControlLabel>
            <S.FormControlSelect name={name} id={name}>
                <option>Selecione</option>
            </S.FormControlSelect>
        </S.FormControl>
    )
}
export default Select;