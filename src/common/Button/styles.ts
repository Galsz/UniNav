import styled from "styled-components";

export const StyledButton = styled("button")`
  background: ${(p) => p.color || "#0154A5"};
  color: "#fff";
  font-size: 0.8rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
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
    background: ${(p) => p.color || "#013263"};
  }
`;
