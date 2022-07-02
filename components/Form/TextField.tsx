import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import { Field, ErrorMessage, useField } from 'formik';

import styles from "./Form.module.scss";
import { TextFieldProps } from "./Form.props";

export const TextField = ({
                            as,
                            name,
                            type,
                            label,
                            placeholder,
                            handleBlur,
                            handleChange,
                            values
}: TextFieldProps): JSX.Element => {

    return (
        <div  className={styles['form-field__wrapper']}>
            <label htmlFor={name}>{label}</label>
            <Field
                id={name}
                className={styles['form-field']}
                type={type}
                placeholder={placeholder}
                name={name}
                as={as}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[name]}
            />
            <ErrorMessage name={name}
                          component="div"
                          className={styles['error']}
            />
        </div>
    )
}
