import { useState } from "react";
import styles from "./Dropdown.module.css";

export function Dropdown(props: { options: string[] }) {
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.dropDown} onClick={() => setIsActive(!isActive)}>
        <div className={isActive ? styles.selectOne : styles.selectedOption}>
          {isActive ? "Select One" : selected}
        </div>
        {isActive && (
          <div className={styles.dpContent}>
            {props.options.map((option) => (
              <div
                onClick={() => {
                  setSelected(option);
                  setIsActive(false);
                }}
                className={styles.dpItem}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
