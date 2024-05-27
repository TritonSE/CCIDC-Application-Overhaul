import { useCallback, useState } from "react";

import styles from "./Dropdown.module.css";

type DropdownProps = {
  options: string[];
  onSelect?: (value: string) => void;
  required?: boolean;
  defaultValue?: string;
};

export function Dropdown(props: DropdownProps) {
  const { options, onSelect, required, defaultValue } = props;

  // default value must be "" for required prop to work, https://stackoverflow.com/a/6048891
  const defaultSelected = "";

  const [selected, setSelected] = useState(defaultValue ?? defaultSelected);

  const onSelectChange = useCallback((event:React.FormEvent) => {
    const element = event.target as HTMLSelectElement;
    const option = element.value;
    setSelected(option);
    if (onSelect) onSelect(option);
  },[setSelected, onSelect] )


  return (
    <select
      className={`${styles.select} ${selected === defaultSelected ? styles.unselected : ""}`}
      onChange={onSelectChange}
      required={required}
      defaultValue={selected}
    >
      <option
        value={defaultSelected}
        hidden={selected !== defaultSelected}
        disabled
        className={styles.defaultOption}
      >
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
