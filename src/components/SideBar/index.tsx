import { FC, useState } from "react";
import * as S from './styles';
import { SvgIcon } from "../../common/SvgIcon";


const Sidebar: FC = () =>{

    const   [sidebar, setSidebar] = useState(false);
    const   showSidebar = () => setSidebar(!sidebar);

    return (
        <S.SidebarNav onClick={showSidebar}>
            <S.SidebarButton>
                <SvgIcon src="SideBarIcon.svg" width="27px" height="40px" />
            </S.SidebarButton>
        </S.SidebarNav>
    )
};

export default Sidebar;