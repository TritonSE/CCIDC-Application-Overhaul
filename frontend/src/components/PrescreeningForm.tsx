import React, { useState } from "react";
import styles from "./PrescreeningForm.module.css"

import { Bullet, Button, Checkbox } from "./index.ts";

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
    <form onSubmit={handleSubmit}>
      <h1 className={styles.title}>Prescreening Questions</h1>
      <fieldset>
        <input type="checkbox" id="h" name="drone" />
        <label htmlFor="h">h</label>
        <input type="checkbox" id="h1" name="drone" value="" />
        <label htmlFor="h1">h1</label>

        <Bullet>Hello</Bullet>
        <Bullet children={"Hellweflkwo1234567"} />
        <Bullet children={"Hello1wflk234567"} />
        <Bullet children={"w"} />
        <Bullet children={"weflin"} />
      </fieldset>

      {/* <Checkbox examsPassed={examsPassed} setExamsPassed={setExamsPassed} /> */}
      {/* <Button onClick={null}>Continue</Button> */}
    </form>
  );
}

export default PrescreeningForm;
