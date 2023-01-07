import { FC } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { useData } from "@/data/useData";
import styles from "./Navigation.module.scss";

type NavigationProps = {};

export const Navigation: FC<NavigationProps> = () => {
  const { dayId, days } = useData();

  return (
    <nav className={styles.nav}>
      {days && days.length > 0 && (
        <ul className={styles.menu}>
          {days.map((day) => (
            <li className={styles.item} key={day.id}>
              <NavLink
                to={`/?day=${day.id}`}
                className={cn(styles.link, {
                  [styles.active]: day.active && dayId,
                })}
              >
                {day.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
