import styles from "./Page.module.css";
import AnimatedText from "../AnimatedText/AnimatedText";
import Container from "../Container/Container";

const Page = (props: {
  id?: string;
  heading?: string;
  children?: any;
  marginTop?: number;
  image?: any;
  backgroundColor?: string;
  paddingTop?: string;
  paddingBottom?: string;
  headingColor?: string;
  icon?: any;
}) => {
  const {
    icon,
    image,
    backgroundColor,
    paddingTop,
    paddingBottom,
    headingColor,
  } = props;

  const PageIcon = icon;

  const text = [
    { type: "heading2", classes: `${styles.heading}`, text: props.heading },
  ];

  return (
    <div
      id={props.id}
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: image ? "32px" : 0,
            }}
            className="App"
          >
            {PageIcon && (
              <PageIcon color={headingColor} weight={"fill"} size={48} />
            )}
            <div
              style={{
                marginLeft: "12px",
                marginTop: "16px",
                color: headingColor,
              }}
              className="container"
            >
              {text.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </div>
        )}

        {props.children}
      </Container>
    </div>
  );
};

export default Page;
