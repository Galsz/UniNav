import { StyledButton } from "./styles";
import { ButtonProps } from "../../@types/types";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton color={color} width={fixedWidth} onClick={onClick}>
    <p>{children}</p> 
  </StyledButton>
);

