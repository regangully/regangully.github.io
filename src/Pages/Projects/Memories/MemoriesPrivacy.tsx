import style from "./MemoriesPrivacy.module.css";
import Page from "../../../Components/Page/Page";
import { motion } from "framer-motion";
import MemoriesIcon from "../../../Resources/memories_icon.png";
import { ANIMATE_PROPS } from "../../../Animation";

const MemoriesPrivacy = () => {
  return (
    <Page image={<img width={"72px"} src={MemoriesIcon} />} marginTop={100} alternateBackground={true} heading="Privacy Policy">
      <motion.div {...ANIMATE_PROPS(0.75)} className={style.about}>
        <p>Last Updated: 10 September, 2023</p>
        <br />
        <h3>1. Introduction</h3>
        <p>
          This is the Memories: Daily Journal ("we," "us," or "our") privacy policy. We are committed to
          protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard any data that we may collect from users of our iOS
          application.
        </p>

        <h3>2. Information We Do Not Collect</h3>
        <p>
          We want to assure you that Memories: Daily Journal does not collect any personal
          data or information from its users. We do not request access to your
          device's camera, microphone, contacts, location, or any other personal
          information.
        </p>
        <p>
          We do not use cookies, analytics tools, or any other tracking
          mechanisms to gather user information.
        </p>

        <h3>3. Third-Party Services</h3>
        <p>
          Our app does not integrate with any third-party services, plugins, or
          APIs that would collect or access user data.
        </p>

        <h3>4. Children's Privacy</h3>
        <p>
          Our app is not intended for use by children under the age of 13. We do
          not knowingly collect or solicit personal information from children.
          If you believe that we may have inadvertently collected such
          information, please contact us immediately at regangully@me.com.
        </p>

        <h3>5. Changes to this Privacy Policy</h3>
        <p>
          We reserve the right to modify this Privacy Policy at any time. If we
          make changes, we will post the updated Privacy Policy on our website
          and update the "Last Updated" date at the beginning of this document.
          We encourage you to review this Privacy Policy periodically to stay
          informed about our data practices.
        </p>

        <h3>6. Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at regangully@me.com.
        </p>

        <p>
          By using Memories: Daily Journal, you consent to the terms of this Privacy
          Policy.
        </p>

        <p>Thank you for using Memories: Daily Journal!</p>
      </motion.div>
    </Page>
  );
};

export default MemoriesPrivacy;
