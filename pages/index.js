import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page | PRAKASH</title>
        <meta name="description" content="PRAKASH - All of our efforts is to reduce their pain, save their lives and give them a homely environment with food, Shelter, and medical Treatment without any charges." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav class={styles.mainnav}>
        <ul>
          
          <Link href="/"><li> <img src="/PrakashLogo.png" alt="Prakash Logo" width={160} height={58}/></li></Link>
          <Link href="/report"><li>Report</li></Link>
          <Link href="/volunteer"><li>Volunteer</li></Link>
          <Link href="/108"><li>108</li></Link>
          <Link href="/ngo"><li>NGO</li></Link>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Portal For Requesting and Accessing Information of Kin and Suffering Humans.
        </h1>

        <p className={styles.description}>
          Help By Donating{' '}
          <code className={styles.code}>Donate</code>
        </p>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.stellarflares.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/StellarFlares.png" alt="StellarFlares Logo" width={70} height={24} />
          </span>
        </a>
      </footer>
    </div>
  )
}
