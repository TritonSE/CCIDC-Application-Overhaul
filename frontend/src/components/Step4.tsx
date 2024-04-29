import styles from "./Step4.module.css";
import { Button, Dropdown } from "./index.ts";

export function Step4() {
  return (
    <>
      <form id="a">
        <div className={styles.page4Form}>
          <form>
            <h2 className={styles.sectionTitle}>Additional Information</h2>

            <div className={styles.formRow}>
              <label htmlFor="license" className={styles.label}>
                Certified/Registered/Licensed in any other Jurisdiction
                <input
                  className={styles.input}
                  type="text"
                  id="license"
                  name="license"
                  placeholder="Enter Certified/Registered/Licensed in any other Jurisdiction"
                />
              </label>

              <label htmlFor="licenseNumber" className={styles.label}>
                Certified/Registered/License Number
                <input
                  className={styles.input}
                  type="text"
                  name="licenseNumber"
                  id="licenseNumber"
                  placeholder="Enter Certified/Registered/License Number"
                />
              </label>
            </div>

            <div className={styles.formRow}>
              <label htmlFor="state" className={styles.label}>
                Name of State/Jurisdiction
                <input
                  className={styles.input}
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter Name of State/Jurisdiction"
                  pattern="Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming"
                />
              </label>

              <label htmlFor="licenseExpiration" className={styles.label}>
                Date Certified/Registered/License Expires
                <input
                  className={styles.input}
                  type="text"
                  name="licenseExpiration"
                  id="licenseExpiration"
                  placeholder="Enter Date Certified/Registered/License Expires"
                />
              </label>
            </div>

            <div className={styles.formRow}>
              <label htmlFor="certificationExam" className={styles.label}>
                Certification Exam
                <input
                  className={styles.input}
                  type="text"
                  name="certificationExam"
                  id="certificationExam"
                  placeholder="Enter Certification Exam"
                />
              </label>

              <label htmlFor="license" className={styles.label}>
                Have you ever been convicted of a Felony?
                <Dropdown options={["Yes", "No"]}></Dropdown>
              </label>
            </div>

            <div className={styles.formRow}>
              <label htmlFor="dateOfCertificationExam" className={styles.label}>
                Date of Certification Exam
                <input
                  className={styles.input}
                  type="text"
                  name="dateOfCertificationExam"
                  placeholder="mm/dd/yyyy"
                  id="dateOfCertificationExam"
                  pattern="\d{2}-\d{2}-\d{4}"
                />
              </label>

              <label htmlFor="explanation" className={styles.label}>
                If yes, please explain
                <input
                  className={styles.input}
                  type="text"
                  name="explanation"
                  id="explanation"
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
          </form>
        </div>
      </form>
    </>
  );
}
