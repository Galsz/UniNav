
import styled from "styled-components";

export const NavLink = styled("div")`
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
    position: absolute;
    cursor: pointer;
    top: 10%;
    right: -13px;
    height: 35px;
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

export const CustomSidebarContainer = styled.div`
    background: transparent;
    margin: 0.5rem 2rem;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const CustomSidebarLink = styled.div`
    display: flex;
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
    display: flex;
    font-size: 1rem;
    padding-top: 20%;
    color: #5C5B5B;
    margin: 0.5rem 2rem;
`;