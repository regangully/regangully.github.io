import style from "./ListItem.module.css";
import Button from "../Button/Button";

const ListItem = (props: {
  image: string;
  text?: string;
  subLabel?: string;
  link?: string;
  buttonLabel: string;
}) => {
  return (
    <div className={style.item}>
      <div className={style.imageContainer}>
        <img className={style.image} src={props.image} />
      </div>
      <div>
        <p className={style.text}>{props.text}</p>
        <div className={style.footer}>
          <span className={style.subLabel}>{props.subLabel}</span>
          <div className={style.link}>
            <a target="_blank" href={props.link}>
              <Button label={props.buttonLabel} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
