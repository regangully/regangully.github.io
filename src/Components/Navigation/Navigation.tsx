import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ANIMATE_PROPS } from "../../Animation";
import Route from "../../Types/Route";
import style from "./Navigation.module.css";
import Monogram from "../../Resources/monogram.png";

const Navigation = (props: {
  routes: Route[];
  alternateBackground: boolean;
}) => {
  let location = useLocation();
  const { routes, alternateBackground } = props;

  return (
    <div className={style.navContainer}>
      <img className={style.monogram} src={Monogram} />
      {routes.map((route, i) => {
        const isActive = location.pathname.endsWith(route.path);

        return (
          <Link
            className={`${style.navItemLink} ${
              alternateBackground && isActive ? style.alternate : ""
            }`}
            to={route.path}
          >
            <motion.div {...ANIMATE_PROPS(0.2 * i)} className={style.navItem}>
              {route.label}
              <div
                className={`${style.underline} ${
                  alternateBackground ? style.alternate : ""
                } ${isActive ? style.active : ""}`}
              />
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
