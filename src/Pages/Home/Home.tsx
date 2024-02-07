import Page from "../../Components/Page/Page";
import ProfileImage from "../../Resources/regan-5.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Page id="home" paddingBottom="0" paddingTop="24px">
      <div className={styles.header}>
        <img className={`${styles.profile} ${styles.top}`} src={ProfileImage} />

        <div className={styles.container}>
          <h2 className={styles.headline1}>Kia ora,</h2>
          <h1 className={styles.headline2}>I'm Regan</h1>
          <div className={styles.description}>
            A software engineer and designer with a passion for tennis,
            travelling, and creating things that make a difference.
          </div>
        </div>

        <img
          className={`${styles.profile} ${styles.bottom}`}
          src={ProfileImage}
        />
      </div>
    </Page>
  );
};

export default Home;
