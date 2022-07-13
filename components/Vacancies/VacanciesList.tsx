import { VacanciesProps } from "./Vacancies.props";
import styles from "./Vacancies.module.scss";

import { useEffect, useState } from "react";

import { VacancyItem } from './VacansyItem'
import { SceletonItem } from "./SceletonItem";

export const VacanciesList = ({ vacancies = []}: VacanciesProps): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false)
        }, 1000)
        return () => clearTimeout(timing)
    }, [])

    return (
        <div className={styles['vacansy-list']}>
            {
                loading && vacancies.map(vacancy => {
                    return <SceletonItem key={vacancy.id}/> })
            }
            {
                !loading && vacancies.length
                    ? vacancies.map(vacancy => {
                        return <VacancyItem key={vacancy.id}{ ...vacancy}/>
                    })
                    : <h4>Извините, вакансий больше нет</h4>
            }

        </div>
    )
}
