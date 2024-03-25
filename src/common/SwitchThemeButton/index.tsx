import { SvgIcon } from "../SvgIcon";
import * as S from './styles'

const SwitchThemeButton = () => {
  return (
    <S.SwitchThemeButton>
      <SvgIcon src="NightTheme_icon.svg" width="20px" height="20px" />
    </S.SwitchThemeButton>
  );
};

export default SwitchThemeButton;