import { SvgIconProps } from "../../@types/types";

export const SvgIcon = ({ src, width, height, onClick }: SvgIconProps) => (
  <img src={`src/assets/imgs/svg/${src}`} alt={src} width={width} height={height} onClick={onClick} />
);