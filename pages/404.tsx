import styles from "../styles/Home.module.scss";

const Error = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>404 error</h1>
                <h2>Такой страницы не существует</h2>
            </main>
        </div>
    )
}

export default Error
