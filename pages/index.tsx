import styles from '../styles/Home.module.scss'
import stylesSections from '../styles/Sections.module.scss'
import { useState } from "react"
import { useRouter } from 'next/router'
import Image from 'next/image'
import { api } from "../services/Api";

import { Heading } from "../components/Heading/Heading";
import { Text } from "../components/Text/Text";
import { Filter } from "../components/Form/Filter";
import { VacanciesList } from "../components/Vacancies/VacanciesList";
import { FormRequest } from "../components/Form/FormRequest";

import { useGetVacancies } from "../hooks/useGetVacancies";

import { VacanciesProps } from "../components/Vacancies/Vacancies.props";

interface IFormSchedule {
    id: string;
    name: string;
}

export interface IVacanciesPage {
    arguments: null | unknown;
    found: number;
    page: number;
    per_page: number;
    items: VacanciesProps;
}

interface HomeProps {
    vacanciesPage: IVacanciesPage;
    formsSchedule: IFormSchedule[];
}


export const getStaticProps = async (ctx: any) => {
    const vacanciesPage = await api.info.getAll(ctx.query)
    const dictionaries = await api.info.getAllDictionaries()
    const formsSchedule = dictionaries.schedule

    return { props: {vacanciesPage, formsSchedule}}
}

const defaultCountItems = 5

const Home = ({vacanciesPage, formsSchedule}: HomeProps): JSX.Element => {

    const vacancies = vacanciesPage.items
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(defaultCountItems)
    const [valuePosition, setValuePosition] = useState('');
    const router = useRouter();

    const {items: filterVacancies, refetch, isLoading, args} = useGetVacancies({...router.query, per_page: count}, vacancies)
    // console.log(args.pages)

    const handlerValuePosition = (e: any) => {
        setValuePosition(e.target.value)
    }
    console.log(router.query)

    const resetFilterForm = () => {
        // debugger
        setPage(0)
        setCount(defaultCountItems)
        setValuePosition('')

        let newObject: Record<string, any> = {};
        console.log(newObject)
        console.log(router)
        router.push({
            pathname: '/',
            query: {
                page: 1,
                ...newObject
            }
        },
            undefined,
            {shallow: true})
        console.log(router.query)
    }

    const handlerValueFilter = (field: string) => (e: any) => {

        // let newObject: Record<string, any> = {...router.query}
        let newObject: Record<string, any> = {};
        !e.target.value.trim() ?  delete newObject[field] : newObject[field] = e.target.value
        console.log(newObject)
        // setPage(0)
        router.push({
            pathname: '/',
            query: {
                page: 1,
                ...newObject
            }
        })
        console.log(router.query)
    }



    return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Heading tag={'h1'}>List of vacancies</Heading>
        <Filter
          formsSchedule={formsSchedule}
          valuePosition={valuePosition}
          resetFilterForm={resetFilterForm}
          handlerValueFilter={handlerValueFilter('schedule')}
          handlerValuePosition={handlerValuePosition}
        />
        <VacanciesList vacancies={filterVacancies}/>
        <section className={stylesSections.request}>
          <Heading tag='h2'>Leave a request</Heading>
          <div className={stylesSections['request-wrapper']}>
              <FormRequest  />
              <div className={stylesSections['request-info']}>
                  <Text tag='p' size='l' font='rubik'>We will advise you and help you start a new project</Text>
                  <a className={stylesSections.contact} href="tel:+1234567890">+7 499 391-66-69</ a>
                  <a className={stylesSections.contact} href="mailto:mail@greensight.ru">mail@greensight.ru</a>
                  <Text tag='p' font='rubik'>Moscow, Zelenograd, Central Ave., bldg. 305, 3rd floor</Text>
                  <Text tag='span' href='/' font='rubik'>How to get there?</Text>
              </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/lirioblanko"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2022 Created by Lirioblanko
          <span className={styles.logo}>
            <Image src="/logo.svg" alt="Logo" width={34} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
