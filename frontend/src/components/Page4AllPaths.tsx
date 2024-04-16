import { useState } from "react";

import { Button } from "./Button.tsx";

import styles from "./Page4AllPaths.module.css";

export function Page4AllPaths() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className={styles.page4Form}>
        <form>
          {/* <br></br> */}
          <h2 className={styles.sectionTitle}>Additional Information</h2>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Certified/Registered/Licensed in any other Jurisdiction
              <input className={styles.input} type="text" name="license" />
            </label>

            <label className={styles.label}>
              Name of State/Jurisdiction
              <input className={styles.input} type="text" name="state" />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Certification Exam
              <input className={styles.input} type="text" name="certificationExam" />
            </label>
            <label className={styles.label}>
              Date of Certification Exam
              <input className={styles.input} type="text" name="dateOfCertificationExam" />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Certified/Registered/License Number
              <input className={styles.input} type="text" name="licenseNumber" />
            </label>

            <label className={styles.label}>
              Date Certified/Registered/License Expires
              <input className={styles.input} type="text" name="license" />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Have you ever been convicted of a Felony?
              <select className={styles.input} id={styles.selectedValue} name="criminalHistory">
                <option value="" disabled selected>
                  Select one
                </option>
                <option>Yes</option>;<option>No</option>;<option></option>
              </select>
            </label>

            <label className={styles.label}>
              If yes, please explain
              <input className={styles.input} type="text" name="explanation" />
            </label>
          </div>

          <hr className={styles.line} />

          <h2 className={styles.sectionTitle}>Rules & Regulations</h2>
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
          />

          <label htmlFor="select" className={styles.checkboxLabel}>
            Click here to acknowledge you have read and understood the rules and regulations
          </label>

          <hr className={styles.line} />

          <h2 className={styles.sectionTitle}>Code of Ethics</h2>
          <p className={styles.note}>
            Please read and sign the{" "}
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
