import Page from "../../Components/Page/Page";
import PinImage from "../../Resources/pin.svg";
import ProfileImage1 from "../../Resources/regan-1.jpg";
import ProfileImage2 from "../../Resources/regan-2.jpg";
import Speaker from "../../Resources/speaker_high.svg";
import Welcome from "../../Resources/welcome.mp3";
import Kiaora from "../../Resources/kia_ora.mp3";
import GoodDay from "../../Resources/good_day.mp3";
import Background from "../../Resources/background.png";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import AnimatedText from "../../Components/AnimatedText/AnimatedText";
import { ANIMATE_PROPS } from "../../Animation";
import useSound from "use-sound";

const Home = () => {
  const [welcomeSound] = useSound(Welcome);
  const [kiaoraSound] = useSound(Kiaora);
  const [goodDaySound] = useSound(GoodDay);

  const sounds = [welcomeSound, kiaoraSound, goodDaySound];
  const image = [ProfileImage1, ProfileImage2];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const placeholderText = [
    { type: "heading2", classes: `${styles.heading}`, text: "Kia ora!" },
    {
      type: "heading1",
      text: "I'm Regan",
    },
  ];

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getSound = () => {
    return sounds[getRandomInt(0, 2)];
  };

  const getImage = () => {
    return image[getRandomInt(0, 1)];
  };

  return (
    <Page>
      <div className={styles.header}>
        <div className={styles.profileContainer}>
          <motion.img
            {...ANIMATE_PROPS(0.2)}
            className={styles.profile}
            src={getImage()}
          />
          <motion.img
            {...ANIMATE_PROPS(0.6)}
            onClick={() => getSound()()}
            className={styles.speaker}
            src={Speaker}
          />
        </div>

        <motion.div
          className={styles.container}
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
        A software engineer with a passion for travelling, exploring, and
        creating things that make a difference.
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
