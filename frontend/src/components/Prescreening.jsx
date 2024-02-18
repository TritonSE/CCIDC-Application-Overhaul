import React, { useState } from 'react';
import ExperienceSelector from './ExperienceSelector';
import ExamsCheckboxGroup from './ExamsCheckboxGroup';
import Button from './Button';

// If ExperienceSelector and ExamsCheckboxGroup have specific prop types,
// you should import and use those types here for setExperience and setExamsPassed functions.

export function PrescreeningForm() {
  const [experience, setExperience] = useState<string>('');
  const [examsPassed, setExamsPassed] = useState<string[]>([]); // Assuming examsPassed is an array of strings
  const [commercialDesign, setCommercialDesign] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
