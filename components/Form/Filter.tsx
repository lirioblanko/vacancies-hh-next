import React, {DetailedHTMLProps, HTMLAttributes, useEffect, useState} from 'react';
import {Field, Form, Formik} from 'formik';

import styles from './Form.module.scss'

import {Button} from "../Button/Button";
import {TextField} from './TextField';
import {useRouter} from "next/router";

interface FormSchedule {
    id: string;
    name: string;
}

interface FilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    formsSchedule: FormSchedule[];
    valuePosition: string;
    handlerValueFilter: any;
    handlerValuePosition: any;
    resetFilterForm: any;
    filter: string;
}

export interface FormFilter {
    id: string;
    name: string;
}

export const Filter = ({
                       formsSchedule,
                       valuePosition,
                       handlerValueFilter,
                       handlerValuePosition,
                       resetFilterForm,
                       className
}: FilterProps ): JSX.Element => {
    const router = useRouter();
    const [forms] = useState<FormFilter[]>(formsSchedule)

    return (
           <>
                <Formik
                    initialValues={{
                       filter: router.query?.schedule || '',
                       position: valuePosition
                    }}
                    enableReinitialize
                    validateOnBlur
                    onSubmit={(values) => {console.log(values)}}
                >
               {
                   ({
                        values,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    }) => {

                       return (
                           <Form
                               className={styles['form-filter']}
                               onSubmit={handleSubmit}
                               onReset={handleReset}
                           >
                               <div className={styles['form-field__wrapper']}>
                                   <label htmlFor='filter'>Form</label>
                                   <Field
                                       as="select"
                                       type='select'
                                       className={styles['form-field']}
                                       name="filter"
                                       onChange={handlerValueFilter}
                                       onBlur={handleBlur}
                                       value={router.query?.schedule || ''}
                                   >
                                       {(
                                           <option key={'default'} value={''}>
                                               Not selected
                                           </option>
                                       )}
                                       {
                                           forms && forms.map(form  => {
                                               return (
                                                   <option key={form.id} value={form.id}>
                                                       {form.name}
                                                   </option>
                                               )
                                           })
                                       }
                                   </Field>
                               </div>
                               <TextField as='input'
                                          name='position'
                                          type='text'
                                          label='Position'
                                          placeholder='Unspecified'
                                          handleBlur={handleBlur}
                                          handleChange={handlerValuePosition}
                                          values={values}
                               />
                               <Button
                                   type='reset'
                                   view='link'
                                   onClick={resetFilterForm}
                               >
                                   <span>Clear sorting</span>
                                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#A3A6A9"/>
                                   </svg>

                               </Button>
                           </Form>
                       )
                   }
               }
           </Formik>
        </>
    )
}
