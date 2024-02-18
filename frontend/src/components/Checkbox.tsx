import React, { useState } from 'react';
import { Button, Bullet, Checkbox } from "./index.tsx";

// PrescreeningForm component
const PrescreeningForm: React.FC = () => {
  const [experience, setExperience] = useState<string>('');
  const [examsPassed, setExamsPassed] = useState<string[]>([]);
  const [commercialDesign, setCommercialDesign] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ experience, examsPassed, commercialDesign });
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Experience question */}
      <div>
        <p>1. Please select the appropriate amount of experience you currently have.</p>
        <Bullet experience={experience} setExperience={setExperience} />
        {/* More radio buttons can be added here if needed */}
      </div>

      {/* Exams passed question */}
      <div>
        <p>2. If you have passed one of the qualifying National Interior Design Exams, please indicate which one.</p>
        <Checkbox examsPassed={examsPassed} setExamsPassed={setExamsPassed} />
        {/* The Checkbox component will need to be updated to include all exam options */}
      </div>

      {/* Commercial design question */}
      <div>
        <p>3. Do you mainly practice commercial design?</p>
        <label>
          <input type="radio" name="commercialDesign" value="Yes" checked={commercialDesign === "Yes"} onChange={(e) => setCommercialDesign(e.target.value)} />Yes
        </label>
        <label>
          <input type="radio" name="commercialDesign" value="No" checked={commercialDesign === "No"} onChange={(e) => setCommercialDesign(e.target.value)} />No
        </label>
      </div>

      <Button type="submit" text="Continue" />
    </form>
  );
};

export default PrescreeningForm;
