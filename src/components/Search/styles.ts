import styled from "styled-components";


export const Container = styled.div`
    width: 70vh;
    height: 100%;
    position: absolute;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
export const SeachBox = styled.div` 
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 999;
    width: 25vw;
    height: 3vw;
    margin: 1rem 3rem;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);

    @media screen and (max-width: 768px) {
        width: 85%;
        height: 6%;
        margin: 1rem 2rem;
        border-radius: 25px;
    }
`


export const SeachButton = styled.div`
    cursor: pointer;
    margin: 0.5rem;
    height: 18px;
`

export const RoutesButton = styled.div`
    cursor: pointer;
    margin:0.5rem 1rem ;
    height: 18px;
`

export const SeachActtions = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;

`
export const SeachInput = styled.input`
    width: 17vw;
    height: 3vw;
    margin-left: 1.5rem;
    outline: 0;
    border: none;
`
export const SeachInputBox = styled.div`
    background-color: none;
`

export const SeachSelection = styled.div`
    position: absolute;
    width: 100%;
    top: 3vw;
    background-color: #FFFFFF;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);

`

export const SeachLi = styled.li`
    margin: 0.5rem 1.5rem;
    cursor: pointer;
    list-style: none;

`


export const CloseButton = styled.div`
    display: block;
    position: absolute;
    justify-content: flex-end;
    cursor: pointer;
    width: 22px;
    margin: 1rem 1rem 1rem 30.5rem;
    z-index: 1000;
    height: 18px;

    @media screen and (max-width: 768px) {
        margin-left: 18.2rem;
    }
   

`