import style from "./Container.module.css";

const Container = (props: { children: any }) => {
  return <div className={style.container}>
    {props.children}
  </div>
};

export default Container;
