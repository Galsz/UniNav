import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 0.5rem 0 3rem;
  text-align: left;
  display: flex;
  justify-content: left;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  font-weight: 300;
`;

export const Topic = styled("p")`
  font-size: 16px;
  text-align: left;

`;

export const Title = styled("h1")`
  font-size: 30px;
  text-align: left;

`;

export const ContentWrapper = styled("div")`
  max-width: 750px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
