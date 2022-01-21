import Page from "../../Components/Page/Page";
import ListItem from "../../Components/ListItem/ListItem";
import Daybreak from "../../Resources/Daybreak/daybreak.svg";
import Simpla from "../../Resources/simpla.png";
import style from "./Work.module.css";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import Spacer from "../../Components/Spacer/Spacer";

const Work = () => {
  const [showProjects, setShowProjects] = useState<boolean>(false);

  return (
    <Page heading="Projects" alternateBackground={true}>
      <div className={style.items}>
        <ListItem
          link="https://apps.apple.com/us/app/daybreak-time-tracking/id1558197906"
          subLabel="2021 - Present"
          buttonLabel="View on macOS App Store"
          text={`Daybreak is a simple time tracking app for macOS. It sits in your
          menu-bar, allowing you to easily start and stop tracking your time
          throughout the day. You can create, color code, and assign your entries
          to different projects. These entries can then be quickly exported for
          reporting or invoicing.`}
          image={Daybreak}
        />
        {showProjects && (
          <ListItem
            link={`https://play.google.com/store/apps/details?id=com.regangully.simpla&utm_source=appgrooves&utm_medium=agp_fb7842da7db7675b65a3b2dc4d921362_com.regangully.simpla_us_others_16397992788401`}
            subLabel="2021"
            buttonLabel="View on Google Play"
            text={`A clean, simple, and fresh Android launcher. 
            Built using new Android technologies, and Kotlin. 
            Simpla's aim was to remove the typical distractions that your home screen can have, 
            so you can do what you want quickly, and get on with your day.`}
            image={Simpla}
          />
        )}

        <div className={style.divider} />
        <div className={style.viewMoreSection}>
          <Button
            onClick={() => setShowProjects(!showProjects)}
            variant="link"
            label={
              showProjects ? "Hide Additional Projects" : "View More Projects"
            }
          />
        </div>
      </div>

      <Spacer />
      <h2>Experience</h2>
      <div className={style.items}>
        <ListItem
          link={`https://play.google.com/store/apps/details?id=com.regangully.simpla&utm_source=appgrooves&utm_medium=agp_fb7842da7db7675b65a3b2dc4d921362_com.regangully.simpla_us_others_16397992788401`}
          subLabel="2021"
          buttonLabel="View on Google Play"
          text={`A clean, simple, and fresh Android launcher. 
            Built using new Android technologies, and Kotlin. 
            Simpla's aim was to remove the typical distractions that your home screen can have, 
            so you can do what you want quickly, and get on with your day.`}
          image={Simpla}
        />
      </div>
    </Page>
  );
};

export default Work;
