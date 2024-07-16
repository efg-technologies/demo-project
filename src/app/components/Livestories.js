import styles from './Livestories.module.css'


export default function Livestories() {
  return (
    <div className={styles.LivestoriesSection}>
      {/* Live stories active link */}
      <div className={styles.LivestoriesTab}>
        <ul className={styles.LivestoriesLink}>
          <li>
            <button className={styles.LivesortActiveTab}>Live Stories</button>
          </li>
        </ul>
      </div>
        {/* Live stories  */}
      <div className={styles.Livestories}>
        {/* Here will be an Array of Live stories */}
      </div>
      {/* Location news */}
      <div className={styles.LocalnewsSection}>
        <div className={styles.LocalnewsInfo}>

        </div>
      </div>
    </div>
  );
}
