import { useState, useEffect } from "react"

import { VacancyProps } from "./Vacancies.props";
import styles from "./Vacancies.module.scss";

import {api} from "../../services/Api";
import { Heading } from "../Heading/Heading";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import {object, string} from "prop-types";

export const VacancyItem = (vacancy: VacancyProps ): JSX.Element => {
    // debugger
    const [vacancyFull, setVacancyFull]: any = useState({})
    const [showAllDescription, setShowAllDescription] = useState(false)

    const onShowAllDescription = () => {
        setShowAllDescription(prevState => !prevState)
    }

    useEffect(() => {
        api.info.getVacancyById(vacancy.id)
            .then(data => {
                // console.log(data)
                setVacancyFull(data)
            })
            .catch(err => {
                console.log('err')
            })
    }, [])

    console.log(vacancyFull.description)
    return (
        <>
            <div className={styles['vacansy-item']}>
                <div className={styles['vacansy-item__contact-info']}>
                    <div className={styles['vacansy-item__img']}>
                        {
                            vacancy.employer.logo_urls?.original
                                ? <img src={vacancy.employer.logo_urls?.original} alt='logo'/>
                                : <img src="./hh-logo.jpg" alt='logo hh'/>
                        }

                    </div>
                    <ul className={styles['vacansy-item__list']}>
                        <li>
                            <Text tag='span' color='gray'>Form:</Text>
                            <Text tag='span'>{vacancy.schedule.name}</Text>
                        </li>
                        <li>
                            <Text tag='span' color='gray'>Company:</Text>
                            <Text tag='span'>{vacancy.employer.name}</Text>
                        </li>
                        <li>
                            <Text tag='span' color='gray'>Web:</Text>
                            <Text tag='span'
                                  href={vacancy.alternate_url}
                            >
                                {vacancy.alternate_url}
                            </Text>
                        </li>
                        <li>
                            <Text tag='span' color='gray'>Address:</Text>
                            <Text tag='span'>{vacancy.area.name}</Text>
                        </li>
                    </ul>
                </div>
                <div>
                    <Heading tag='h3'>{vacancy.name}</Heading>
                    {
                        showAllDescription
                            ? <Text tag='p'
                                    font='roboto'
                                    dangerouslySetInnerHTML={{__html: vacancyFull.description}}
                                    className={styles['vacansy-item__description-active']}
                            />
                            : (
                                <div className={styles['description-wrap']}>
                                    <Text tag='p'
                                          font='roboto'
                                          dangerouslySetInnerHTML={{__html: vacancyFull.description}}
                                          className={styles['vacansy-item__description']}
                                    />
                                    <div className={styles.blur}/>
                                </div>
                            )
                    }

                    <Button
                        view='link'
                        onClick={onShowAllDescription}
                    >
                        {
                            !showAllDescription
                                ? 'more details'
                                : 'close'
                        }
                    </Button>
                </div>
            </div>
        </>
    )
}
