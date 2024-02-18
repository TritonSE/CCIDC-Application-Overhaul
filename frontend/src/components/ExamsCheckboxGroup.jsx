import React from 'react';

import styles from './ExamsCheckboxGroup.module.css';

const ExamsCheckboxGroup = ({ examsPassed, setExamsPassed }) => {
  const handleCheckboxChange = (event) => {
    if (examsPassed.includes(event.target.name)) {
      setExamsPassed(examsPassed.filter((exam) => exam !== event.target.name));
    } else {
      setExamsPassed([...examsPassed, event.target.name]);
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

export default ExamsCheckboxGroup;
