import styles from "./InfoForm.module.css";
import { FormSection } from "./index.ts";

export function InfoForm() {
  return (
    <div className={styles.formContainer}>
      <p className={styles.applyFacts}>
        <strong>Important Facts For Applicants BEFORE YOU APPLY:</strong>
        <ul>
          <li className={styles.red}>
            <strong>
              Do NOT submit an application until ready to begin sitting for the IDEX California®
              Examination.
            </strong>
          </li>
          <li>
            Applications received after an application deadline will be held until the next
            application review window opens.
          </li>
          <li>
            Fees are <strong>non-refundable</strong>.
          </li>
          <li>
            Applicants have <strong>1 year from submission</strong> to sit for the IDEX California
            Exam or applications will be nullified and the full process will have to be repeated
            successfully to gain certification.
          </li>
          <li>
            Only <strong>eligible applicants</strong> with the required education (Minimum 40 Core
            Units) or work experience (Minimum 5 Years) will be allowed to sit for the IDEX
            California® Examination. Specific details on eligible combinations can be found in the
            Application Categories - Requirements for Certification.
          </li>
          <li>
            <strong>Submit complete applications</strong>. Incomplete applications are automatically
            placed on hold, and will be removed if not complete. When a previously incomplete
            application has been completed, CCIDC then will release the hold and review the
            application.
          </li>
        </ul>
      </p>
      <hr />

      <div>
        <FormSection
          sectionName="Personal Information"
          formTitles={[
            "First Name",
            "Middle Name",
            "Last Name",
            "Maiden/Other Name Used",
            "Gender",
          ]}
        />
        {/* Additional form sections or components */}
      </div>
    </div>
  );
}
