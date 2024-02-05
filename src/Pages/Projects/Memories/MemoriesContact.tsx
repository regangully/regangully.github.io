import style from "./MemoriesContact.module.css";
import Page from "../../../Components/Page/Page";
import { motion } from "framer-motion";
import MemoriesIcon from "../../../Resources/memories_icon.png";
import { ANIMATE_PROPS } from "../../../Animation";

const MemoriesContact = () => {
  return (
    <Page
      image={<img width={"72px"} src={MemoriesIcon} />}
      marginTop={100}
      heading="Contact"
    >
      <motion.div {...ANIMATE_PROPS(0.75)} className={style.about}>
        <section>
          <h3>Get in Touch:</h3>
          <ul>
            <li>
              <h3>Customer Support:</h3>
              <p>
                Have a technical issue or need assistance navigating the app?
                Our support team is available to troubleshoot and guide you
                through any challenges.
              </p>
            </li>
            <li>
              <h3>Feedback & Suggestions:</h3>
              <p>
                We value your input! Share your thoughts, suggestions, and
                feature requests with us. Your ideas help us improve Memories
                and make it even better for you.
              </p>
            </li>
            <li>
              <h3>Press & Media Inquiries:</h3>
              <p>
                Journalists and bloggers, we're happy to provide information and
                assets for your coverage of Memories: Daily Journal.
              </p>
            </li>
            <li>
              <h3>Partnership Opportunities:</h3>
              <p>
                Interested in collaborating with Memories? Let's explore
                partnership opportunities to bring meaningful experiences to our
                users together.
              </p>
            </li>
            <li>
              <h3>General Inquiries:</h3>
              <p>
                For anything else you'd like to discuss, whether it's about
                Memories, our team, or our mission, don't hesitate to reach out.
              </p>
            </li>
          </ul>
        </section>
        <br />
        <section>
          <h3>Contact Options:</h3>
          <ul>
            <li>
              <h3>Email:</h3>
              <p>regangully@me.com</p>
            </li>
          </ul>
        </section>
      </motion.div>
    </Page>
  );
};

export default MemoriesContact;
