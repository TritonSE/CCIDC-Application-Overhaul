import { useCallback } from "react";

import styles from "./Dropdown.module.css";

type DropdownProps = {
  options: string[];
  onSelect?: (value: string) => void;
  required?: boolean;
  name?: string;
  value?: string;
};

export function Dropdown(props: DropdownProps) {
  const { options, onSelect, required, name, value } = props;

  const onSelectChange = useCallback(
    (event: React.FormEvent) => {
      const element = event.target as HTMLSelectElement;
      const option = element.value;
      if (onSelect) onSelect(option);
    },
    [onSelect],
  );

  return (
    <select
      className={`${styles.select} ${value === "" ? styles.unselected : ""}`}
      onChange={onSelectChange}
      required={required}
      name={name}
      defaultValue={value}
    >
      <option value="" hidden={value !== ""} disabled className={styles.defaultOption}>
        Select One
      </option>

      {options?.length &&
        options.map((option) => (
          <option key={option} value={option} className={styles.option}>
            {option}
          </option>
        ))}
    </select>
  );
}
