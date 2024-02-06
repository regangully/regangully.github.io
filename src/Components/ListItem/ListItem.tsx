import style from "./ListItem.module.css";
import Button from "../Button/Button";

const ListItem = (props: {
  image: string;
  text?: any;
  subLabel?: string;
  link?: string;
  buttonLabel?: string;
  imageHeight?: number;
  isDark?: boolean;
}) => {
  return (
    <div className={style.item}>
      <div className={style.imageContainer}>
        <img
          className={style.image}
          src={props.image}
          height={props.imageHeight}
        />
      </div>
      <div>
        <div className={`${style.text} ${props.isDark ? style.dark : ""}`}>
          {props.text}
        </div>
        <div className={style.footer}>
          <span className={`${style.subLabel} ${props.isDark ? style.dark : ""}`}>{props.subLabel}</span>
          {props.buttonLabel && (
            <div className={style.link}>
              <a target="_blank" href={props.link}>
                <Button label={props.buttonLabel} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
