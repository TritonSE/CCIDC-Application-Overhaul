import { MouseEventHandler } from "react"; // Import MouseEventHandler

import styles from "./Button.module.css";

export function Button(props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  children: string;
  additionalStyle?: string;
}) {
  // Update the type of onClick prop
  const { onClick, children, additionalStyle } = props;

  return (
    <button className={`${styles.button} ${additionalStyle}`} onClick={onClick}>
      {children}
    </button>
  );
}
