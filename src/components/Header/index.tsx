import * as S from './styles'
import { SvgIcon } from '../../common/SvgIcon';
import { useState } from "react";
import { Row } from "antd";
import Container from '../../common/Container';
import ConfigButton from '../../common/ConfigButton';
import SwitchThemeButton from '../../common/SwitchThemeButton';

const Header = () => {

    const [visible, setVisibility] = useState(false);
  
    const showDrawer = () => {
      setVisibility(!visible);
    };
    const MenuItem = () => {

        return (
            <>
            <S.CustomNavLinkSmall>
                <SwitchThemeButton />
            </S.CustomNavLinkSmall>
            <S.CustomNavLinkSmall>
                <ConfigButton />
            </S.CustomNavLinkSmall>
            <S.CustomNavLinkSmall>
                    <SvgIcon
                        src="userimg.svg"
                        aria-label="homepage"
                        width="27px"
                        height="27px"
                    />
            </S.CustomNavLinkSmall>
            </>
        );
    };

    return (
    <S.HeaderSection>
        <Container>
            <Row justify="space-between">
                <SvgIcon src="uniso.svg" width="auto" height="40px" />
                <S.NotHidden>
                    <MenuItem/>
                </S.NotHidden>
                <S.Burger onClick={showDrawer}>
                    <S.Outline/>
                </S.Burger>
                
            </Row>
        </Container>
    </S.HeaderSection>
    );

}

export default Header;