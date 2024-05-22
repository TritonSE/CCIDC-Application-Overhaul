import { useState } from "react";

import devices from "../constants/devices.json";
import genders from "../constants/genders.json";

import styles from "./Steps.module.css";
import { Dropdown } from "./index.ts";

type Step1Props = {
  onSubmit: () => void;
};

export function Step1({ onSubmit }: Step1Props) {
  const [email, setEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [gender, setGender] = useState("");
  const [phoneType, setPhoneType] = useState("");

  const handleGenderSelect = (option: string) => {
    setGender(option);
  };

  const handlePhoneSelect = (option: string) => {
    setPhoneType(option);
  };

  const handleConfirmEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmEmail(e.target.value);
    e.target.setCustomValidity(""); // Reset custom validity on input change
  };

  const handleInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("Email addresses do not match");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form id="step1-form" onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.applyFacts}>
        <strong>Important Facts For Applicants BEFORE YOU APPLY:</strong>
        <ul>
          <li className={styles.bulletPoint}>
            <p className={styles.listText}>
              <strong className={styles.boldRed}>
                Do NOT submit an application until ready to begin sitting for the IDEX California®
                Examination.
              </strong>
            </p>
          </li>
          <li className={styles.bulletPoint}>
            <p className={styles.listText}>
              Applications received after an application deadline will be held until the next
              application review window opens.
            </p>
          </li>
          <li className={styles.bulletPoint}>
            <p className={styles.listText}>
              Fees are <strong>non-refundable</strong>.
            </p>
          </li>
          <li className={styles.bulletPoint}>
            <p className={styles.listText}>
              Applicants have <strong>1 year from submission</strong> to sit for the IDEX California
              Exam or applications will be nullified and the full process will have to be repeated
              successfully to gain certification.
            </p>
          </li>
          <li className={styles.bulletPoint}>
            <p className={styles.listText}>
              Only <strong>eligible applicants</strong> with the required education (Minimum 40 Core
              Units) or work experience (Minimum 5 Years) will be allowed to sit for the IDEX
              California® Examination. Specific details on eligible combinations can be found in
              the Application Categories - Requirements for Certification.
            </p>
          </li>
          <li className={styles.bulletPoint}>
            <p className={styles.listText}>
              <strong>Submit complete applications</strong>. Incomplete applications are
              automatically placed on hold, and will be removed if not complete. When a previously
              incomplete application has been completed, CCIDC then will release the hold and review
              the application.
            </p>
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.formSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionName}>
            Personal Information<span className={styles.boldRed}>*</span>
          </h2>
        </div>
        <div className={styles.formSectionContainer}>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              First Name<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter First Name Here"
                name="firstName"
                required
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Middle Name
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter Middle Name Here"
                name="middleName"
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Last Name<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter Last Name Here"
                name="lastName"
                required
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Maiden/Other Name Used
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter 2nd Last Name Here"
                name="maidenName"
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="gender" className={`${styles.inputTitle} ${styles.dropdownLabel}`}>
              Gender<span className={styles.boldRed}>*</span>
              <Dropdown options={genders} onSelect={handleGenderSelect}></Dropdown>
              <input
                className={styles.customDropDown}
                type="text"
                id="gender"
                name="gender"
                defaultValue={gender}
                required
              ></input>
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.formSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionName}>
            Contact Information<span className={styles.boldRed}>*</span>
          </h2>
        </div>
        <div className={styles.formSectionContainer}>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Email Address<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Email Address"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="phoneType" className={`${styles.inputTitle} ${styles.dropdownLabel}`}>
              Phone Type<span className={styles.boldRed}>*</span>
              <Dropdown options={devices} onSelect={handlePhoneSelect}></Dropdown>
              <input
                className={styles.customDropDown}
                type="text"
                id="phoneType"
                name="phoneType"
                defaultValue={phoneType}
                required
              ></input>
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Confirm Email Address<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="email"
                name="confirmEmail"
                placeholder="Enter Email Address"
                value={confirmEmail}
                onInvalid={handleInvalid}
                onChange={handleConfirmEmailChange}
                pattern={email}
                required
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Phone Number<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="tel"
                placeholder="Enter Phone Number"
                pattern="^\d+$"
                autoComplete="tel"
                required
                name="phone"
              />
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.formSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionName}>
            Mailing Address<span className={styles.boldRed}>*</span>
          </h2>
        </div>
        <div className={styles.formSectionContainer}>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Address<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter Address"
                required
                name="address"
                autoComplete="street-address"
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              City<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter City"
                name="city"
                required
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              State<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter State"
                name="state"
                required
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Country<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter Country"
                name="country"
                required
                autoComplete="country"
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              County
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter County"
                name="county"
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Zip
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter Zip Code"
                name="zip"
              />
            </label>
          </div>
        </div>
      </div>
      <hr />
    </form>
  );
}
