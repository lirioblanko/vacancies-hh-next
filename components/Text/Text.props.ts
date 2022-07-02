import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    tag: 'p' | 'span';
    font?: 'roboto' | 'rubik';
    size?: 's' | 'm' | 'l';
    color?: 'black' | 'gray';
    href?: string,
    children?: ReactNode;
    className?: string;
}
