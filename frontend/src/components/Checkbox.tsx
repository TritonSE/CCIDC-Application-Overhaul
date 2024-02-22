import React from "react";

import styles from "./Checkbox.module.css";

// Define a type for the props
type CheckboxProps = {
  examsPassed: string[];
  setExamsPassed: (exams: string[]) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({ examsPassed, setExamsPassed }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const examName = event.target.name;
    if (examsPassed.includes(examName)) {
      setExamsPassed(examsPassed.filter((exam) => exam !== examName));
    } else {
      setExamsPassed([...examsPassed, examName]);
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="ARE"
          checked={examsPassed.includes("ARE")}
          onChange={handleCheckboxChange}
        />
        ARE
      </label>
      {/* Repeat for other exams */}
    </div>
  );
};

export default Checkbox;
