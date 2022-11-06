import Page from "../../Components/Page/Page";
import PinImage from "../../Resources/pin.svg";
import ProfileImage from "../../Resources/me.jpg";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import AnimatedText from "../../Components/AnimatedText/AnimatedText";
import { ANIMATE_PROPS } from "../../Animation";

const Home = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const placeholderText = [
    { type: "heading2", classes: `${styles.heading}`, text: "Kia ora!" },
    {
      type: "heading1",
      text: "I'm Regan"
    }
  ];

  return (
    <Page>
      <div className={styles.header}>
        <motion.img {...ANIMATE_PROPS(0.2)} className={styles.profile} src={ProfileImage} />

        <motion.div
          className="App"
          initial="hidden"
          animate={"visible"}
          variants={container}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
        </motion.div>
      </div>

      <motion.h5 {...ANIMATE_PROPS(0.6)} className={styles.description}>
        A software engineer, and designer with a passion for creating things
        that make a difference.
      </motion.h5>

      <div className={styles.footer}>
        <motion.div {...ANIMATE_PROPS(0.8)} className={styles.location}>
          <img alt="Location Pin" className={styles.pin} src={PinImage} />
          New Zealand
        </motion.div>

        <motion.div {...ANIMATE_PROPS(1)}>
          <a className={styles.badgeLink} href="mailto:regangully@me.com">
            <div className={styles.badgeContainer}>
              <span className={styles.badgeLabel}>Get in touch</span>
            </div>
          </a>
        </motion.div>
      </div>
    </Page>
  );
};

export default Home;
