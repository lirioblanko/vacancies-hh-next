import { useEffect } from "react"
import { useRouter } from "next/router"

import styles from "../styles/Home.module.scss";
import { Heading } from "../components/Heading/Heading";

const Error = (): JSX.Element => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [router])

    return (
        <div className={styles.container}>
            <main className={styles.main + ' ' + styles.main_404 }>
                <Heading tag={'h1'}>404 error</Heading>
                <h2>Такой страницы не существует</h2>
            </main>
        </div>
    )
}

export default Error
