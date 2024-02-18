import React, { useState } from 'react';
import ExperienceSelector from './ExperienceSelector';
import ExamsCheckboxGroup from './ExamsCheckboxGroup';
import Button from './Button';

export function PrescreeningForm() {
    const [experience, setExperience] = useState('');
    const [examsPassed, setExamsPassed] = useState([]);
    const [commercialDesign, setCommercialDesign] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Assuming you'll add the logic to post data to the server here.
      console.log({ experience, examsPassed, commercialDesign });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <ExperienceSelector experience={experience} setExperience={setExperience} />
        <ExamsCheckboxGroup examsPassed={examsPassed} setExamsPassed={setExamsPassed} />
        <Button />
      </form>
    );
  }
  
  export default PrescreeningForm;