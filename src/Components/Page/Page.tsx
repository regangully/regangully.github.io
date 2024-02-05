import styles from "./Page.module.css";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText/AnimatedText";
import Container from "../Container/Container";

const Page = (props: {
  heading?: string;
  children?: any;
  marginTop?: number;
  image?: any;
  backgroundColor?: string;
  paddingTop?: string;
  paddingBottom?: string;
}) => {
  const { image, backgroundColor, paddingTop, paddingBottom } = props;

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

  return (
    <div
      className={styles.page}
      style={{
        marginTop: `${props.marginTop}px`,
        backgroundColor,
        paddingTop,
        paddingBottom,
      }}
    >
      <Container>
        {image}
        {props.heading && (
          <motion.div
            style={{ marginTop: image ? "32px" : 0 }}
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
      </Container>
    </div>
  );
};

export default Page;
