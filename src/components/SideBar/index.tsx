import { FC, useState } from "react";
import * as S from './styles';
import { SvgIcon } from "../../common/SvgIcon";


const Sidebar: FC = () =>{

    const   [sidebar, setSidebar] = useState(false);
    const   showSidebar = () => setSidebar(!sidebar);
    

    return (
        <S.SidebarNav sidebar={sidebar}>
            <S.SidebarButton rotate={sidebar} onClick={showSidebar}>
                <SvgIcon src="SideBarIcon.svg" width="22px" height="35px" />
            </S.SidebarButton>
            <S.CustomSidebarTitle>
                <S.Span>{("MENU")}</S.Span>
            </S.CustomSidebarTitle>
            <S.CustomSidebarContainer>
                <S.CustomSidebarLink>
                    <S.CustomSidebarLinkLabel>Navegar</S.CustomSidebarLinkLabel>
                </S.CustomSidebarLink>
                <S.CustomSidebarLink>
                    <S.CustomSidebarLinkLabel>Eventos</S.CustomSidebarLinkLabel>
                </S.CustomSidebarLink>
                <S.CustomSidebarLink>
                    <S.CustomSidebarLinkLabel>Mapa</S.CustomSidebarLinkLabel>
                </S.CustomSidebarLink>
            </S.CustomSidebarContainer>
           
        </S.SidebarNav>
    )
};

export default Sidebar;