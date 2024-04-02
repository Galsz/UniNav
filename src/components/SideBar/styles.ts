
import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset,v } from "../../styles/variables";

export const NavLink = styled(Link)`
  display: inline-block;
  text-align: center;
`;

export const SidebarNav = styled.div<{sidebar : boolean}>`
    position: absolute;
    top: 60px;
    left: ${({sidebar} ) =>  (sidebar ? '0' : '-20vw')};
    height: 100%;
    width: 22vw;
    transition: left 0.5s ease-in-out;
    background-color:#FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
`;

export const SidebarButton = styled.button<{rotate: boolean}>`
    ${btnReset};
    position: absolute;
    cursor: pointer;
    top: 10%;
    right: -13px;
    height: 22px;
    width: 22px;
    z-index: 1;
    transform: ${({rotate} ) => (rotate ? '' : 'rotate(180deg)')}; 
    transition: transform 0.3s ease-in-out;
    background-color: transparent;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #149DD9;
  }
`;

export const CustomSidebarContainer = styled.div<{sidebar : boolean}>`
    background: transparent;
    margin: 0.5rem 1.1rem;
    padding-left: ${({sidebar} ) =>  (sidebar ? '250px' : '0')};
    transition: padding-left 0.5s ease-in-out;

    @media only screen and (max-width: 768px) {
        margin: 0.5rem 0.2rem;
    }

    @media only screen and (max-width: 80px) {
        margin: 0.5rem 0.8rem;
    }
`;

export const CustomSidebarLink = styled.div`
    align-self: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
`;

export const CustomSidebarLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin: 0.5rem 2rem;


    @media only screen and (max-width: 768px) {
        margin: 1.25rem 2rem;
    }
`;

export const CustomSidebarTitle = styled.h3`
    margin:  0.5rem 1rem;
    display: flex;
    font-size: 1rem;
    padding-top: 20%;
    color: #5C5B5B;

    @media only screen and (max-width: 768px) {
        margin: 1.25rem 0.2rem;
    }
`;

export const SidebarListBlock = styled.div`
    position: absolute;
    margin:  0.5rem 1rem;
`

export const SLinkContainer = styled.div`
    border-radius: ${v.borderRadius};
    margin: 8px 0;

    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;

    svg {
        font-size: 20px;
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
`;