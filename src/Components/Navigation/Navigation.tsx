import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ANIMATE_PROPS } from "../../Animation";
import Route from "../../Types/Route";
import style from "./Navigation.module.css";
import Monogram from "../../Resources/monogram.png";
import Container from "../Container/Container";
import { HashLink } from "react-router-hash-link";
import { List, Moon, Sun, X } from "phosphor-react";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../Utilities/useWindowDimensions";

const Navigation = (props: {
  routes: Route[];
  actions?: Route[];
  alternateBackground: boolean;
}) => {
  const { width } = useWindowDimensions();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  let location = useLocation();
  const { routes, actions = [], alternateBackground } = props;

  useEffect(() => {
    if (width > 780 && isOpen) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <div className={style.wrapper}>
      <Container>
        <div className={style.content}>
          <Link to={"/"}>
            <img className={style.monogram} src={Monogram} />
          </Link>
          <div className={`${style.links} ${isOpen ? style.open : ""}`}>
            <div className={style.close}>
              <X
                className={style.closeIcon}
                onClick={() => setIsOpen(false)}
                style={{ cursor: "pointer" }}
                size={42}
              />
            </div>
            <div className={style.routes}>
              {routes.map((route, i) => {
                const isActive = location.pathname.endsWith(route.path);

                return (
                  <HashLink
                    smooth
                    className={`${style.navItemLink} ${
                      alternateBackground && isActive ? style.alternate : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                    to={route.path}
                  >
                    <motion.div
                      {...ANIMATE_PROPS(0.2 * i)}
                      className={style.navItem}
                    >
                      {route.label}
                      <div
                        className={`${style.underline} ${
                          alternateBackground ? style.alternate : ""
                        } ${isActive ? style.active : ""}`}
                      />
                    </motion.div>
                  </HashLink>
                );
              })}
            </div>
            <div className={style.actions}>
              {actions.map((route, i) => {
                const isActive = location.pathname.endsWith(route.path);

                return (
                  <HashLink
                    onClick={() => setIsOpen(false)}
                    smooth
                    className={`${style.navItemLink} ${
                      alternateBackground && isActive ? style.alternate : ""
                    }`}
                    to={route.path}
                  >
                    <motion.div
                      {...ANIMATE_PROPS(0.2 * i)}
                      className={style.navItem}
                    >
                      {route.label}
                      <div
                        className={`${style.underline} ${
                          alternateBackground ? style.alternate : ""
                        } ${isActive ? style.active : ""}`}
                      />
                    </motion.div>
                  </HashLink>
                );
              })}
              <div className={style.toggle}>
                <Moon size={28} />
              </div>
            </div>
          </div>
          <List
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen(true)}
            className={style.menu}
            size={42}
          />
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
