import devices from "../constants/devices.json";
import genders from "../constants/genders.json";

import styles from "./Steps.module.css";

type Step1Props = {
  onSubmit: () => void;
};

export function Step1({ onSubmit }: Step1Props) {
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
              <strong className={styles.red}>
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
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Gender<span className={styles.boldRed}>*</span>
              <select className={styles.inputText} id="drop" defaultValue={"default"} required>
                <option value="default" className={styles.optionDefault} disabled>
                  Select One
                </option>
                {genders.map((dropOption, dropIndex) => (
                  <option
                    key={dropIndex}
                    value={dropOption}
                    className={dropOption ? styles.optionSelected : styles.optionDefault}
                  >
                    {dropOption}
                  </option>
                ))}
              </select>
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
                type="text"
                placeholder="Enter Email Address"
                required
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Phone Type<span className={styles.boldRed}>*</span>
              <select className={styles.inputText} defaultValue={"default"} id="drop" required>
                <option value="default" className={styles.optionDefault} disabled>
                  Select Phone Type
                </option>
                {devices.map((dropOption, dropIndex) => (
                  <option
                    key={dropIndex}
                    value={dropOption}
                    className={dropOption ? styles.optionSelected : styles.optionDefault}
                  >
                    {dropOption}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Confirm Email Address<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter Email Address"
                required
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Phone Number<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter Phone Number"
                required
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
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              City<span className={styles.boldRed}>*</span>
              <input className={styles.inputText} type="text" placeholder="Enter City" required />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              State<span className={styles.boldRed}>*</span>
              <input className={styles.inputText} type="text" placeholder="Enter State" required />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Zip<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter Zip Code"
                required
              />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              County<span className={styles.boldRed}>*</span>
              <input className={styles.inputText} type="text" placeholder="Enter County" required />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Country<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter Country"
                required
              />
            </label>
          </div>
        </div>
      </div>
      <hr />
    </form>
  );
}
