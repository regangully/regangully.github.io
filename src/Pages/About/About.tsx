import style from "./About.module.css";
import Page from "../../Components/Page/Page";
import {
  LinkedinLogo,
  DribbbleLogo,
  InstagramLogo,
  TiktokLogo,
} from "phosphor-react";
import { motion } from "framer-motion";
import { ANIMATE_PROPS } from "../../Animation";

const About = () => {
  return (
    <Page alternateBackground={true} heading="About Me">
      <motion.div {...ANIMATE_PROPS(0.75)} className={style.about}>
        <p>
          I am a kiwi Software Engineer from little-ole' Aotearoa, New Zealand.
        </p>
        <p>
          I have always had a passion for creating things. Nowadays, I use this
          creativity to design, and develop software to impact, excite, and
          positively influence humanity.
        </p>
        <p>
          I also love to travel, and to explore new places. I enjoy tinkering
          with photography, videography, and sharing my adventures. I'd love for
          you to follow along.
        </p>
      </motion.div>
      <div className={style.socialContainer}>
        {/* <motion.a
          {...ANIMATE_PROPS(1)}
          className={style.socialIcon}
          target="_blank"
          href="https://www.instagram.com/regangully/"
        >
          <InstagramLogo size={42} />
        </motion.a> */}
        {/* <motion.a
          {...ANIMATE_PROPS(1.2)}
          className={style.socialIcon}
          target="_blank"
          href="https://www.tiktok.com/@forbsey1"
        >
          <TiktokLogo size={42} />
        </motion.a> */}
        <motion.a
          {...ANIMATE_PROPS(1.4)}
          className={style.socialIcon}
          target="_blank"
          href="https://www.linkedin.com/in/regangully/"
        >
          <LinkedinLogo size={42} />
        </motion.a>
        <motion.a
          {...ANIMATE_PROPS(1.6)}
          className={style.socialIcon}
          target="_blank"
          href="https://dribbble.com/regan"
        >
          <DribbbleLogo className={style.socialIcon} size={42} />
        </motion.a>
      </div>
    </Page>
  );
};

export default About;
