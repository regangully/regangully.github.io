import Page from "../../Components/Page/Page";
import ListItem from "../../Components/ListItem/ListItem";
import Daybreak from "../../Resources/Daybreak/daybreak.png";
import Simpla from "../../Resources/simpla.png";
import Smudge from "../../Resources/smudge.png";
import Skope from "../../Resources/skope.png";
import Estar from "../../Resources/estar.png";
import NomosOne from "../../Resources/nomosone.png";
import style from "./Work.module.css";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import Spacer from "../../Components/Spacer/Spacer";
import { AnimatePresence, motion } from "framer-motion";
import { ANIMATE_PROPS } from "../../Animation";

const Work = () => {
  const [showProjects, setShowProjects] = useState<boolean>(false);
  const [showExperience, setShowExperience] = useState<boolean>(false);

  return (
    <Page heading="Projects" alternateBackground={true}>
      <motion.div {...ANIMATE_PROPS(0.8)} className={style.items}>
        <ListItem
          link="https://apps.apple.com/us/app/daybreak-time-tracking/id1558197906"
          subLabel="2021 - Present"
          buttonLabel="View on macOS App Store"
          text={<p>Daybreak is a simple time tracking app for macOS. It sits in your
            menu-bar, allowing you to easily start and stop tracking your time
            throughout the day. You can create, color code, and assign your entries
            to different projects. These entries can then be quickly exported for
            reporting or invoicing.</p>}
          image={Daybreak}
        />
        <AnimatePresence>
          {showProjects && (
            <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <ListItem
                link={`https://play.google.com/store/apps/details?id=com.regangully.simpla&utm_source=appgrooves&utm_medium=agp_fb7842da7db7675b65a3b2dc4d921362_com.regangully.simpla_us_others_16397992788401`}
                subLabel="2021"
                buttonLabel="View on Google Play"
                text={<p>A clean, simple, and fresh Android launcher.
                  Built using new Android technologies, and Kotlin.
                  Simpla's aim was to remove the typical distractions that your home screen can have,
                  so you can do what you want quickly, and get on with your day.</p>}
                image={Simpla}
              />
            </motion.div>
          )}
        </AnimatePresence>

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
      </motion.div>

      <Spacer />

      <motion.div {...ANIMATE_PROPS(1)}>
        <h2>Experience</h2>
        <div className={style.items}>
          <ListItem
            subLabel="2021"
            text={<><p>Nomos One is a leading lease management and lease accounting solution.</p>

              <p>At Nomos One I have worked as part of an agile development team creating the next generation of the product. Using AWS technologies such as DynamoDB, Cognito, Lambda, and SQS, I have helped to transform the existing monolith into a modern event-driven micro services architecture.</p>

              <p>I have also helped lead development of the new front-end platform. Implementing modern front-end architectural patterns, and technologies such as ReactJS, Typescript, and React Router. This has provided a fast, maintainable, and effective user interface for customers.</p></>}
            image={NomosOne}
          />
          <AnimatePresence>
            {showExperience && (
              <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <ListItem
                  subLabel="2021"
                  text={<>
                    <p>Smudge is a leading New Zealand software development company based in Christchurch. It develops high-quality consumer facing and enterprise apps for renowned clients such as Coca-Cola Amatil, and NZ Police.</p>

                    <p>During my time at Smudge I employed software-engineering development practices such as Scrum, rapid-prototyping and Smudge's intention-based design methodology, to deliver projects that met client requirements.</p>

                    <p>Smudge's culture is fast-paced and cross-functional meaning that I had the chance to work with the team to build a wide variety of software systems. This helped me to further refine my skills in client-consultation, UI/UX design, mobile development in iOS and Android, and ReactJS web development.</p>
                  </>}
                  image={Smudge}
                />
                <ListItem
                  subLabel="2021"
                  text={<>
                    <p>SKOPE is a long-running manufacturer of high quality refrigeration units in Australia and New Zealand.</p>

                    <p>As a software engineering intern with the company I worked with the Engineering and IT departments to develop a new system to be able to easily monitor and analyse refrigeration data retrieved from units in the field</p>

                    <p>I spent time evaluating and understanding the existing data acquisition processes to ensure the end result would be able to meet the needs of engineers and testers in the department.</p>

                    <p>I relied upon modern, and predominately open-source technologies such as Python, JavaScript, NodeJS, HTML, CSS, and Microsoft SQL. These allowed for a light-weight, cost-effective, and maintainable solution.</p>
                  </>}
                  image={Skope}
                />
                <ListItem
                  subLabel="2021"
                  text={<>
                    <p>eStar produces e-commerce solutions for large retail chains such as Country Road Group, Briscoes and Rebel Sport.</p>

                    <p>As eStar's first-ever intern I worked within the company's scrum environment to develop new features for clients of all sizes.</p>

                    <p>As my first real-world software development employment, eStar gave me invaluable experience and inspiration. I got to apply technical skills that I had been learning in my studies to adapt the existing C#, XSLT and SQL code-base. It was also my first chance to feel the excitement of seeing work that I had a hand in creating go-live and have an impact on the shopping experience of thousands of customers.</p>
                  </>}
                  image={Estar}
                />
              </motion.div>
            )
            }
          </AnimatePresence>


          <div className={style.divider} />
          <div className={style.viewMoreSection}>
            <Button
              onClick={() => setShowExperience(!showExperience)}
              variant="link"
              label={
                showExperience ? "Hide Additional Experience" : "View More Experience"
              }
            />
          </div>
        </div>
      </motion.div>
    </Page>
  );
};

export default Work;
