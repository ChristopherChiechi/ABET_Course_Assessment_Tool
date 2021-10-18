import Head from "next/head";
import styles from "../styles/Home.module.css";
import LoginBox from "../components/LoginBox";
import LoginBoxNew from "../components/NewLoginBox";
export default function Home() {
  return (
    <div>
      <Head>
        <title>UNT ABET Tool Login</title>
      </Head>
      <LoginBoxNew />
    </div>
  );
}
