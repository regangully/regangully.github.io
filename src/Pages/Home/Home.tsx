import Page from "../../Components/Page/Page";
import PinImage from "../../Resources/pin.svg";
import ProfileImage1 from "../../Resources/regan-3.png";
import Welcome from "../../Resources/welcome.mp3";
import Kiaora from "../../Resources/kia_ora.mp3";
import GoodDay from "../../Resources/good_day.mp3";
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
  const image = [ProfileImage1];

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
    return image[0];
  };

  return (
    <Page paddingBottom="0" paddingTop="0">
      <div className={styles.header}>
        <motion.img
          {...ANIMATE_PROPS(0.2)}
          className={styles.profile}
          src={getImage()}
        />

        <motion.div
          className={styles.container}
          initial="hidden"
          animate={"visible"}
          variants={container}
        >
          <h2>Kia ora,</h2>
          <h1 style={{marginTop: "-16px"}}>I'm Regan</h1>
          <div className={styles.description}>
            A software engineer with a passion for travelling, exploring, and
            creating things that make a difference.
          </div>
        </motion.div>
      </div>
    </Page>
  );
};

export default Home;
