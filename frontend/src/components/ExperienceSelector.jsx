import React from 'react';
import styles from './ExperienceSelector.module.css';

const ExperienceSelector = ({ experience, setExperience }) => {
  const handleChange = (event) => {
    setExperience(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="<5"
          checked={experience === "<5"}
          onChange={handleChange}
        />
        Less than 5 years of experience
      </label>
      <label>
        <input
          type="radio"
          value="5+"
          checked={experience === "5+"}
          onChange={handleChange}
        />
        5 years or more of experience
      </label>
    </div>
  );
};

export default ExperienceSelector;
