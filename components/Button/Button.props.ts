import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    view?: 'button' | 'link';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
}
