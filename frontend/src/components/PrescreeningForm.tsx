import React, { useState } from 'react';
import { Button, Checkbox } from "./index.ts";

type ExperienceType = '5+ years' | 'in progress' | 'will not complete' | '';
type ExamType = 'ARE' | 'CASP' | 'LEED-AP' | 'NCBDC' | 'NCIDQ' | 'NKBA-CKBD' | 'RIDQC' | 'none';
type CommercialDesignType = 'Yes' | 'No' | '';

export function PrescreeningForm() {
  const [experience, setExperience] = useState<ExperienceType>('');
  const [examsPassed, setExamsPassed] = useState<ExamType[]>([]);
  const [commercialDesign, setCommercialDesign] = useState<CommercialDesignType>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to post data to the server or handle the submission
    console.log({ experience, examsPassed, commercialDesign });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields as implemented above */}
    </form>
  );
}

export default PrescreeningForm;

