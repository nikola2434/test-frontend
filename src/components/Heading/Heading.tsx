import { FC } from "react";
import styles from "./styles.m.styl";

const Heading: FC<{ title: string }> = ({ title }) => {
  return <h1 className={styles.heading}>{title}</h1>;
};

export default Heading;
