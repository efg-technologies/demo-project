import Link from 'next/link';
import styles from './Navbar.module.css'

export default function Navbar() {

  const navLinks = [
    { href: '/politics', label: 'Politics' },
    { href: '/business', label: 'Business' },
    { href: '/sports', label: 'Sports' },
    { href: '/world', label: 'World' },
    { href: '/podcast', label: 'Podcast' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src ="/images/navbar_logo.png" alt="Navbar_logo"/>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder='Search...' />
      </div>
      <ul className={styles.navLinks}>
        {navLinks.map(link =>
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        )}
      </ul>
      <div className={styles.buttons}>
        <button className={styles.login}>Login</button>
        <button className={styles.signup}>Sign Up</button>
      </div>
    </nav>
  );
}
