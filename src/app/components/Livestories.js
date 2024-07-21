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
    <div className={styles.livestoriesSection}>
      {/* Live stories active link */}
      <div className={styles.livestoriesTab}>
        <ul className={styles.livestoriesLink}>
          <li>
            <button className={styles.livesortActiveTab}>Live Stories</button>
          </li>
        </ul>
      </div>
        {/* Live stories  */}
      <div className={styles.livestoriesContent}>
        {/* Array of Live stories */}
        {liveStories.map((story) => (
          <div key={story.id} className={styles.storyContainer}>
            <div className={styles.liveIndicator}>
              <span className={styles.redDot}></span>
              <span className={styles.liveText}>Live</span>
            </div>
            <img src={story.img} alt={story.title} className={styles.storyImage} />
            <h3 className={styles.LivestoriesTitle}>{story.title}</h3>
          </div>
        ))}
      </div>
      {/* Location news */}
      <div className={styles.localnewsSection}>
        <h4>Location News</h4>
        <div className={styles.localnewsInfo}>
          <p>Get Location specific News</p>
          <input className={styles.livestoriesInput} placeholder="Enter Your location" />
          <button className={styles.livestoriesSubmit}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
