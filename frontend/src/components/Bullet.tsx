import React from "react";
import styles from "./Bullet.module.css";

// Define a type for the props
type BulletProps = {
  experience: string;
  setExperience: (experience: string) => void;
};

const Bullet: React.FC<BulletProps> = ({ experience, setExperience }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(event.target.value);
  };

  return (
    <div>
      <label>
        <input type="radio" value="<5" checked={experience === "<5"} onChange={handleChange} />
        Less than 5 years of experience
      </label>
      <label>
        <input type="radio" value="5+" checked={experience === "5+"} onChange={handleChange} />5
        years or more of experience
      </label>
    </div>
  );
};

export default Bullet;
