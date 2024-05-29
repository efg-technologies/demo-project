import Link from 'next/link';
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src ="/images/navbar_logo.png" alt="Navbar_logo"/>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder='Search...' />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/politics">Politics</Link>
        </li>
        <li>
          <Link href="/business">Business</Link>
        </li>
        <li>
          <Link href="/sports">Sports</Link>
        </li>
        <li>
          <Link href="/world">World</Link>
        </li>
        <li>
          <Link href="/podcast">Podcast</Link>
        </li>
      </ul>
      <div className={styles.buttons}>
        <button className={styles.login}>Login</button>
        <button className={styles.login}>Sign Up</button>
      </div>
    </nav>
  );
}
