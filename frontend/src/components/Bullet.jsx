import React from 'react';
import styles from './Bullet.module.css';

const Bullet = ({ experience, setExperience }) => {
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

export default Bullet;
