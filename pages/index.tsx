import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Heading } from "../components/Heading/Heading";
import { api } from "../services/Api";
import {VacanciesList} from "../components/Vacancies/VacanciesList";
import {VacanciesProps, VacancyProps} from "../components/Vacancies/Vacancies.props";

interface FormSchedule {
    id: string;
    name: string;
}
interface IVacanciesPage {
    arguments: null | unknown;
    found: number;
    page: number;
    per_page: number;
    items: VacanciesProps;
}

interface HomeProps {
    vacanciesPage: IVacanciesPage;
    formsSchedule: FormSchedule[];
}


export const getStaticProps = async (ctx: any) => {
    const vacanciesPage = await api.info.getAll(ctx.query)
    const dictionaries = await api.info.getAllDictionaries()
    const formsSchedule = dictionaries.schedule

    return { props: {vacanciesPage, formsSchedule}}
}

const Home = ({vacanciesPage, formsSchedule}: HomeProps): JSX.Element => {

    const vacancies = vacanciesPage.items

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Heading tag={'h1'}>List of vacancies</Heading>
        <VacanciesList vacancies={vacancies}/>
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
