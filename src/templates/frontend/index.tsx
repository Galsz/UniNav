import * as S from './styles';
import Header from '../../components/Header';
import Sidebar from '../../components/SideBar';
import { Outlet } from 'react-router-dom';


const Frontend = () => {
    return (
    <S.Layout>
        <Header />
        <Sidebar />
        <S.container>
            <Outlet />
        </S.container>
    </S.Layout>
    );
}

export default Frontend;