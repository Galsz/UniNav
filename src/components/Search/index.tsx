import * as S from './styles';
import { SvgIcon } from '../../common/SvgIcon';


const Search = () => {
    return (
    <S.SeachBox>
        <S.SeachButton>
            <SvgIcon src="icon_Search.svg" aria-label="homepage" width="18px" height="18px" />
        </S.SeachButton>
        <S.RoutesButton>
            <SvgIcon src="icon_Routes.svg" aria-label="homepage" width="18px" height="18px" />
        </S.RoutesButton>
    </S.SeachBox>
)}

export default Search;