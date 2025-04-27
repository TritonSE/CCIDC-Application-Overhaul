import { MouseEventHandler, ReactNode } from "react"; // Import MouseEventHandler

import styles from "./Button.module.css";

export function Button(props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  children: string | ReactNode;
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
