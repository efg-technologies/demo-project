import styles from './Editors.module.css'

const editorsInfo = [
  {
    id: 1,
    img: "./images/ruby.jpg",
    title: "Ruby on Rails",
    viewMoreLink: "",
  },

  {
    id: 2,
    img: "./images/webdev.png",
    title: "Web Developer",
    viewMoreLink: "",
  },

  {
    id: 3,
    img: "./images/suitefitlogo2.png",
    title: "SuiteFit Furniture",
    viewMoreLink: "",
  },
]


export default function Editors() {
  return (
    <div className={styles.editorsSection}>
      <div className={styles.editorsMainTitle}>
        <h3>Editors picks</h3>
      </div>
        <div className={styles.editorsGrid}>
          {editorsInfo.map((editor) =>
          <div key={editor.id}>
             <img src={editor.img} alt={editor.title}/>
             <h3 className={styles.editorsTitle}>{editor.title}</h3>
             <a href={editor.viewMoreLink} className={styles.viewMoreButton}>View More</a>
          </div>
          )}
        </div>
    </div>
  );
}
