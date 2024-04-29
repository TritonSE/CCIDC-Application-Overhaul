import { useState } from "react";

import styles from "./Dropdown.module.css";

export function Dropdown(props: { options: string[] }) {
  const [selected, setSelected] = useState("Select One");
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className={styles.dropDown}
        onClick={() => {
          setIsActive(!isActive);
        }}
        role="button"
        tabIndex={0}
        onKeyDown={() => {
          setIsActive(!isActive);
        }}
      >
        <div className={selected === "Select One" ? styles.selectOne : styles.selectedOption}>
          {selected ?? "Select One"}
        </div>
        {isActive && (
          <div className={styles.dpContent}>
            {props.options.map((option, index) => (
              <div
                onClick={() => {
                  setSelected(option);
                  setIsActive(false);
                }}
                className={styles.dpItem}
                role="button"
                tabIndex={0}
                key={index}
                onKeyDown={() => {
                  setIsActive(!isActive);
                }}
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
