import { Link } from "react-router-dom";

import { Button } from "./Button.tsx";
import styles from "./Step3.module.css";
import { WorkExperienceForm } from "./index.ts";

// Pass in Application's next function
export type StepProps = {
  next: () => void;
};

export const Step3: React.FC<StepProps> = ({ next }: StepProps) => {
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
      <form id="step3-form" onSubmit={onSubmit}>
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
                  // required: true,
                },
                {
                  inputTitle: "How many hours per week did you work (on average)?",
                  defaultMessage: "Number of Hours",
                  inputType: "text",
                  // required: true,
                },
                {
                  inputTitle: "Name of Superviser to Contact",
                  defaultMessage: "Superviser Name",
                  inputType: "text",
                  // required: true,
                },
                {
                  inputTitle: "Supervisor’s Phone Number",
                  defaultMessage: "Enter Phone Number",
                  inputType: "text",
                  // required: true,
                },
                {
                  inputTitle: "Supervisor’s Email Address",
                  defaultMessage: "Enter Supervisor’s Email Address",
                  inputType: "text",
                  // required: true,
                },
                {
                  inputTitle: "Company Name",
                  defaultMessage: "Add Company Name",
                  inputType: "text",
                  // required: true,
                },
                {
                  inputTitle: "Address",
                  defaultMessage: "Enter Address",
                  inputType: "text",
                  // required: true,
                },
                {
                  inputTitle: "City",
                  defaultMessage: "Enter City",
                  inputType: "text",
                  // required: true,
                },
                {
                  inputTitle: "State",
                  defaultMessage: "Enter State",
                  inputType: "text",
                  // required: true,
                },
                {
                  inputTitle: "Zip",
                  defaultMessage: "Enter Zip",
                  inputType: "text",
                  // required: true,
                },
                {
                  inputTitle: "Country",
                  defaultMessage: "Enter Country",
                  inputType: "text",
                  // required: true,
                },
                {
                  inputTitle: "Hire Date",
                  defaultMessage: "mm/dd/yyyy",
                  inputType: "text",
                  // required: true,
                },
                {
                  inputTitle: "Last Date Worked",
                  defaultMessage: "mm/dd/yyyy",
                  inputType: "text",
                  // required: true,
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
                  // required: true,
                },
                {
                  inputTitle: "Total Years Work Experience",
                  defaultMessage: "Number of Years",
                  inputType: "text",
                  // required: true,
                },
              ]}
            />
          </div>
          <hr />
          <div className={styles.formSection}>
            <WorkExperienceForm
              sectionName="Upload Proof of Diversified Interior Design Experience (5+ years of experience)"
              formInputs={[]}
            />

            <p>
              i. IF YOU ARE SELF-EMPLOYED – Complete the{" "}
              <Link
                to="https://ccidc.org/wp-content/uploads/2023/05/Work-Verification-Form.pdf"
                className={styles.blueLink}
              >
                Employment Verification Form
              </Link>{" "}
              and include Tax Returns that claims yourself as an Interior Designer in the occupation
              section going back the amount of years you are claiming experience for or letter from
              a CPA or Attorney.
            </p>

            <p>
              ii. IF YOU ARE NOT SELF-EMPLOYED – Fill out the{" "}
              <Link
                to="https://ccidc.org/wp-content/uploads/2023/05/Work-Verification-Form.pdf"
                className={styles.blueLink}
              >
                Employment Verification Form
              </Link>{" "}
              must be signed by Candidate and Employer.
            </p>

            <Button onClick={undefined} additionalStyle={styles.upload}>
              Upload Employment Verification Form
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
