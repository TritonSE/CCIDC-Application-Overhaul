import { useContext } from "react";
import { Link } from "react-router-dom";

import deleteIcon from "../assets/deleteIcon.svg";
import plus from "../assets/plusIcon.svg";
import deleteIconHovered from "../assets/red-delete.svg";
import upload from "../assets/uploadIcon.svg";
import { FormContext, WorkExperience } from "../contexts/FormContext.tsx";

import checkboxStyles from "./Step4.module.css";
import styles from "./Steps.module.css";

export type StepProps = {
  next: () => void;
};

function WorkExperienceSection() {
  const { formData, setFormData } = useContext(FormContext);
  const isRequired = ["2", "3", "4"].includes(formData.applicantPath);

  if (isRequired && formData.WorkExperience.length === 0) {
    const newWorkExperience: WorkExperience = {
      designExperience: "",
      numHours: 0,
      superviserName: "",
      superviserPhoneNum: "",
      superviserEmail: "",
      companyName: "",
      companyAddress: "",
      companyCity: "",
      companyState: "",
      companyZip: "",
      companyCountry: "",
      hireDate: "",
      lastDateWorked: "",
      currentWork: false,
    };

    setFormData({
      ...formData,
      WorkExperience: [newWorkExperience],
    });
  }

  const handleInputChange = (
    index: number,
    field: keyof WorkExperience,
    value: string | number | boolean,
  ) => {
    setFormData((prevFormData) => {
      const updatedWorkExperiences = [...prevFormData.WorkExperience];
      updatedWorkExperiences[index] = {
        ...updatedWorkExperiences[index],
        [field]: value,
      };
      return {
        ...prevFormData,
        WorkExperience: updatedWorkExperiences,
      };
    });
  };

  const addWorkExperience = () => {
    const newWorkExperience: WorkExperience = {
      designExperience: "",
      numHours: 0,
      superviserName: "",
      superviserPhoneNum: "",
      superviserEmail: "",
      companyName: "",
      companyAddress: "",
      companyCity: "",
      companyState: "",
      companyZip: "",
      companyCountry: "",
      hireDate: "",
      lastDateWorked: "",
      currentWork: false,
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      WorkExperience: [...prevFormData.WorkExperience, newWorkExperience],
    }));
  };

  const deleteWorkExperience = (indexToDelete: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      WorkExperience: prevFormData.WorkExperience.filter((_, index) => index !== indexToDelete),
    }));
  };

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
      {formData.WorkExperience.slice()
        .reverse()
        .map((_, reversedIndex) => {
          const index = formData.WorkExperience.length - 1 - reversedIndex;
          return (
            <div className={styles.subSection} key={index}>
              <div className={styles.titleContainer}>
                <h3 className={styles.subTitle}>{"Experience " + (index + 1)}</h3>
                {!(isRequired && index === 0) && (
                  <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={() => {
                      deleteWorkExperience(index);
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
                    Recent diversified design experience<span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="text"
                      name={`designExperience${index}`}
                      placeholder="Enter Diversified Design Experience "
                      required
                      value={formData.WorkExperience[index]?.designExperience || ""}
                      onChange={(e) => {
                        handleInputChange(index, "designExperience", e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}>
                    Company Name
                    <span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="text"
                      name={`companyName${index}`}
                      placeholder="Enter Company Name"
                      required
                      value={formData.WorkExperience[index]?.companyName || ""}
                      onChange={(e) => {
                        handleInputChange(index, "companyName", e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}>
                    Name of Supervisor to Contact
                    <span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="text"
                      name={`superviserName${index}`}
                      placeholder="Enter Supervisor Name"
                      required
                      value={formData.WorkExperience[index]?.superviserName || ""}
                      onChange={(e) => {
                        handleInputChange(index, "superviserName", e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}>
                    How many hours per week did you work (on average)?
                    <span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="number"
                      name={`numHours${index}`}
                      placeholder="Enter Hours per week"
                      required
                      value={formData.WorkExperience[index]?.numHours || ""}
                      onChange={(e) => {
                        handleInputChange(index, "numHours", e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}>
                    Supervisor&apos;s Email Address
                    <span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="email"
                      name={`superviserEmail${index}`}
                      placeholder="Enter Supervisor's Email Address"
                      required
                      value={formData.WorkExperience[index]?.superviserEmail || ""}
                      onChange={(e) => {
                        handleInputChange(index, "superviserEmail", e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}>
                    Supervisor&apos;s Phone Number
                    <span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="tel"
                      pattern="^\d+$"
                      name={`superviserPhoneNum${index}`}
                      placeholder="Enter Phone Number"
                      required
                      value={formData.WorkExperience[index]?.superviserPhoneNum || ""}
                      onChange={(e) => {
                        handleInputChange(index, "superviserPhoneNum", e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}>
                    Address <span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="text"
                      placeholder="Enter Address"
                      required
                      name={`companyAddress${index}`}
                      autoComplete="street-address"
                      value={formData.WorkExperience[index]?.companyAddress || ""}
                      onChange={(e) => {
                        handleInputChange(index, "companyAddress", e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}>
                    City <span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="text"
                      placeholder="Enter City"
                      name={`companyCity${index}`}
                      required
                      value={formData.WorkExperience[index]?.companyCity || ""}
                      onChange={(e) => {
                        handleInputChange(index, "companyCity", e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}>
                    State <span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="text"
                      placeholder="Enter State"
                      name={`companyState${index}`}
                      required
                      value={formData.WorkExperience[index]?.companyState || ""}
                      onChange={(e) => {
                        handleInputChange(index, "companyState", e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}>
                    Zip <span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="text"
                      placeholder="Enter Zip"
                      name={`companyZip${index}`}
                      required
                      value={formData.WorkExperience[index]?.companyZip || ""}
                      onChange={(e) => {
                        handleInputChange(index, "companyZip", e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}>
                    Country <span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="text"
                      placeholder="Enter Country"
                      name={`companyCountry${index}`}
                      required
                      autoComplete="country"
                      value={formData.WorkExperience[index]?.companyCountry || ""}
                      onChange={(e) => {
                        handleInputChange(index, "companyCountry", e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}>
                    Hire Date
                    <span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="text"
                      name={`hireDate${index}`}
                      placeholder="mm/dd/yyyy"
                      pattern="^(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1])/(19|20)\d{2}$"
                      required
                      value={formData.WorkExperience[index]?.hireDate || ""}
                      onChange={(e) => {
                        handleInputChange(index, "hireDate", e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}>
                    Last Date Worked
                    <span className={styles.boldRed}>*</span>
                    <input
                      className={styles.inputText}
                      type="text"
                      name={`lastDateWorked${index}`}
                      placeholder="mm/dd/yyyy"
                      pattern="^(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1])/(19|20)\d{2}$"
                      required
                      value={formData.WorkExperience[index]?.lastDateWorked || ""}
                      onChange={(e) => {
                        handleInputChange(index, "lastDateWorked", e.target.value);
                      }}
                      disabled={formData.WorkExperience[index]?.currentWork}
                    />
                  </label>
                  <div className={styles.inputBox}>
                    <label
                      htmlFor="select"
                      className={`${checkboxStyles.checkboxLabel} ${checkboxStyles.noMargin}`}
                    >
                      <input
                        name="readRules"
                        type="checkbox"
                        id="select"
                        onChange={(e) => {
                          handleInputChange(index, "lastDateWorked", "");
                          handleInputChange(index, "currentWork", e.target.checked);
                        }}
                        checked={formData.WorkExperience[index]?.currentWork}
                      />
                      <span className={checkboxStyles.grayText}>I currently work here</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export const Step3: React.FC<StepProps> = ({ next }: StepProps) => {
  const { formData, setFormData } = useContext(FormContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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
                  placeholder="Enter Company Name"
                  name="currCompanyName"
                  value={formData.currCompanyName}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className={styles.inputBox}>
              <label className={styles.inputTitle}>
                Website
                <input
                  className={styles.inputText}
                  type="text"
                  placeholder="Enter your Company's Website"
                  name="currCompanyWebsite"
                  onChange={handleInputChange}
                  value={formData.currCompanyWebsite}
                />
              </label>
            </div>
            <div className={styles.inputBox}>
              <label className={styles.inputTitle}>
                Profession
                <input
                  className={styles.inputText}
                  type="text"
                  placeholder="Enter Profession"
                  name="currCompanyProfession"
                  onChange={handleInputChange}
                  value={formData.currCompanyProfession}
                />
              </label>
            </div>
            <div className={styles.inputBox}>
              <label className={styles.inputTitle}>
                Specialization
                <input
                  className={styles.inputText}
                  type="text"
                  placeholder="Enter Specialization Here"
                  name="currCompanySpecialization"
                  onChange={handleInputChange}
                  value={formData.currCompanySpecialization}
                />
              </label>
            </div>
          </div>
        </div>
        <hr />
        <WorkExperienceSection />
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
                  onChange={handleInputChange}
                  value={formData.totalHours !== 0 ? formData.totalHours : ""}
                />
              </label>
            </div>
            <div className={styles.inputBox}>
              <label className={styles.inputTitle}>
                Total Years Work Experience<span className={styles.boldRed}>*</span>
                <input
                  className={styles.inputText}
                  type="number"
                  placeholder="Enter Number of Years"
                  name="totalYears"
                  onChange={handleInputChange}
                  value={formData.totalYears !== 0 ? formData.totalYears : ""}
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
            i. IF YOU ARE SELF-EMPLOYED - Complete the{" "}
            <Link
              to="https://ccidc.org/wp-content/uploads/2023/05/Work-Verification-Form.pdf"
              className={styles.link}
            >
              Employment Verification Form
            </Link>{" "}
            and include Tax Returns that claims yourself as an Interior Designer in the occupation
            section going back the amount of years you are claiming experience for or letter from a
            CPA or Attorney. <br />
            ii. IF YOU ARE NOT SELF-EMPLOYED - Fill out the{" "}
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
