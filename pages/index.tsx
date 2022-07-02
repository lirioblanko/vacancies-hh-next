import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Heading } from "../components/Heading/Heading";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Heading tag={'h1'}>List of vacancies</Heading>
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
