import { useContext } from "react";

import upload from "../assets/uploadIcon.svg";
import { FormContext } from "../contexts/FormContext.tsx";
import styles from "./Step4.module.css";
import { Button, Dropdown } from "./index.ts";

export type StepProps = {
  next: () => void;
};

export const Step4: React.FC<StepProps> = ({ next }: StepProps) => {
  const { formData, setFormData } = useContext(FormContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelect = (option: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      convictedOfFelony: option,
    }));
    console.log(formData.convictedOfFelony);
  };

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
      <form id="step4-form" onSubmit={onSubmit}>
        <div className={styles.page4Form}>
          <h2 className={styles.sectionTitle}>Additional Information</h2>

          <div className={styles.formSectionContainer}>
            <div className={styles.inputBox}>
              <label htmlFor="certifiedJurisdiction" className={styles.inputTitle}>
                Certified/Registered/Licensed in any other Jurisdiction
                <input
                  className={styles.inputText}
                  type="text"
                  id="certifiedJurisdiction"
                  name="certifiedJurisdiction"
                  value={formData.certifiedJurisdiction}
                  onChange={handleInputChange}
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
                  value={formData.licenseNumber}
                  onChange={handleInputChange}
                  placeholder="Enter Certified/Registered/License Number"
                />
              </label>
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="jurisdictionName" className={styles.inputTitle}>
                Name of State/Jurisdiction
                <input
                  className={styles.inputText}
                  type="text"
                  name="jurisdictionName"
                  id="jurisdictionName"
                  value={formData.jurisdictionName}
                  onChange={handleInputChange}
                  placeholder="Enter Name of State/Jurisdiction"
                />
              </label>
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="dateCertified" className={styles.inputTitle}>
                Date Certified/Registered/License Expires
                <input
                  className={styles.inputText}
                  type="text"
                  name="dateCertified"
                  id="dateCertified"
                  value={formData.dateCertified}
                  onChange={handleInputChange}
                  pattern="^(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1])/(19|20)\d{2}$"
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
                  value={formData.certificationExam}
                  onChange={handleInputChange}
                  placeholder="Enter Certification Exam"
                />
              </label>
            </div>
            <div className={styles.inputBox}>
              <label
                htmlFor="dropconvictedOfFelonyDown"
                className={`${styles.inputTitle} ${styles.felonyLabel}`}
              >
                Have you ever been convicted of a Felony?<span className={styles.boldRed}>*</span>
                <Dropdown
                  options={["Yes", "No"]}
                  onSelect={handleSelect}
                  defaultValue={formData.convictedOfFelony || undefined}
                ></Dropdown>
                <input
                  className={styles.customDropDown}
                  type="text"
                  id="convictedOfFelony"
                  name="convictedOfFelony"
                  value={formData.convictedOfFelony}
                  onChange={handleInputChange}
                  required
                ></input>
              </label>
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="dateOfExam" className={styles.inputTitle}>
                Date of Certification Exam
                <input
                  className={styles.inputText}
                  type="text"
                  name="dateOfExam"
                  placeholder="mm/dd/yyyy"
                  id="dateOfExam"
                  pattern="^(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1])/(19|20)\d{2}$"
                  value={formData.dateOfExam}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="extraExplanation" className={styles.inputTitle}>
                If yes, please explain
                <input
                  className={styles.inputText}
                  type="text"
                  name="extraExplanation"
                  id="extraExplanation"
                  placeholder="Please explain here"
                  value={formData.extraExplanation}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>

          <div className={styles.formRow}>
            <label htmlFor="licenseExpiration" className={styles.label}>
              Date Certified/Registered/License Expires
              <input
                className={styles.input}
                type="text"
                name="licenseExpiration"
                id="licenseExpiration"
                pattern="\d{2}-\d{2}-\d{4}"
                value={licenseExpiration}
                onChange={(e) => {
                  setLicenseExpiration(e.target.value);
                }}
                placeholder="mm/dd/yyyy"
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

          <div className={styles.checkBox}>
            <input className={styles.select} type="checkbox" id="select" required />

            <label htmlFor="select" className={styles.checkboxLabel}>
              Click here to acknowledge you have read and understood the rules and regulations
            </label>
          </div>

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
        </div>
      </form>
    </>
  );
};
