import { FC } from "react";
import cn from "classnames";
import styles from "./Icon.module.scss";

type IconProps = {
  name: string;
  className?: string;
};

export const Icon: FC<IconProps> = ({ name, className }) => {
  return (
    <span className={cn("material-symbols-outlined", styles.icon, className)}>
      {name}
    </span>
  );
};
