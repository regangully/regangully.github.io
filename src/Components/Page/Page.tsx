import shallow from "zustand/shallow";
import useGlobalStore from "../../Store/GlobalStore";
import { useEffect } from "react";
import style from "./Page.module.css"

const Page = (props: {
  heading?: string;
  alternateBackground?: boolean;
  children?: any;
}) => {
  const { alternateBackground = false } = props;

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
      document.body.style.backgroundColor = "#33A6BF";
    }
  }, [alternateBackground]);

  return (
    <div className={style.page}>
      {props.heading && <h2 className={style.heading}>{props.heading}</h2>}

      {props.children}
    </div>
  );
};

export default Page;
