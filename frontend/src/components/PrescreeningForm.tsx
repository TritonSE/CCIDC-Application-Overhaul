import React, { useState } from 'react';
import { Button, Checkbox, Bullet } from "./index.ts";

type ExperienceType = '5+ years' | 'in progress' | 'will not complete';
type ExamType = 'ARE' | 'CASP' | 'LEED-AP' | 'NCBDC' | 'NCIDQ' | 'NKBA-CKBD' | 'RIDQC' | 'none';
type CommercialDesignType = 'Yes' | 'No';

interface CheckboxProps {
  type: 'checkbox' | 'radio';
  name: string;
  value: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

// Assuming Bullet is a component that accepts children and a label prop.
interface BulletProps {
  label: string;
  children: React.ReactNode;
}

const CheckboxComponent: React.FC<CheckboxProps> = ({ type, name, value, onChange, label, checked }) => {
  return (
    <label>
      <input type={type} name={name} value={value} onChange={onChange} checked={checked} />
      {label}
    </label>
  );
};

export function PrescreeningForm() {
  const [experience, setExperience] = useState<ExperienceType>('');
  const [examsPassed, setExamsPassed] = useState<ExamType[]>([]);
  const [commercialDesign, setCommercialDesign] = useState<CommercialDesignType>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ experience, examsPassed, commercialDesign });
    // You can handle the form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Bullet label="1. Please select the appropriate amount of experience you currently have.">
        { /* Radio buttons for experience */ }
        {/* Other components... */}
      </Bullet>

      <Bullet label="2. If you have passed one of the qualifying National Interior Design Exams, please indicate which one.">
        { /* Checkboxes for exams passed */ }
        {/* Other components... */}
      </Bullet>

      <Bullet label="3. Do you mainly practice commercial design?">
        { /* Radio buttons for commercial design */ }
        {/* Other components... */}
      </Bullet>

      <Button type="submit">Continue</Button>
    </form>
  );
}

export default PrescreeningForm;


