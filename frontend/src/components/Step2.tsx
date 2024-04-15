import upload from "../assets/upload.svg";
import courseList from "../constants/courses.json";
import examList from "../constants/exams.json";

import styles from "./Step1.module.css";
import { FormSection } from "./index.ts";

function SchoolSection() {
  return (
    <div>
      <div className={styles.formSection}>
        <FormSection
          sectionName="Schools"
          formInputs={[
            {
              inputTitle: "Name of School Attended",
              defaultMessage: "School Name",
              inputType: "text",
            },
            {
              inputTitle: "School City",
              defaultMessage: "City",
              inputType: "text",
            },
            {
              inputTitle: "School State",
              defaultMessage: "State",
              inputType: "text",
            },
            {
              inputTitle: "School Country",
              defaultMessage: "Country",
              inputType: "text",
            },
            {
              inputTitle: "Core Units Completed",
              defaultMessage: "Enter Number here",
              inputType: "text",
            },
            {
              inputTitle: "Degree Received",
              defaultMessage: "Degree Name",
              inputType: "text",
            },
            {
              inputTitle: "Month/Year Started Attending",
              defaultMessage: "mm/yyyy",
              inputType: "text",
            },
            {
              inputTitle: " Month/Year Stopped Attending/Completed",
              defaultMessage: "mm/yyyy",
              inputType: "text",
            },
          ]}
          add={true}
        />
      </div>

      <div className={styles.warningText}>
        *All transcripts must be <b>official</b>, they may be mailed or emailed directly from your
        school or educational institution
      </div>

      <hr />
    </div>
  );
}

function ProfessionalAssociationSection() {
  return (
    <div>
      <div className={styles.formSection}>
        <FormSection
          sectionName="Professional Association Memberships"
          formInputs={[
            {
              inputTitle: "Professional Association Membership",
              defaultMessage: "Enter your Membership",
              inputType: "text",
            },
            {
              inputTitle: "Other Professional Associations",
              defaultMessage: "Enter Professional Associations",
              inputType: "text",
            },
            {
              inputTitle: "Membership Level",
              defaultMessage: "Enter Membership Level",
              inputType: "text",
            },
          ]}
          add={true}
        />
      </div>
      <hr />
    </div>
  );
}

function NationalExamSection() {
  return (
    <div>
      <div className={styles.formSection}>
        <FormSection
          sectionName="National Exam"
          formInputs={[
            {
              inputTitle: "National Exam",
              defaultMessage: "Select the Appropriate Exam",
              inputType: "dropdown",
              dropdownOptions: examList,
            },
            {
              inputTitle: "Date of National Exam",
              defaultMessage: "Enter Date",
              inputType: "text",
            },
            {
              inputTitle: "Certificate Number",
              defaultMessage: "Enter Certificate Number",
              inputType: "text",
            },
          ]}
          add={true}
        />
        <button className={styles.upload}>
          Upload Proof of National Exam
          <img src={upload} className={styles.uploadButton} alt="buttonpng" />
        </button>
      </div>
    </div>
  );
}

function ICCCourses() {
  return (
    <div>
      <div className={styles.formSection}>
        <FormSection
          sectionName="ICC Courses"
          formInputs={[
            {
              inputTitle: "Courses",
              defaultMessage: " Select the Course",
              inputType: "dropdown",
              dropdownOptions: courseList,
            },
            {
              inputTitle: "Date of Completion",
              defaultMessage: "Enter Date",
              inputType: "text",
            },
            {
              inputTitle: "Certificate Number",
              defaultMessage: "Enter Certificate Number",
              inputType: "text",
            },
          ]}
          add={true}
        />
        <button className={styles.upload}>
          Upload Proof of National Exam
          <img src={upload} className={styles.uploadButton} alt="buttonpng" />
        </button>
      </div>
    </div>
  );
}
type Step2Props = {
  pathNumber: number;
};

export function Step2({ pathNumber }: Step2Props) {
  let content;

  if (pathNumber === 1 || pathNumber === 2) {
    content = <ProfessionalAssociationSection></ProfessionalAssociationSection>;
  } else if (pathNumber === 3) {
    content = (
      <>
        <NationalExamSection></NationalExamSection>
        <hr className={styles.line} />
        <ProfessionalAssociationSection></ProfessionalAssociationSection>
      </>
    );
  } else if (pathNumber === 4) {
    content = (
      <>
        <NationalExamSection></NationalExamSection>
        <hr className={styles.line} />
        <ICCCourses></ICCCourses>
        <hr className={styles.line} />
        <ProfessionalAssociationSection></ProfessionalAssociationSection>
      </>
    );
  }
  return (
    <>
      <SchoolSection></SchoolSection>
      {content}
    </>
  );
}
