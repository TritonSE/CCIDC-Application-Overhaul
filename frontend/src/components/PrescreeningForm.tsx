import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./PrescreeningForm.module.css";

import { Button, Page } from "./index.ts";

// If Bullet and Checkbox have specific prop types,
// you should import and use those types here for setExperience and setExamsPassed functions.

export function PrescreeningForm() {
  const [experience, setExperience] = useState<string>("");
  const [examsPassed, setExamsPassed] = useState<string[]>([]); // Assuming examsPassed is an array of strings
  const [commercialDesign, setCommercialDesign] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Assuming you'll add the logic to post data to the server here.
    console.log({ experience, examsPassed, commercialDesign });
  };

  return (
    <Page>
      <h1 className={styles.title}>Prescreening Questions</h1>
      <p className={styles.body}>
        Please answer the following questions about your experience as an Interior Designer. Based
        on your responses, we will automatically direct you into the appropriate pathway. View more
        information about the pathways here.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <p className={styles.question}>
            1. Please select the appropriate amount of experience you currently have.
          </p>

          <input type="radio" id="op11" name="question1" />
          <label htmlFor="op11">
            5+ years of Diversified Design Experience and/or 40+ Core Units
          </label>

          <br></br>
          <br></br>

          <input type="radio" id="op12" name="question1" />
          <label htmlFor="op12">
            I do not have 5 years of Diversified Design Experience and/or 40+ Core Units but am in
            the process of completing one of these two and will do within a year from today.
          </label>

          <br></br>
          <br></br>

          <input type="radio" id="op13" name="question1" />
          <label htmlFor="op13">
            I do not have 5 years of Diversified Design Experience or have 40+ Core Units and will
            not complete at least one of these two requirements within a year from today.
          </label>
        </div>

        <div>
          <p className={styles.question}>
            2. If you have passed any of the following qualifying National Interior Design Exams,
            please indicate so
            <ul className="bullet-list">
              <li>- ARE</li>
              <li>- CASP</li>
              <li>- LEED - AP (+)</li>
              <li>- NCBDC</li>
              <li>- NCIDQ</li>
              <li>- NKBA - CKBD (+)</li>
            </ul>
          </p>

          <input type="radio" id="op21" name="question2" />
          <label htmlFor="op21">Yes</label>

          <br></br>
          <br></br>

          <input type="radio" id="op22" name="question2" />
          <label htmlFor="op22">No</label>
        </div>

        <div>
          <p className={styles.question}>3. Do you mainly practice commercial design?</p>

          <input type="radio" id="op31" name="question3" />
          <label htmlFor="op31">Yes</label>

          <br></br>
          <br></br>

          <input type="radio" id="op32" name="question3" />
          <label htmlFor="op32">No</label>
        </div>

        <NavLink className={styles.centeredContainer} to={"/prescreening"}>
          <Button onClick={null}>Continue</Button>
        </NavLink>
      </form>
    </Page>
  );
}

export default PrescreeningForm;
