import { useState } from "react";

import upload from "../assets/uploadIcon.svg";
import { Dropdown } from "../components/index.ts";

import styles from "./Step4.module.css";

// Pass in Application's next function
export type StepProps = {
  next: () => void;
};

export const Step4: React.FC<StepProps> = ({ next }: StepProps) => {
  const [certified, setCertified] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [state, setState] = useState("");
  const [licenseExpiration, setLicenseExpiration] = useState("");
  const [certificationExam, setCertificationExam] = useState("");
  const [selectedFelonyCharge, setSelectedFelonyCharge] = useState("");
  const [dateOfCertificationExam, setDateOfCertificationExam] = useState("");
  const [eplanation, setExplanation] = useState("");

  // Stores the Selected Option Value
  const handleSelect = (option: string) => {
    setSelectedFelonyCharge(option);
    console.log({ selectedFelonyCharge });
  };

  // Checks if all Required Inputs are filled before moving on to next step
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) {
      return;
    }
    next();
  };

  return (
    <>
      <form id="step4-form" className={styles.formContainer} onSubmit={onSubmit}>
        <div className={styles.formSection}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionTitle}>Additional Information</h2>
          </div>

          <div className={styles.formSectionContainer}>
            <div className={styles.inputBox}>
              <label htmlFor="license" className={styles.inputTitle}>
                Certified/Registered/Licensed in any other Jurisdiction
                <input
                  className={styles.inputText}
                  type="text"
                  id="license"
                  name="license"
                  value={certified}
                  onChange={(e) => {
                    setCertified(e.target.value);
                  }}
                  placeholder="Enter Certified/Registered/Licensed in any other Jurisdiction"
                />
              </label>
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="licenseNumber" className={styles.inputTitle}>
                Certified/Registered/License Number
                <input
                  className={styles.inputText}
                  type="text"
                  name="licenseNumber"
                  id="licenseNumber"
                  value={licenseNumber}
                  onChange={(e) => {
                    setLicenseNumber(e.target.value);
                  }}
                  placeholder="Enter Certified/Registered/License Number"
                />
              </label>
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="state" className={styles.inputTitle}>
                Name of State/Jurisdiction
                <input
                  className={styles.inputText}
                  type="text"
                  name="state"
                  id="state"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  placeholder="Enter Name of State/Jurisdiction"
                />
              </label>
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="licenseExpiration" className={styles.inputTitle}>
                Date Certified/Registered/License Expires
                <input
                  className={styles.inputText}
                  type="text"
                  name="licenseExpiration"
                  id="licenseExpiration"
                  value={licenseExpiration}
                  onChange={(e) => {
                    setLicenseExpiration(e.target.value);
                  }}
                  placeholder="Enter Date Certified/Registered/License Expires"
                />
              </label>
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="certificationExam" className={styles.inputTitle}>
                Certification Exam
                <input
                  className={styles.inputText}
                  type="text"
                  name="certificationExam"
                  id="certificationExam"
                  value={certificationExam}
                  onChange={(e) => {
                    setCertificationExam(e.target.value);
                  }}
                  placeholder="Enter Certification Exam"
                />
              </label>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="dropDown" className={`${styles.inputTitle} ${styles.felonyLabel}`}>
                Have you ever been convicted of a Felony?<span className={styles.boldRed}>*</span>
                <Dropdown options={["Yes", "No"]} onSelect={handleSelect}></Dropdown>
                {/* Add if dropDown Required */}
                <input
                  className={styles.customDropDown}
                  type="text"
                  id="dropDown"
                  name="dropDown"
                  defaultValue={selectedFelonyCharge}
                  required
                ></input>
              </label>
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="dateOfCertificationExam" className={styles.inputTitle}>
                Date of Certification Exam
                <input
                  className={styles.inputText}
                  type="text"
                  name="dateOfCertificationExam"
                  placeholder="mm/dd/yyyy"
                  id="dateOfCertificationExam"
                  pattern="\d{2}-\d{2}-\d{4}"
                  value={dateOfCertificationExam}
                  onChange={(e) => {
                    setDateOfCertificationExam(e.target.value);
                  }}
                />
              </label>
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="explanation" className={styles.inputTitle}>
                If yes, please explain
                <input
                  className={styles.inputText}
                  type="text"
                  name="explanation"
                  id="explanation"
                  placeholder="Please explain here"
                  value={eplanation}
                  onChange={(e) => {
                    setExplanation(e.target.value);
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.formSection}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionTitle}>
              Rules & Regulations<span className={styles.boldRed}>*</span>
            </h2>
          </div>

          <p className={styles.note}>
            Please read the{" "}
            <a
              className={styles.lightBlue}
              href="https://ccidc.org/wp-content/uploads/2017/07/CCIDC-Rules-and-Regulations.pdf"
            >
              CCIDC RULES & REGULATIONS
            </a>
          </p>

          <label htmlFor="select" className={styles.checkboxLabel}>
            <input className={styles.select} type="checkbox" id="select" required />
            <span>
              Click here to acknowledge you have read and understood the rules and regulations
            </span>
          </label>
        </div>
        <hr />

        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>
            Code of Ethics<span className={styles.boldRed}>*</span>
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

          <button className={styles.upload}>
            Upload Proof of National Exam
            <img src={upload} className={styles.uploadButton} alt="buttonpng" />
          </button>
        </div>
        <hr className={styles.bottomLine} />
      </form>
    </>
  );
};
