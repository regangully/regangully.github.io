import Page from "../../Components/Page/Page";
import ProfileImage from "../../Resources/regan-5.png";
import Welcome from "../../Resources/welcome.mp3";
import Kiaora from "../../Resources/kia_ora.mp3";
import GoodDay from "../../Resources/good_day.mp3";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { ANIMATE_PROPS } from "../../Animation";
import useSound from "use-sound";

const Home = () => {
  const [welcomeSound] = useSound(Welcome);
  const [kiaoraSound] = useSound(Kiaora);
  const [goodDaySound] = useSound(GoodDay);

  const sounds = [welcomeSound, kiaoraSound, goodDaySound];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <Page id="home" paddingBottom="0" paddingTop="24px">
      <div className={styles.header}>
        <motion.img
          {...ANIMATE_PROPS(0.2)}
          className={`${styles.profile} ${styles.top}`}
          src={ProfileImage}
        />

        <motion.div
          className={styles.container}
          initial="hidden"
          animate={"visible"}
          variants={container}
        >
          <h2 className={styles.headline1}>Kia ora,</h2>
          <h1 className={styles.headline2}>I'm Regan</h1>
          <div className={styles.description}>
            A software engineer and designer with a passion for tennis,
            travelling, and creating things that make a difference.
          </div>
        </motion.div>

        <motion.img
          {...ANIMATE_PROPS(0.2)}
          className={`${styles.profile} ${styles.bottom}`}
          src={ProfileImage}
        />
      </div>
    </Page>
  );
};

export default Home;
