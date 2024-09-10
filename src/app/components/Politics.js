import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Politics.module.css";

export default function Politics() {
  return (
    <main className={styles.main}>
      <div>
        <Navbar />
      </div>
      <section className={styles.content}>
        <h1>Politics</h1>
        <p>This is the Politics show page</p>
      </section>
      <div>
        <Footer />
      </div>
    </main>
  );
}
