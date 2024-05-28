import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import deleteIcon from "../assets/deleteIcon.svg";
import plus from "../assets/plusIcon.svg";
import deleteIconHovered from "../assets/red-delete.svg";
import upload from "../assets/uploadIcon.svg";
import { FormContext } from "../contexts/FormContext.tsx";

import styles from "./Steps.module.css";

export type StepProps = {
  pathNumber: number;
  next: () => void;
};

function WorkExperienceSection({ pathNumber }: { pathNumber: number }) {
  const [workExperiences, setWorkExperience] = useState([{ id: 1 }]);

  const addWorkExperience = () => {
    setWorkExperience((prevWorkExperiences) => [
      ...prevWorkExperiences,
      { id: prevWorkExperiences.length + 1 },
    ]);
  };

  const deleteWorkExperience = (idToDelete: number) => {
    setWorkExperience((prevWorkExperiences) =>
      prevWorkExperiences.filter((work) => work.id !== idToDelete),
    );
  };

  const isRequired = [2, 3, 4].includes(pathNumber);

  return (
    <div className={styles.formSection}>
      <div className={styles.titleContainer}>
        <h2 className={styles.sectionName}>
          Work Experience{isRequired && <span className={styles.boldRed}>*</span>}
        </h2>
        <button type="button" className={styles.add} onClick={addWorkExperience}>
          <span>Add</span>
          <img src={plus} alt="buttonpng" height="14px" />
        </button>
      </div>
      {workExperiences
        .slice()
        .reverse()
        .map((workExperience, index) => (
          <div className={styles.subSection} key={workExperience.id}>
            <div className={styles.titleContainer}>
              <h3 className={styles.subTitle}>{"Experience " + workExperience.id}</h3>
              {workExperience.id > 1 && (
                <button
                  type="button"
                  className={styles.deleteButton}
                  onClick={() => {
                    deleteWorkExperience(workExperience.id);
                  }}
                >
                  <img
                    src={deleteIconHovered}
                    className={styles.redDelete}
                    alt="delete-icon-hovered"
                  />
                  <img src={deleteIcon} className={styles.greyDelete} alt="delete-icon" />
                  <span className={styles.deleteText}>Delete</span>
                </button>
              )}
            </div>

            <div className={styles.formSectionContainer}>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Recent diversified design experience
                  {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    name={`designExperience${index}`}
                    placeholder="Enter Diversified Design Experience "
                    required={isRequired}
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Company Name
                  {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    name={`companyName${index}`}
                    placeholder="Enter Company Name"
                    required={isRequired}
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Name of Supervisor to Contact
                  {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    name={`superviserName${index}`}
                    placeholder="Enter Supervisor Name"
                    required={isRequired}
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  How many hours per week did you work (on average)?
                  {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="number"
                    name={`numHours${index}`}
                    placeholder="Enter Hours per week"
                    required={isRequired}
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Supervisor&apos;s Email Address
                  {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="number"
                    name={`superviserEmail${index}`}
                    placeholder="Enter Supervisor's Email Address"
                    required={isRequired}
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Supervisor&apos;s Phone Number
                  {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    name={`superviserPhoneNum${index}`}
                    placeholder="Enter Phone Number"
                    required={isRequired}
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Address {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    placeholder="Enter Address"
                    required={isRequired}
                    name={`companyAddress${index}`}
                    autoComplete="street-address"
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  City {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    placeholder="Enter City"
                    name={`companyCity${index}`}
                    required={isRequired}
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  State {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    placeholder="Enter State"
                    name={`companyState${index}`}
                    required={isRequired}
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Zip {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    placeholder="Enter Zip"
                    name={`companyZip${index}`}
                    required={isRequired}
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Country {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    placeholder="Enter Country"
                    name={`companyCountry${index}`}
                    required={isRequired}
                    autoComplete="country"
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Hire Date
                  {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    name={`hireDate${index}`}
                    placeholder="mm/dd/yyyy"
                    pattern="^(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1])/(19|20)\d{2}$"
                    required={isRequired}
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Last Date Worked
                  {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    name={`lastDateWorked${index}`}
                    placeholder="mm/dd/yyyy"
                    pattern="^(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1])/(19|20)\d{2}$"
                    required={isRequired}
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export const Step3: React.FC<StepProps> = ({ pathNumber, next }: StepProps) => {
  // const { formData, setFormData } = useContext(FormContext);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

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
      <form id="step3-form" className={styles.formContainer} onSubmit={onSubmit}>
        <div className={styles.formSection}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionName}>Current Company Info</h2>
          </div>
          <div className={styles.formSectionContainer}>
            <div className={styles.inputBox}>
              <label className={styles.inputTitle}>
                Company Name
                <input
                  className={styles.inputText}
                  type="text"
                  placeholder="Add Company Name"
                  name="currCompanyName"
                />
              </label>
            </div>
            <div className={styles.inputBox}>
              <label className={styles.inputTitle}>
                Website
                <input
                  className={styles.inputText}
                  type="text"
                  placeholder="Add your Company's Website"
                  name="currCompanyWebsite"
                />
              </label>
            </div>
            <div className={styles.inputBox}>
              <label className={styles.inputTitle}>
                Profession
                <input
                  className={styles.inputText}
                  type="text"
                  placeholder="Add Profession Here"
                  name="currCompanyProfession"
                />
              </label>
            </div>
            <div className={styles.inputBox}>
              <label className={styles.inputTitle}>
                Specialization
                <input
                  className={styles.inputText}
                  type="text"
                  placeholder="Add Specialization Here"
                  name="currCompanySpecialization"
                />
              </label>
            </div>
          </div>
        </div>
        <hr />
        <WorkExperienceSection pathNumber={pathNumber} />
        <hr />
        <div className={styles.formSection}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionName}>
              Total Work Experience<span className={styles.boldRed}>*</span>
            </h2>
          </div>
          <div className={styles.formSectionContainer}>
            <div className={styles.inputBox}>
              <label className={styles.inputTitle}>
                Total Hours Work Experience<span className={styles.boldRed}>*</span>
                <input
                  className={styles.inputText}
                  type="number"
                  placeholder="Enter Number of Hours"
                  name="totalHours"
                  required
                />
              </label>
            </div>
            <div className={styles.inputBox}>
              <label className={styles.inputTitle}>
                Total Years Work Experience<span className={styles.boldRed}>*</span>
                <input
                  className={styles.inputText}
                  type="text"
                  placeholder="Enter Number of Years"
                  name="totalYears"
                />
              </label>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.formSection}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionName}>
              Upload Proof of Diversified Interior Design Experience (5+ years of experience)
            </h2>
          </div>

          <p>
            i. IF YOU ARE SELF-EMPLOYED – Complete the{" "}
            <Link
              to="https://ccidc.org/wp-content/uploads/2023/05/Work-Verification-Form.pdf"
              className={styles.link}
            >
              Employment Verification Form
            </Link>{" "}
            and include Tax Returns that claims yourself as an Interior Designer in the occupation
            section going back the amount of years you are claiming experience for or letter from a
            CPA or Attorney. <br />
            ii. IF YOU ARE NOT SELF-EMPLOYED – Fill out the{" "}
            <Link
              to="https://ccidc.org/wp-content/uploads/2023/05/Work-Verification-Form.pdf"
              className={styles.link}
            >
              Employment Verification Form
            </Link>{" "}
            must be signed by Candidate and Employer.
          </p>

          <button type="button" className={styles.uploadVerification}>
            Upload Employment Verification Form
            <img src={upload} className={styles.uploadVerificationButton} alt="buttonpng" />
          </button>
        </div>
        <hr />
      </form>
    </>
  );
};
