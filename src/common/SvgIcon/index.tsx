import { SvgIconProps } from "../../@types/types";

export const SvgIcon = ({ src, width, height, color, onClick }: SvgIconProps) => (
  <img src={`src/assets/imgs/svg/${src}`} alt={src} width={width} height={height} color={color} onClick={onClick} />
);