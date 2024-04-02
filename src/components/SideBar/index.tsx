import * as React from 'react';
import * as S from './styles';
import { SvgIcon } from '../../common/SvgIcon';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Divider from '@mui/material/Divider';



export default function SideBar() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => setOpen(!open);

    const [openevents, setOpenEvent] = React.useState(true);


    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        if (index === 1) {setOpenEvent(!openevents)}
    };

  
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <Link to={'navegation'}>
                    <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon sx={{color: selectedIndex === 0 ? '#4285F4' : ''}}>
                            <SvgIcon src="location-arrow.svg" aria-label="homepage" width="22px" height="22px" color= {selectedIndex === 0 ? '#4285F4' : ''}/>
                        </ListItemIcon>
                        {open && (
                            <ListItemText primary={'Navegar'} sx={{color: selectedIndex === 0 ? '#4285F4' : ''}}/>
                        )}
                    </ListItemButton>
                </ Link>
           
                <ListItemButton 
                selected={selectedIndex === 1}
                onClick={(event) => {handleListItemClick(event, 1)}}
                >
                    <ListItemIcon sx={{color: selectedIndex === 1 ? '#4285F4' : ''}}>
                        <SvgIcon src="icon_Calendar.svg" aria-label="Events" width="22px" height="22px"/>
                    </ListItemIcon>
                    {open && (
                        <ListItemText primary={'Eventos'} sx={{color: selectedIndex === 1 ? '#4285F4' : ''}} />
                    )}
                    {openevents ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openevents} timeout="auto" unmountOnExit sx={{ pl: 7 }}>
                    <Divider />
                    <List component="div" disablePadding>
                    <ListItemButton>
                        <Link to={'eventregister'} style={!open ? { width: `fit-content` } : {}}>
                            <ListItemText primary="Cadastrar Eventos" />
                        </ Link>
                    </ListItemButton>
                    <ListItemButton >
                        <Link to={'eventlist'}>
                            <ListItemText primary="Listar Eventos" />
                        </ Link>
                    </ListItemButton>
                    </List>
                    <Divider />
                </Collapse>
                <Link to={'map'}>
                    <ListItemButton 
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon >
                            <SvgIcon src="Map.svg" aria-label="Map" width="22px" height="22px" />
                        </ListItemIcon>
                        {open && (
                            <ListItemText primary={'Mapa'} sx={{color: selectedIndex === 2 ? '#4285F4' : ''}}/>
                        )}
                    </ListItemButton>
                </Link>
            </List>
        </Box>
    );

  return (
    <S.CustomSidebarContainer sidebar={open}>
      <S.SidebarNav sidebar={open}>
        <S.SidebarButton rotate={open} onClick={toggleDrawer}>
            <SvgIcon src="SideBarIcon.svg" aria-label="homepage" width="27px" height="27px"/>
        </S.SidebarButton>
        <S.SidebarListBlock>

            <S.CustomSidebarTitle>{'MENU'}</S.CustomSidebarTitle>
            {DrawerList}
        </S.SidebarListBlock>
      </S.SidebarNav>
    </S.CustomSidebarContainer>
  );
  }