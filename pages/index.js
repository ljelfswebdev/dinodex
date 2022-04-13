import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DinoDex</title>
        <meta name="description" content="DinoDex game, randomise your dinosaurs and see who wins" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to DinoDex
        </h1>
        <h2 className={styles.h2}>Rules</h2>
        <p className={styles.description}>When you draw the cards by pressing the new game button on top, you wil be assigned 4 random dinosaurs. The team with the most amount of experience in attack and defence, wins!!</p>
        <div className={styles.container}>
          <img className="object-fill" src="./images/homepage.jpg" alt="t-rex" />
        </div> 

      </main>
    </div>
  )
}
