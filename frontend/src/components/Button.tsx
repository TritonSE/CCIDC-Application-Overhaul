import { MouseEventHandler } from "react"; // Import MouseEventHandler

import styles from "./Button.module.css";

export function Button(props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  children: string;
}) {
  // Update the type of onClick prop
  const { onClick, children } = props;

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
