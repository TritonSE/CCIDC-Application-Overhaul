import styles from "./Step3.module.css";
import { WorkExperienceForm } from "./index.ts";
import { Button } from "./Button.tsx";

export function Step3() {
  return (
    <div className={styles.formContainer}>

      <hr />

      <div className={styles.formSection}>
        <WorkExperienceForm
          sectionName="Current Company Info"
          formInputs={[
            {
              inputTitle: "Company Name",
              defaultMessage: "Add Company Name",
              inputType: "text",
            },
            {
              inputTitle: "Website",
              defaultMessage: "Add your Company's Website",
              inputType: "text",
            },
            {
              inputTitle: "Profession",
              defaultMessage: "Add Profession Here",
              inputType: "text",
            },
            {
              inputTitle: "Specialization",
              defaultMessage: "Add Specialization Here",
              inputType: "text",
            },
          ]}
        />
      </div>
      <hr />
      <div className={styles.formSection}>
        <WorkExperienceForm
          sectionName="Work Experience"
          formInputs={[
            {
              inputTitle: "Recent diversified design experience",
              defaultMessage: "Design Experience",
              inputType: "text",
              required: false,
            },
            {
              inputTitle: "How many hours per week did you work (on average)?",
              defaultMessage: "Number of Hours",
              inputType: "text",
              required: false,
            },
            {
              inputTitle: "Name of Superviser to Contact",
              defaultMessage: "Superviser Name",
              inputType: "text",
              required: false,
            },
            {
              inputTitle: "Supervisor’s Phone Number",
              defaultMessage: "Enter Phone Number",
              inputType: "text",
              required: false,
            },
            {
              inputTitle: "Supervisor’s Email Address",
              defaultMessage: "Enter Supervisor’s Email Address",
              inputType: "text",
              required: false,
            },
            {
              inputTitle: "Company Name",
              defaultMessage: "Add Company Name",
              inputType: "text",
              required: false,
            },
            {
              inputTitle: "Address",
              defaultMessage: "Enter Address",
              inputType: "text",
              required: false,
            },
            {
              inputTitle: "City",
              defaultMessage: "Enter City",
              inputType: "text",
              required: false,
            },
            {
              inputTitle: "State",
              defaultMessage: "Enter State",
              inputType: "text",
              required: false,
            },
            {
              inputTitle: "Zip",
              defaultMessage: "Enter Zip",
              inputType: "text",
              required: false,
            },
            {
              inputTitle: "Country",
              defaultMessage: "Enter Country",
              inputType: "text",
              required: false,
            },
            {
              inputTitle: "Hire Date",
              defaultMessage: "mm/dd/yyyy",
              inputType: "text",
              required: false,
            },
            {
              inputTitle: "Last Date Worked",
              defaultMessage: "mm/dd/yyyy",
              inputType: "text",
              required: false,
            },
          ]}
          add={true}
        />
      </div>
      <hr />
      <div className={styles.formSection}>
        <WorkExperienceForm
          sectionName="Total Work Experience"
          formInputs={[
            {
              inputTitle: "Total Hours Work Experience",
              defaultMessage: "Number of Hours",
              inputType: "text",
              required: true,
            },
            {
              inputTitle: "Total Years Work Experience",
              defaultMessage: "Number of Years",
              inputType: "text",
              required: true,
            },

          ]}
        />
      </div>
      <hr />
      <div className={styles.formSection}>
        <WorkExperienceForm
          sectionName="Upload Proof of Diversified Interior Design Experience (5+ years of experience)"
          formInputs={[
          ]}
          
        />
        <p className={styles.note}>
        i. IF YOU ARE SELF-EMPLOYED – Complete the _______ and include Tax Returns that claims yourself as an Interior Designer in the occupation section going back the amount of years you are claiming experience for or letter from a CPA or Attorney.
        </p>
        <p className={styles.note}>
        ii. IF YOU ARE NOT SELF-EMPLOYED – Fill out the ________ must be signed by Candidate and Employer.
        </p>

        <Button onClick={undefined} additionalStyle={styles.uploadTwo}>
            Upload Employment Verification Form
        </Button>

      </div>

    </div>
  );
}