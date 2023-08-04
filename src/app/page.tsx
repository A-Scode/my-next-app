import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>🛬Landing Page</h1>
        <Link href={"About"} >Go To About</Link>
      </div>
    </main>
  )
}
