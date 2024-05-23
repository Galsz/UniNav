import styled from "styled-components";



export const NavBox = styled.div<{sidebar : boolean}>`
    display: flex;
    position: absolute;
    flex-direction: column;
    height: 100%;
    width: 33vw;
    z-index: 998;
    transition: left 0.5s ease-in-out;
    background-color:#FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);


    @media screen and (max-width: 768px) {
        width: 85%;
    
    }

`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
`

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
`

export const FormActions = styled.div`
    text-align: center;
    margin: 20px;
`
export const SeachSelectionInicio = styled.div`
    display: block;
    position: absolute;
    width: 65%;
    margin-right: 3.5rem;
    margin-top: 3.65rem;
    background-color: #FFFFFF;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);

`

export const SeachSelectionFinal = styled.div`
    display: block;
    position: absolute;
    width: 70%;
    margin-top: 3.7rem;
    background-color: #FFFFFF;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);

`

export const SeachLi = styled.li`
    margin: 0.5rem 1.5rem;
    cursor: pointer;
    list-style: none;


    &:hover {
        background-color: #979797;
        border-radius: 1px
    }

`

export const TypeRouteBox = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    justify-content: center;
    margin: 1vw;

    @media screen and (max-width: 768px) {
        margin: none;
        margin-top: 40px;
         
    }

`

export const TypeRouteSelection = styled.div<{isActive : boolean}>`
    cursor: pointer;
    border-bottom: ${({isActive} ) =>  (isActive ? 'solid' : '')};
    border-bottom-color: ${({isActive} ) =>  (isActive ? '#4285F4' : '')};
    border-radius: 3px;
    width: 30px;
    margin: 2vh;
`

export const iconNav = styled.div`
    display: block;
    position: absolute;
    margin-left: 2.5rem;
    margin-top: 2.4rem;

    @media screen and (max-width: 768px) {
        margin-left: 1rem;
    }
`

export const atualLocateButton = styled.div`
    cursor: pointer;
    border-radius: 3px;
    align-content: center;
    width: 22px;
    margin: 2vh;
`
export const GroupRow = styled.div`
    display: flex;
    width: inherit;
    justify-content: center;
    margin-left: 2vw;

    @media screen and (max-width: 768px) {
        margin-left: 2rem;
    }
`

export const RouteDataBox = styled.div `
    display: flex;
    width: 100%;
    height: 15vh;
    flex-direction: column;
`

export const Distance = styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
    padding: 0 2vh;
`

export const Time = styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
    padding: 2vh;
`

export const RouteDataContainer = styled.div `
    display: flex;
    width: 100%;
    height: 15vh;
    border-left-style: solid;
    border-left-color: #4285F4;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
`

export const Icon = styled.div `
    display: flex;
    align-items: center;
    margin: 1vw;
    width: 100%;
`

export const Navegue = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 33vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
   
`

export const ButtonNavegue = styled.button`
  background: #4285F4;
  color: #fff;
  font-size: 0.8rem;
  text-decoration-color: #fff;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 20px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 100px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
  margin-left: 0 !important; 

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    background: #4285F4;
  }
`

export const Actions = styled.div`
    text-align: right;
    margin: 20px;
`