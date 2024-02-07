import { AnimatePresence } from "framer-motion";
import { ANIMATE_PROPS } from "../../Animation";
import Button from "../../Components/Button/Button";
import ListItem from "../../Components/ListItem/ListItem";
import Smudge from "../../Resources/smudge-dark.png";
import Skope from "../../Resources/skope-dark.png";
import Estar from "../../Resources/estar-dark.png";
import NomosOne from "../../Resources/nomosone-dark.png";
import SmudgeLight from "../../Resources/smudge.png";
import SkopeLight from "../../Resources/skope.png";
import EstarLight from "../../Resources/estar.png";
import NomosOneLight from "../../Resources/nomosone.png";
import style from "./Experience.module.css";
import { useState } from "react";
import Page from "../../Components/Page/Page";
import { Sun } from "phosphor-react";
import { useTheme } from "../../Theme";

const Experience = () => {
  const { theme } = useTheme();
  const [showExperience, setShowExperience] = useState<boolean>(false);

  return (
    <Page
      icon={Sun}
      backgroundColor="var(--theme-page-background-1)"
      id="experience"
      heading="Experience"
    >
      <div {...ANIMATE_PROPS(1)}>
        <div className={style.items}>
          <ListItem
            subLabel="2021 - Present"
            text={
              <>
                <p>
                  Nomos One is a leading lease management and lease accounting
                  solution.
                </p>

                <p>
                  At Nomos One I have worked as part of an agile development
                  team creating the next generation of the product. Using AWS
                  technologies such as DynamoDB, Cognito, Lambda, and SQS, I
                  have helped to transform the existing monolith into a modern
                  event-driven micro services architecture.
                </p>

                <p>
                  I have also helped lead development of the new front-end
                  platform. Implementing modern front-end architectural
                  patterns, and technologies such as ReactJS, Typescript, and
                  React Router. This has provided a fast, maintainable, and
                  effective user interface for customers.
                </p>
              </>
            }
            imageHeight={80}
            image={theme === "light" ? NomosOne : NomosOneLight}
          />
          <AnimatePresence>
            {showExperience && (
              <div>
                <ListItem
                  subLabel="2018 - 2021"
                  text={
                    <>
                      <p>
                        Smudge is a leading New Zealand software development
                        company based in Christchurch. It develops high-quality
                        consumer facing and enterprise apps for renowned clients
                        such as Coca-Cola Amatil, and NZ Police.
                      </p>

                      <p>
                        During my time at Smudge I employed software-engineering
                        development practices such as Scrum, rapid-prototyping
                        and Smudge's intention-based design methodology, to
                        deliver projects that met client requirements.
                      </p>

                      <p>
                        Smudge's culture is fast-paced and cross-functional
                        meaning that I had the chance to work with the team to
                        build a wide variety of software systems. This helped me
                        to further refine my skills in client-consultation,
                        UI/UX design, mobile development in iOS and Android, and
                        ReactJS web development.
                      </p>
                    </>
                  }
                  imageHeight={80}
                  image={theme === "light" ? Smudge : SmudgeLight}
                />
                <ListItem
                  subLabel="2016 - 2017"
                  text={
                    <>
                      <p>
                        SKOPE is a long-running manufacturer of high quality
                        refrigeration units in Australia and New Zealand.
                      </p>

                      <p>
                        As a software engineering intern with the company I
                        worked with the Engineering and IT departments to
                        develop a new system to be able to easily monitor and
                        analyse refrigeration data retrieved from units in the
                        field
                      </p>

                      <p>
                        I spent time evaluating and understanding the existing
                        data acquisition processes to ensure the end result
                        would be able to meet the needs of engineers and testers
                        in the department.
                      </p>

                      <p>
                        I relied upon modern, and predominately open-source
                        technologies such as Python, JavaScript, NodeJS, HTML,
                        CSS, and Microsoft SQL. These allowed for a
                        light-weight, cost-effective, and maintainable solution.
                      </p>
                    </>
                  }
                  imageHeight={80}
                  image={theme === "light" ? Skope : SkopeLight}
                />
                <ListItem
                  subLabel="2015 - 2016"
                  text={
                    <>
                      <p>
                        eStar produces e-commerce solutions for large retail
                        chains such as Country Road Group, Briscoes and Rebel
                        Sport.
                      </p>

                      <p>
                        As eStar's first-ever intern I worked within the
                        company's scrum environment to develop new features for
                        clients of all sizes.
                      </p>

                      <p>
                        As my first real-world software development employment,
                        eStar gave me invaluable experience and inspiration. I
                        got to apply technical skills that I had been learning
                        in my studies to adapt the existing C#, XSLT and SQL
                        code-base. It was also my first chance to feel the
                        excitement of seeing work that I had a hand in creating
                        go-live and have an impact on the shopping experience of
                        thousands of customers.
                      </p>
                    </>
                  }
                  imageHeight={80}
                  image={theme === "light" ? Estar : EstarLight}
                />
              </div>
            )}
          </AnimatePresence>

          <div className={style.viewMoreSection}>
            <Button
              onClick={() => setShowExperience(!showExperience)}
              label={
                showExperience
                  ? "Hide Additional Experience"
                  : "View More Experience"
              }
            />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Experience;
