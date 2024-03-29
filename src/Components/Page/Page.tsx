import shallow from "zustand/shallow";
import useGlobalStore from "../../Store/GlobalStore";
import { useEffect } from "react";
import styles from "./Page.module.css";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText/AnimatedText";

const Page = (props: {
  heading?: string;
  alternateBackground?: boolean;
  children?: any;
  marginTop?: number;
  image?: any;
}) => {
  const { alternateBackground = false, image } = props;

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const placeholderText = [
    { type: "heading2", classes: `${styles.heading}`, text: props.heading },
  ];

  const { enableAlternateBackground, disableAlternateBackground } =
    useGlobalStore(
      (state) => ({
        enableAlternateBackground: state.enableAlternateBackground,
        disableAlternateBackground: state.disableAlternateBackground,
      }),
      shallow
    );

  useEffect(() => {
    if (alternateBackground) {
      enableAlternateBackground();
      document.body.style.backgroundColor = "#071726";
    } else {
      disableAlternateBackground();
      document.body.style.backgroundColor = "#569F63";
    }
  }, [alternateBackground]);

  return (
    <div style={{ marginTop: `${props.marginTop}px` }} className={styles.page}>
      {image}
      {props.heading && (
        <motion.div
          style={{marginTop: image ? "32px" : 0}}
          className="App"
          initial="hidden"
          animate={"visible"}
          variants={container}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
        </motion.div>
      )}

      {props.children}
    </div>
  );
};

export default Page;
