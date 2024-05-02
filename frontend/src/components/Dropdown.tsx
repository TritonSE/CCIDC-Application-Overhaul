import { useState } from "react";

import styles from "./Dropdown.module.css";

export function Dropdown(props: { options: string[]; onSelect: (value: string) => void }) {
  const [selected, setSelected] = useState("Select One");
  const [isActive, setIsActive] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelected(option);
    setIsActive(false);
    props.onSelect(option); // Call the onSelect callback with the selected option
  };

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
                  handleOptionClick(option);
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
