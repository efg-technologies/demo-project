import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Navbar/>
      </div>
      <div>
        <Articles/>
      </div>
    </main>
  );
}
