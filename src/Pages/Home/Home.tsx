import Page from "../../Components/Page/Page";
import PinImage from "../../Resources/pin.svg";
import ProfileImage from "../../Resources/me.jpg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Page>
      <div className={styles.header}>
        <img className={styles.profile} src={ProfileImage} />
        <div>
          <h2 className={styles.heading}>Kia ora!</h2>
          <h1>I'm Regan</h1>
        </div>
      </div>

      <h5 className={styles.description}>
        A software engineer, and designer with a passion for creating things
        that make a difference.
      </h5>

      <div className={styles.footer}>
        <div className={styles.location}>
          <img alt="Location Pin" className={styles.pin} src={PinImage} />
          New Zealand
        </div>

        <div className={styles.badgeContainer}>
          <span className={styles.badgeLabel}>Get in touch</span>
        </div>
      </div>
    </Page>
  );
};

export default Home;
