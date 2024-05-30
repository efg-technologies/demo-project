import styles from './Articles.module.css'

// Hardcoded articles for demo project
const articleInfo = [
  {
    id: 1,
    img: "./images/storm.jpg",
    title: "Tornado and tide warnings as Storm Hanna lashes Texas",
    description: "The story of how the U.S. Navy, known as the father of Texas, and Davy Crockett, a Tennessee politician and soldier who died at the Alamo",
    author: "By Lucy Hiddleston",
    likes: 2,
    forward: 3,
    saves: 4
  },

  {
    id: 2,
    img: "./images/storm.jpg",
    title: "Tornado and tide warnings as Storm Hanna lashes Texas",
    description: "The story of how the U.S. Navy, known as the father of Texas, and Davy Crockett, a Tennessee politician and soldier who died at the Alamo",
    author: "By Lucy Hiddleston",
    likes: 2,
    forward: 3,
    saves: 4
  },

  {
    id: 3,
    img: "./images/storm.jpg",
    title: "Tornado and tide warnings as Storm Hanna lashes Texas",
    description: "The story of how the U.S. Navy, known as the father of Texas, and Davy Crockett, a Tennessee politician and soldier who died at the Alamo",
    author: "By Lucy Hiddleston",
    likes: 2,
    forward: 3,
    saves: 4
  },

  {
    id: 4,
    img: "./images/storm.jpg",
    title: "Tornado and tide warnings as Storm Hanna lashes Texas",
    description: "The story of how the U.S. Navy, known as the father of Texas, and Davy Crockett, a Tennessee politician and soldier who died at the Alamo",
    author: "By Lucy Hiddleston",
    likes: 2,
    forward: 3,
    saves: 4
  },
];


export default function Articles() {
  return (
    <div className={styles.articlesSection}>
      <div className={styles.articlesSort}>
        {/* Articles sort list */}
        <div className={styles.sortTab}>
          <ul className={styles.sortLinks}>
            <li>
              <button className={styles.activeTab}>Latest Stories</button>
            </li>
            <li>
              <button>Popular</button>
            </li>
            <li>
              <button>Recommended</button>
            </li>
          </ul>
        </div>
        {/* Articles and sidebar */}
        <div className={styles.articlesAndSidebar}>
          <div className={styles.sidebar}>
            <div className={styles.articlesGrid}>
              {articleInfo.map((article) =>
                <div key={article.id}>
                  <img src={article.img} alt={article.title} />
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <p>{article.author}</p>
                  <div className={styles.actions}>
                    <span>❤️ {article.likes}</span>
                    <span>🔗 {article.forward}</span>
                    <span>🔖 {article.saves}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
