import style from "./About.module.css";
import Page from "../../Components/Page/Page";
import {
  LinkedinLogo,
  DribbbleLogo,
  GithubLogo,
  Lightning,
} from "phosphor-react";
import { ANIMATE_PROPS } from "../../Animation";

const About = () => {
  return (
    <Page
      id="about"
      icon={Lightning}
      backgroundColor="var(--theme-page-background-1)"
      heading="About Me"
    >
      <div {...ANIMATE_PROPS(0.75)} className={style.about}>
        <p>
          I am a kiwi Software Engineer and Designer from little-ole' Aotearoa,
          New Zealand.
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
      </div>
      <div className={style.socialContainer}>
        {/* <a
          className={style.socialIcon}
          target="_blank"
          href="https://www.instagram.com/regangully/"
        >
          <InstagramLogo size={42} />
        </a> */}
        {/* <a
          className={style.socialIcon}
          target="_blank"
          href="https://www.tiktok.com/@forbsey1"
        >
          <TiktokLogo size={42} />
        </a> */}
        <a
          className={style.socialIcon}
          target="_blank"
          href="https://www.github.com/regangully/"
        >
          <GithubLogo size={42} />
        </a>
        <a
          className={style.socialIcon}
          target="_blank"
          href="https://www.linkedin.com/in/regangully/"
        >
          <LinkedinLogo size={42} />
        </a>
        <a
          className={style.socialIcon}
          target="_blank"
          href="https://dribbble.com/regan"
        >
          <DribbbleLogo className={style.socialIcon} size={42} />
        </a>
      </div>
    </Page>
  );
};

export default About;
