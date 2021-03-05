import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LoginBox from '../components/LoginBox';

export default function Home() {
  return (
    <div>
      <Head>
        <title>UNT ABET Tool Login</title>
      </Head>
      <LoginBox/>
    </div>
  )
}
