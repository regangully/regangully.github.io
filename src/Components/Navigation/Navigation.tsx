import { Link, useLocation } from "react-router-dom";
import Route from "../../Types/Route";
import style from "./Navigation.module.css";

const Navigation = (props: {
  routes: Route[];
  alternateBackground: boolean;
}) => {
  let location = useLocation();
  const { routes, alternateBackground } = props;

  return (
    <div className={style.navContainer}>
      {routes.map((route) => {
        const isActive = location.pathname.endsWith(route.path);

        return (
          <Link
            className={`${style.navItemLink} ${
              alternateBackground && isActive ? style.alternate : ""
            }`}
            to={route.path}
          >
            <a className={style.navItem}>
              {route.label}
              <div
                className={`${style.underline} ${
                  alternateBackground ? style.alternate : ""
                } ${isActive ? style.active : ""}`}
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
