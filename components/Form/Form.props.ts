import {DetailedHTMLProps, HTMLAttributes} from "react";


export interface FormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    className?: any;
}

export interface FormRequestProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    name: string;
    phone: string;
    email: string;
    comment: string;
}

export interface TextFieldProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
    as: 'select' | 'textarea' | 'input';
    name: string;
    type: 'text' | 'email' | 'phone';
    label: string;
    placeholder: string;
    handleBlur: object;
    handleChange: object;
    values?: any
}
