import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Politics.module.css";

export default function Politics() {
  return (
    <main className={styles.main}>
      <div>
        <Navbar />
      </div>
      <div className={styles.politicsSection}>
        <div className={styles.politicsGrid}>
          <div className={styles.textSection}>
            <h1>EFG Technologies: Innovating The Future</h1>
            <p>
              In todays rapidly changing global political environment, leaders around the world are grappling with unprecedented challenges that demand innovative and forward-thinking solutions. From the rise of populism and nationalism to the growing threat of climate change, the political discourse has been dominated by issues that transcend borders and ideologies. Globalization, once heralded as the key to economic prosperity, is now met with skepticism, as nations increasingly prioritize their domestic agendas over international cooperation.
            </p>
            <p>
              One of the most pressing issues facing political leaders today is the question of economic inequality. While the global economy has made significant strides over the past few decades, the benefits of this growth have not been evenly distributed. Wealth inequality has widened, leading to a growing sense of disillusionment among working-class citizens who feel left behind by the forces of automation, outsourcing, and the digital economy. Political movements that emphasize economic nationalism and protectionism have gained traction as voters seek leaders who promise to bring jobs back to their home countries and restore a sense of economic security.
            </p>
            <p>
              Climate change, too, has become a central issue in political debates worldwide. As the scientific consensus around the causes and effects of global warming becomes increasingly clear, governments are under growing pressure to take meaningful action. However, the path to meaningful climate policy remains fraught with political obstacles, as leaders must navigate the competing interests of industry, environmental groups, and voters. Some governments have embraced bold initiatives, such as transitioning to renewable energy and implementing carbon taxes, while others remain hesitant, fearing the economic repercussions of such drastic changes.
            </p>
              <p>
                In addition to these global challenges, domestic issues such as healthcare, education, and immigration continue to shape political agendas. The debate over healthcare reform, for instance, has been a contentious issue in many countries, with leaders divided over the best way to provide affordable and accessible healthcare to their citizens. Education policy, too, has come under scrutiny, as governments seek to prepare their populations for the demands of a rapidly evolving job market. Immigration remains a polarizing issue, with some advocating for more open borders and inclusive policies, while others push for stricter controls to protect national interests.
              </p>
          </div>
          <div className={styles.imageSection}>
            <img src="./images/EFGtechnologies.png" alt="EFG Technologies" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
