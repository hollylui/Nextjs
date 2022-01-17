import Head from "next/head";

import Jumbotron from "../components/jumbotron/Jumbotron";
import DefaultLayout from "../layouts/Default";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cats World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Jumbotron />
      </DefaultLayout>
    </div>
  );
}