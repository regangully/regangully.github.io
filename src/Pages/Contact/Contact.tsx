import { motion } from "framer-motion";
import { ANIMATE_PROPS } from "../../Animation";
import Page from "../../Components/Page/Page";
import style from "./Contact.module.css";
import Button from "../../Components/Button/Button";
import { At } from "phosphor-react";

const Contact = () => {
  return (
    <Page icon={At} id="contact" heading="Contact Me">
      <div {...ANIMATE_PROPS(0.8)} className={style.about}>
        <p>
          I am always interested in hearing about new opportunities, or business
          problems.
        </p>
        <p>Feel free to contact me if you think that I could help.</p>
      </div>
      <div {...ANIMATE_PROPS(1)} className={style.link}>
        <a href="mailto:regangully@me.com">
          <Button label="Get in touch" />
        </a>
      </div>
    </Page>
  );
};

export default Contact;
