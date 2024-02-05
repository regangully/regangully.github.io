import { motion } from "framer-motion";
import { ANIMATE_PROPS } from "../../Animation";
import Page from "../../Components/Page/Page";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <Page heading="Contact Me">
      <motion.div {...ANIMATE_PROPS(0.8)} className={style.about}>
        <p>
          I am always interested in hearing about new opportunities, or business
          problems. Feel free to contact me if you think that I could help.
        </p>
      </motion.div>
      <motion.div {...ANIMATE_PROPS(1)}>
        <a className={style.badgeLink} href="mailto:regangully@me.com">
          <div className={style.badgeContainer}>
            <span className={style.badgeLabel}>Get in touch</span>
          </div>
        </a>
      </motion.div>
    </Page>
  );
};

export default Contact;
