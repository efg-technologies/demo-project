import styles from './Footer.module.css'


export default function Footer() {
  return (
    <div className={styles.footerSection}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <img src="./images/NewsNestor.png" alt="NewsNestor Logo" />
        <p>Tokyo Hub, Suite 700<br />Shinjuku, Japan 20815</p>
      </div>

      {/* Middle Section */}
      <div className={styles.middleSection}>
        <div className={styles.middleDivide}>
          <h4>Information</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/teams">Teams</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
          <h4>Follow us</h4>
          <div className={styles.socialMedia}>
            <a href="https://facebook.com"><img src="./images/icons/facebook.png" alt="Facebook" /></a>
            <a href="https://instagram.com"><img src="./images/icons/instagram.png" alt="Instagram" /></a>
            <a href="https://youtube.com"><img src="./images/icons/youtube.png" alt="YouTube" /></a>
            <a href="https://linkedin.com"><img src="./images/icons/linkedin.png" alt="LinkedIn" /></a>
          </div>
          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.subscription}>
          <h4>Subscribe</h4>
          <input type="email" placeholder="Email address" />
          <button type="submit">→</button>
          <p>Hello, we are NewsNestor. trying to make an effort to put the right people for you to get the best results. Just insight</p>
        </div>
      </div>
    </div>
  );
}
