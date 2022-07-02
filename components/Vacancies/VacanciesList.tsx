import { VacanciesProps } from "./Vacancies.props";
import styles from "./Vacancies.module.scss";

import { VacancyItem } from './VacansyItem'

export const VacanciesList = ({ vacancies = []}: VacanciesProps ): JSX.Element => {

    return (
        <div className={styles['vacansy-list']}>
            {
                vacancies.length
                    ? vacancies.map(vacancy => {
                        return <VacancyItem key={vacancy.id}{ ...vacancy}/>
                    })
                    : <h4>Извините, вакансий больше нет</h4>
            }
        </div>
    )
}
