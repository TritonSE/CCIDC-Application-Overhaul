import styles from "./Page4AllPaths.module.css";

export function Page4AllPaths() {
  return (
    <>
      <div className={styles.page4Form}>
        <form>
          <h2 className={styles.sectionTitle}>Additional Information</h2>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Certified/Registered/Licensed in any other Jurisdiction
              <input className={styles.input} type="text" name="license" />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Certification Exam
              <input className={styles.input} type="text" name="certificationExam" />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Certified/Registered/License Number
              <input className={styles.input} type="text" name="licenseNumber" />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Have you ever been convicted of a Felony?
              <input className={styles.input} type="text" name="crimeHistory" />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Name of State/Jurisdiction
              <input className={styles.input} type="text" name="state" />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Date of Certification Exam
              <input className={styles.input} type="text" name="dateOfCertificationExam" />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              Date Certified/Registered/License Expires
              <input className={styles.input} type="text" name="license" />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>
              If yes, please explain
              <input className={styles.input} type="text" name="explanation" />
            </label>
          </div>

          <hr className={styles.line} />

          <h2 className={styles.sectionTitle}>Rules & Regulations</h2>
          <p>
            Please read the{" "}
            <a
              className={styles.lightBlue}
              href="https://ccidc.org/wp-content/uploads/2017/07/CCIDC-Rules-and-Regulations.pdf"
            >
              CCIDC RULES & REGULATIONS
            </a>
          </p>
          <p>Click here to acknowledge you have read and understood the rules and regulation</p>

          <hr className={styles.line} />

          <h2 className={styles.sectionTitle}>Code of Ethics</h2>
          <p>
            Please read and sign the{" "}
            <a
              className={styles.lightBlue}
              href="https://ccidc.org/wp-content/uploads/2023/05/CCIDC-CODE-OF-ETHICS-2023.pdf"
            >
              CCIDC CODE OF ETHICS
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
