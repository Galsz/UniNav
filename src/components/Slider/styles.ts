import styled from "styled-components";


export const SliderContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const SliderImg = styled.img`
    object-fit: cover;
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: block;
`


export const RightBlockContainer = styled.section`
  position: relative;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`