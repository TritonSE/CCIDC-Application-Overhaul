import styles from "./Step1.module.css";
import { FormSection } from "./index.ts";

export function Step1() {
  return (
    <div className={styles.formContainer}>
      <p className={styles.applyFacts}>
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
      </p>
      <hr />

      <div className={styles.formSection}>
        <FormSection
          sectionName="Personal Information"
          formInputs={[
            {
              inputTitle: "First Name",
              defaultMessage: "Enter First Name Here",
              inputType: "text",
            },
            {
              inputTitle: "Middle Name",
              defaultMessage: "Enter Middle Name Here",
              inputType: "text",
            },
            {
              inputTitle: "Last Name",
              defaultMessage: "Enter Last Name Here",
              inputType: "text",
            },
            {
              inputTitle: "Maiden/Other Name Used",
              defaultMessage: "Enter 2nd Last Name Here",
              inputType: "text",
            },
            {
              inputTitle: "Gender",
              defaultMessage: "Select One",
              inputType: "dropdown",
              dropdownOptions: ["Female", "Male", "Other", "Prefer not to say"],
            },
          ]}
        />
      </div>
      <hr />
      <div className={styles.formSection}>
        <FormSection
          sectionName="Contact Information"
          formInputs={[
            {
              inputTitle: "Email Address *",
              defaultMessage: "Enter Email Address",
              inputType: "text",
              required: true,
            },
            {
              inputTitle: "Confirm Email Address *",
              defaultMessage: "Enter Email Address",
              inputType: "text",
              required: true,
            },
            {
              inputTitle: "Phone Device Type *",
              defaultMessage: "Select One",
              inputType: "dropdown",
              dropdownOptions: ["Cell", "Home", "Office"],
              required: true,
            },
            {
              inputTitle: "Phone Number *",
              defaultMessage: "Enter Phone Number",
              inputType: "text",
              required: true,
            },
          ]}
        />
      </div>
      <hr />
      <div className={styles.formSection}>
        <FormSection
          sectionName="Mailing Address"
          formInputs={[
            {
              inputTitle: "Address *",
              defaultMessage: "Enter Address",
              inputType: "text",
              required: true,
            },
            {
              inputTitle: "City *",
              defaultMessage: "Enter City",
              inputType: "text",
              required: true,
            },
            {
              inputTitle: "State *",
              defaultMessage: "Enter State",
              inputType: "text",
              required: true,
            },
            {
              inputTitle: "Zip Code *",
              defaultMessage: "Enter Zip Code",
              inputType: "text",
              required: true,
            },
            {
              inputTitle: "County *",
              defaultMessage: "Enter County",
              inputType: "text",
              required: true,
            },
            {
              inputTitle: "Country *",
              defaultMessage: "Enter Country",
              inputType: "text",
              required: true,
            },
          ]}
        />
      </div>
    </div>
  );
}
