export interface ContainerProps {
    border?: boolean;
    children: React.ReactNode;
  }
  
  export interface ButtonProps {
    color?: string;
    fixedWidth?: boolean;
    name?: string;
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  export interface SvgIconProps {
    src: string;
    width?: string;
    height?: string;
    color?: string;
    onClick?: () => void;
  }
  
  export interface InputProps {
    name: string;
    placeholder: string;
    t: unknown;
    type?: string;
    value?: string;
    onChange: (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
  }
  
  export interface validateProps {
    nome: string;
    msg: string;
    email: string;
    empresa: string;
    tel: string;
  }
  