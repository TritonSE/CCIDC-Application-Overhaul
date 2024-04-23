import { useState } from "react";

import { Button, Dropdown } from "./index.ts";
import styles from "./Step4.module.css";

export function Step4() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className={styles.page4Form}>
        <form>
          <h2 className={styles.sectionTitle}>Additional Information</h2>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Certified/Registered/Licensed in any other Jurisdiction
              <input
                className={styles.input}
                type="text"
                name="license"
                placeholder="Certified/Registered/Licensed in any other Jurisdiction"
              />
            </label>

            <label className={styles.label}>
              Certified/Registered/License Number
              <input
                className={styles.input}
                type="text"
                name="licenseNumber"
                placeholder="Certified/Registered/License Number"
              />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Name of State/Jurisdiction
              <input
                className={styles.input}
                type="text"
                name="state"
                placeholder="Name of State/Jurisdictionn"
              />
            </label>

            <label className={styles.label}>
              Date Certified/Registered/License Expires
              <input
                className={styles.input}
                type="text"
                name="license"
                placeholder="Date Certified/Registered/License Expires"
              />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Certification Exam
              <input
                className={styles.input}
                type="text"
                name="certificationExam"
                placeholder="Certification Exam"
              />
            </label>

            <label className={styles.label}>
              Have you ever been convicted of a Felony?
              <Dropdown options={["Yes", "No"]}></Dropdown>
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Date of Certification Exam
              <input
                className={styles.input}
                type="text"
                name="dateOfCertificationExam"
                placeholder="Date of Certification Exam"
              />
            </label>

            <label className={styles.label}>
              If yes, please explain
              <input
                className={styles.input}
                type="text"
                name="explanation"
                placeholder="Please explain here"
              />
            </label>
          </div>

          <hr className={styles.line} />

          <h2 className={styles.sectionTitle}>
            Rules & Regulations<span className={styles.red}>*</span>
          </h2>
          <p className={styles.note}>
            Please read the{" "}
            <a
              className={styles.lightBlue}
              href="https://ccidc.org/wp-content/uploads/2017/07/CCIDC-Rules-and-Regulations.pdf"
            >
              CCIDC RULES & REGULATIONS
            </a>
          </p>

          <input
            className={styles.select}
            type="checkbox"
            id="select"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
          />

          <label htmlFor="select" className={styles.checkboxLabel}>
            Click here to acknowledge you have read and understood the rules and regulations
          </label>

          <hr className={styles.line} />

          <h2 className={styles.sectionTitle}>
            Code of Ethics<span className={styles.red}>*</span>
          </h2>
          <p className={styles.note}>
            Please read the{" "}
            <a
              className={styles.lightBlue}
              href="https://ccidc.org/wp-content/uploads/2023/05/CCIDC-CODE-OF-ETHICS-2023.pdf"
            >
              CCIDC CODE OF ETHICS
            </a>
          </p>

          <br></br>

          <Button onClick={undefined} additionalStyle={styles.upload}>
            Upload Signed Code of Ethics
          </Button>

          <hr className={styles.bottomLine} />
        </form>
      </div>
    </>
  );
}
