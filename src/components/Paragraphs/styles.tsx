import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  font-weight: 500;
  text-align: left;
  font-size: 18px;
`;

export const ContentWrapper = styled("div")`
  max-width: 750px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
