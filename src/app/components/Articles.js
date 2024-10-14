"use client";
import styles from './Articles.module.css'
import { useState, useEffect } from 'react';

// Hardcoded articles data for demo project
// const articleInfo = [
//   {
//     id: 1,
//     img: "./images/storm.jpg",
//     title: "Tornado and tide warnings as Storm Hanna lashes Texas",
//     description: "The story of how the U.S. Navy, known as the father of Texas, and Davy Crockett, a Tennessee politician and soldier who died at the Alamo",
//     author: "By Lucy Hiddleston",
//     likes: 2,
//     forward: 3,
//     saves: 4
//   },

//   {
//     id: 2,
//     img: "./images/storm.jpg",
//     title: "Tornado and tide warnings as Storm Hanna lashes Texas",
//     description: "The story of how the U.S. Navy, known as the father of Texas, and Davy Crockett, a Tennessee politician and soldier who died at the Alamo",
//     author: "By Lucy Hiddleston",
//     likes: 2,
//     forward: 3,
//     saves: 4
//   },

//   {
//     id: 3,
//     img: "./images/storm.jpg",
//     title: "Tornado and tide warnings as Storm Hanna lashes Texas",
//     description: "The story of how the U.S. Navy, known as the father of Texas, and Davy Crockett, a Tennessee politician and soldier who died at the Alamo",
//     author: "By Lucy Hiddleston",
//     likes: 2,
//     forward: 3,
//     saves: 4
//   },

//   {
//     id: 4,
//     img: "./images/storm.jpg",
//     title: "Tornado and tide warnings as Storm Hanna lashes Texas",
//     description: "The story of how the U.S. Navy, known as the father of Texas, and Davy Crockett, a Tennessee politician and soldier who died at the Alamo",
//     author: "By Lucy Hiddleston",
//     likes: 2,
//     forward: 3,
//     saves: 4
//   },
// ];


export default function Articles() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

   // Function to fetch data from NewsAPI
   const fetchArticles = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);  // Set articles from the API response
      setLoading(false);  // Loading done
    } catch (error) {
      console.error("Error fetching articles:", error);
      setLoading(false);  // Stop loading in case of error
    }
  };

  // Fetch articles when the component is mounted
  useEffect(() => {
    fetchArticles();
  }, []);  // Empty dependency array to run once

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
          <div className={styles.articlesBackground}>
            <div className={styles.articlesGrid}>
              {loading ? (
                <p>Loading...</p>
              ) : (
                articles.map((article, index) => (
                  <div key={index}>
                    <img
                      src={article.urlToImage || '/images/storm.jpg'}
                      alt={article.title}
                      className={styles.articleImage}
                    />
                    <h3 className={styles.articlesTitle}>{article.title}</h3>
                    <p className={styles.articlesDescription}>{article.description}</p>
                    <a href ={article.url}>Link</a>
                    <div className={styles.actions}>
                      <span>❤️ {Math.floor(Math.random() * 100)}</span>
                      <span>🔗 {Math.floor(Math.random() * 50)}</span>
                      <span>🔖 {Math.floor(Math.random() * 20)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
