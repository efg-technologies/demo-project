import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Livestories from "./components/Livestories";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Navbar/>
      </div>
      <div className={styles.content}>
        <Articles/>
        <Livestories/>
      </div>
      <div>
        <Footer/>
      </div>
    </main>
  );
}
