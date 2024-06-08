import * as React from 'react';
import * as S from './styles';
import { SvgIcon } from '../../common/SvgIcon';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function SideBar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);
  
    const [openevents, setOpenEvent] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(1);
  
    const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number,
    ) => {
      setSelectedIndex(index);
      if (index === 1) { setOpenEvent(!openevents) }
    };
  
    const DrawerList = (
        <Box sx={{ width: isMobile ? '3.5rem' : '19vw' }} role="presentation">
        <List>
          <Link to={'navegation'}>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
              sx={{ color: selectedIndex === 0 ? '#4285F4' : '', borderRadius : '10px'}}
            >
              <ListItemIcon sx={{ color: selectedIndex === 0 ? '#4285F4' : ''}}>
                <SvgIcon src="location-arrow.svg" aria-label="homepage" width="22px" height="22px" color={selectedIndex === 0 ? '#4285F4' : ''} />
              </ListItemIcon>
              {!isMobile && open && (
                <ListItemText primary={'Navegar'} sx={{ color: selectedIndex === 0 ? '#4285F4' : '' }} />
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
            <SvgIcon src="SideBarIcon.svg" aria-label="homepage" width="27px" height="27px" />
          </S.SidebarButton>
          <S.SidebarListBlock>
            <S.CustomSidebarTitle>{'MENU'}</S.CustomSidebarTitle>
            {DrawerList}
          </S.SidebarListBlock>
        </S.SidebarNav>
      </S.CustomSidebarContainer>
    );
  }