import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { FormProps } from "./Form.props";
import styles from './Form.module.scss'

import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { TextField } from './TextField'


export const FormRequest = ({className, ...props }: FormProps ): JSX.Element => {
    const validate = yup.object().shape({
        name: yup.string()
            .max(15, 'Введите 15 символов или меньше')
            .typeError('Введите имя')
            .required('Обязательно'),
        phone: yup.number()
            .typeError('Введите числовое значение')
            .required('Обязательно'),
        email: yup.string()
            .email('Введите email')
            .required('Обязательно'),
    })
    return (
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    comment: ''
                }}
                validateOnBlur
                onSubmit={(values, {resetForm}) => {
                    resetForm();
                    console.log(values)
                }}
                validationSchema={validate}
            >
                {
                    ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        isValid,
                        handleSubmit,
                        dirty
                    }) => {
                        return (
                            <Form
                                className={styles['form-request']}
                                onSubmit={handleSubmit}
                            >
                                <TextField as='input' name='name' type='text' label='Your name' placeholder='Please introduce yourself' handleBlur={handleBlur} handleChange={handleChange} values={values}/>
                                <TextField as='input' name='email' type='email' label='Email' placeholder='ivanov@mail.ru' handleBlur={handleBlur} handleChange={handleChange} values={values}/>
                                <TextField as='input' name='phone' type='phone' label='Phone number' placeholder='+7 (999) 123-45-78' handleBlur={handleBlur} handleChange={handleChange} values={values}/>
                                <TextField as='textarea' name='comment' type='text' label='Comment' placeholder='Message text' handleBlur={handleBlur} handleChange={handleChange} values={values}/>

                                <Button
                                    type='submit'
                                    disabled={!isValid || !dirty}
                                    onClick={handleBlur}
                                >
                                    Send
                                </Button>
                                <Text tag='p' size='s' font='rubik'>By clicking `Send` you confirm your consent to the processing of personal data</Text>
                            </Form>
                            )
                    }
                }
            </Formik>
    )
}
