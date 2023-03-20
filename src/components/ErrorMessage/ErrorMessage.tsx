import { FC } from "react";
import styles from "./styles.m.styl";

const ErrorMessage: FC<{ message: string }> = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
