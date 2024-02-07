import Page from "../../Components/Page/Page";
import ListItem from "../../Components/ListItem/ListItem";
import Daybreak from "../../Resources/Daybreak/daybreak.png";
import Memories from "../../Resources/memories.png";
import Simpla from "../../Resources/simpla.png";
import style from "./Projects.module.css";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ANIMATE_PROPS } from "../../Animation";
import { Globe } from "phosphor-react";

const Projects = () => {
  const [showProjects, setShowProjects] = useState<boolean>(false);

  return (
    <Page
      icon={Globe}
      id="projects"
      headingColor="var(--theme-text-5)"
      backgroundColor="var(--theme-background-dark)"
      heading="Projects"
    >
      <div {...ANIMATE_PROPS(0.8)} className={style.items}>
        <ListItem
          isDark={true}
          link="https://apps.apple.com/us/app/daybreak-time-tracking/id1558197906"
          subLabel="2021 - Present"
          buttonLabel="View on macOS App Store"
          text={
            <p>
              Daybreak is a simple time tracking app for macOS. It sits in your
              menu-bar, allowing you to easily start and stop tracking your time
              throughout the day. You can create, color code, and assign your
              entries to different projects. These entries can then be quickly
              exported for reporting or invoicing.
            </p>
          }
          imageHeight={80}
          image={Daybreak}
        />
        <ListItem
          isDark={true}
          link="https://apps.apple.com/us/app/memories-daily-journal/id6465693086?platform=iphone"
          subLabel="2023 - Present"
          buttonLabel="View on iOS App Store"
          text={
            <p>
              A free iOS app to easily record your thoughts, experiences, and
              feelings. Set daily reminders to never miss a moment. Your entries
              are organized by date for easy access, and we prioritize your
              privacy and security.
            </p>
          }
          imageHeight={80}
          image={Memories}
        />
        <AnimatePresence>
          {showProjects && (
            <div>
              <ListItem
                isDark={true}
                link={`https://play.google.com/store/apps/details?id=com.regangully.simpla&utm_source=appgrooves&utm_medium=agp_fb7842da7db7675b65a3b2dc4d921362_com.regangully.simpla_us_others_16397992788401`}
                subLabel="2021"
                buttonLabel="View on Google Play"
                text={
                  <p>
                    A clean, simple, and fresh Android launcher. Built using new
                    Android technologies, and Kotlin. Simpla's aim was to remove
                    the typical distractions that your home screen can have, so
                    you can do what you want quickly, and get on with your day.
                  </p>
                }
                imageHeight={80}
                image={Simpla}
              />
            </div>
          )}
        </AnimatePresence>

        <div className={style.viewMoreSection}>
          <Button
            onClick={() => setShowProjects(!showProjects)}
            label={
              showProjects ? "Hide Additional Projects" : "View More Projects"
            }
          />
        </div>
      </div>
    </Page>
  );
};

export default Projects;
