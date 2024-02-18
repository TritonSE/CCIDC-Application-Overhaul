import React, { useState } from 'react';

// Define the prop types for the Checkbox component
interface CheckboxProps {
  type: 'checkbox' | 'radio';
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  checked?: boolean;
}

// Define the prop types for the Bullet component
interface BulletProps {
  label: string;
  children: React.ReactNode;
}

// Checkbox component
const Checkbox: React.FC<CheckboxProps> = ({ type, name, value, onChange, label, checked }) => {
  return (
    <label>
      <input type={type} name={name} value={value} onChange={onChange} checked={checked} />
      {label}
    </label>
  );
};

// Bullet component (assuming it renders the label and contains the children)
const Bullet: React.FC<BulletProps> = ({ label, children }) => {
  return (
    <div>
      <p>{label}</p>
      {children}
    </div>
  );
};

// PrescreeningForm component
const PrescreeningForm: React.FC = () => {
  const [experience, setExperience] = useState('');
  const [examsPassed, setExamsPassed] = useState<string[]>([]);
  const [commercialDesign, setCommercialDesign] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ experience, examsPassed, commercialDesign });
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Experience question */}
      <Bullet label="1. Please select the appropriate amount of experience you currently have.">
        <Checkbox
          type="radio"
          name="experience"
          value="5+ years"
          onChange={() => setExperience('5+ years')}
          label="5+ years of Diversified Design Experience and/or 40+ Core Units"
        />
        <Checkbox
          type="radio"
          name="experience"
          value="in progress"
          onChange={() => setExperience('in progress')}
          label="I do not have 5 years of Diversified Design Experience and/or 40+ Core Units but am in the process of completing one of these two and will do within a year from today."
        />
        <Checkbox
          type="radio"
          name="experience"
          value="will not complete"
          onChange={() => setExperience('will not complete')}
          label="I do not have 5 years of Diversified Design Experience or have 40+ Core Units and will not complete at least one of these two requirements within a year from today."
        />
      </Bullet>

      {/* Exams passed question */}
      <Bullet label="2. If you have passed one of the qualifying National Interior Design Exams, please indicate which one.">
        {['ARE', 'CASP', 'LEED-AP (+)', 'NCBDC', 'NCIDQ', 'NKBA-CKBD (+)', 'RIDQC'].map((exam) => (
          <Checkbox
            type="checkbox"
            name="examsPassed"
            value={exam}
            onChange={(e) => {
              const checked = e.target.checked;
              setExamsPassed((prevExams) =>
                checked ? [...prevExams, e.target.value] : prevExams.filter((ex) => ex !== e.target.value)
              );
            }}
            label={exam}
            checked={examsPassed.includes(exam)}
          />
        ))}
        <Checkbox
          type="checkbox"
          name="examsPassed"
          value="none"
          onChange={() => setExamsPassed([])}
          label="I have not passed any of the qualifying National Interior Design Exams."
          checked={examsPassed.length === 0}
        />
      </Bullet>

      {/* Commercial design question */}
      <Bullet label="3. Do you mainly practice commercial design?">
        <Checkbox
          type="radio"
          name="commercialDesign"
          value="Yes"
          onChange={() => setCommercialDesign('Yes')}
          label="Yes"
        />
        <Checkbox
          type="radio"
          name="commercialDesign"
          value="No"
          onChange={() => setCommercialDesign('No')}
          label="No"
        />
      </Bullet>

      <button type="submit">Continue</button>
    </form>
  );
};

export default PrescreeningForm;
