import styles from './Livestories.module.css'

// Hardcoded livestories data for demo project

const liveStories = [
  {
    id: 1,
    img: './images/Professor.jpg',
    title: 'Beloved Arizona coach loses battle with coronavirus',
  },
  {
    id: 2,
    img: './images/Professor.jpg',
    title: 'Beloved Arizona coach loses battle with coronavirus',
  },
]

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
        {/* Array of Live stories */}
        {liveStories.map((stories) =>
                  <div key={stories.id}>
                    <img src={stories.img} alt={stories.title} />
                    <h3 className={styles.LivestoriesTitle}>{stories.title}</h3>
                  </div>
                )}
      </div>
      {/* Location news */}
      <div className={styles.LocalnewsSection}>
        <div className={styles.LocalnewsInfo}>
          <p>Get Location specific News</p>
          <input className={styles.LivestoriesInput}>Enter Your location</input>
          <button className={styles.LivestoriesSubmit}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
