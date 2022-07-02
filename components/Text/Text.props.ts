import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    tag: 'p' | 'span';
    font?: 'roboto' | 'rubik';
    size?: 's' | 'm' | 'l';
    color?: 'black' | 'gray';
    href?: string,
    children: ReactNode;
}
