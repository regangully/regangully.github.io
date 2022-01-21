import style from "./About.module.css";
import Page from "../../Components/Page/Page";
import { LinkedinLogo, DribbbleLogo } from "phosphor-react";

const About = () => {
  return (
    <Page alternateBackground={true} heading="About Me">
      <div className={style.about}>
        <p>
          I am a kiwi Software Engineer who currently lives and works in
          little-ole' Aotearoa, New Zealand.
        </p>
        <p>
          I have always had a passion for creating things. Nowadays, I use this
          creativity to design, and develop software to impact, excite, and
          positively influence humanity.
        </p>
        <p>
          When I'm not busy building things I like to pass the time having a hit
          around at tennis, or embracing my inner rock-star by strumming out a
          tune on my guitar.
        </p>
        <p>
          I am always interested in hearing about new opportunities, or business
          problems. Feel free to contact me if you think that I could help.
        </p>
      </div>
      <div className={style.socialContainer}>
        <a className={style.socialIcon} target="_blank" href="https://www.linkedin.com/in/regangully/">
          <LinkedinLogo  size={42} />
        </a>
        <a className={style.socialIcon} target="_blank" href="https://dribbble.com/regan">
          <DribbbleLogo className={style.socialIcon} size={42} />
        </a>
      </div>
    </Page>
  );
};

export default About;
