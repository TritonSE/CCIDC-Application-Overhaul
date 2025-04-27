import { useContext, useState } from "react";

import caretDown from "../assets/caretdown.svg";
import caretUp from "../assets/caretup.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import plus from "../assets/plusIcon.svg";
import deleteIconHovered from "../assets/red-delete.svg";
import courseList from "../constants/courses.json";
import examList from "../constants/exams.json";
import {
  FormContext,
  ICCCourses,
  NationalExams,
  ProfessionalMemberships,
  SchoolsAttended,
} from "../contexts/FormContext.tsx";

import styles from "./Steps.module.css";
import { Dropdown } from "./index.ts";
import FileUploadPopupWindow from "./FileUploadPopupWindow.tsx";

function SchoolSection() {
  const { formData, setFormData } = useContext(FormContext);
  const isRequired = ["2", "3", "4"].includes(formData.applicantPath);

  if (isRequired && formData.SchoolsAttended.length === 0) {
    const newSchool: SchoolsAttended = {
      schoolName: "",
      schoolCity: "",
      schoolState: "",
      schoolCountry: "",
      coreUnits: "",
      degreeReceived: "",
      dateStarted: "",
      dateStopped: "",
    };

    setFormData({
      ...formData,
      SchoolsAttended: [newSchool],
    });
  }

  const handleInputChange = (
    index: number,
    field: keyof SchoolsAttended,
    value: string | number | boolean,
  ) => {
    setFormData((prevFormData) => {
      const updatedSchools = [...prevFormData.SchoolsAttended];
      updatedSchools[index] = {
        ...updatedSchools[index],
        [field]: value,
      };
      return {
        ...prevFormData,
        SchoolsAttended: updatedSchools,
      };
    });
  };

  const [showAddress, setShowAddress] = useState(false);

  const addSchool = () => {
    const newSchool: SchoolsAttended = {
      schoolName: "",
      schoolCity: "",
      schoolState: "",
      schoolCountry: "",
      coreUnits: "",
      degreeReceived: "",
      dateStarted: "",
      dateStopped: "",
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      SchoolsAttended: [...prevFormData.SchoolsAttended, newSchool],
    }));
  };

  const deleteSchool = (indexToDelete: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      SchoolsAttended: prevFormData.SchoolsAttended.filter((_, index) => index !== indexToDelete),
    }));
  };

  const toggleAddress = () => {
    setShowAddress((prevState) => !prevState);
  };

  return (
    <div>
      <div className={styles.formSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionName}>
            Schools{isRequired && <span className={styles.boldRed}>*</span>}
          </h2>
          <button type="button" className={styles.add} onClick={addSchool}>
            <span>Add</span>
            <img src={plus} alt="buttonpng" height="14px" />
          </button>
        </div>
        {formData.SchoolsAttended.slice()
          .reverse()
          .map((_, reversedIndex) => {
            const index = formData.SchoolsAttended.length - 1 - reversedIndex;
            return (
              <div className={styles.subSection} key={index}>
                <div className={styles.titleContainer}>
                  <h3 className={styles.subTitle}>{"School " + (index + 1)}</h3>
                  {!(isRequired && index === 0) && (
                    <button
                      type="button"
                      className={styles.deleteButton}
                      onClick={() => {
                        deleteSchool(index);
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
                      Name of School Attended
                      {isRequired && <span className={styles.boldRed}>*</span>}
                      <input
                        className={styles.inputText}
                        type="text"
                        name={`name${index}`}
                        placeholder="Enter School Name"
                        required={isRequired}
                        value={formData.SchoolsAttended[index]?.schoolName || ""}
                        onChange={(e) => {
                          handleInputChange(index, "schoolName", e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.inputBox}>
                    <label className={styles.inputTitle}>
                      School City
                      {isRequired && <span className={styles.boldRed}>*</span>}
                      <input
                        className={styles.inputText}
                        type="text"
                        name={`city${index}`}
                        placeholder="Enter City"
                        required={isRequired}
                        value={formData.SchoolsAttended[index]?.schoolCity || ""}
                        onChange={(e) => {
                          handleInputChange(index, "schoolCity", e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.inputBox}>
                    <label className={styles.inputTitle}>
                      School State
                      {isRequired && <span className={styles.boldRed}>*</span>}
                      <input
                        className={styles.inputText}
                        type="text"
                        name={`state${index}`}
                        placeholder="Enter State"
                        required={isRequired}
                        value={formData.SchoolsAttended[index]?.schoolState || ""}
                        onChange={(e) => {
                          handleInputChange(index, "schoolState", e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.inputBox}>
                    <label className={styles.inputTitle}>
                      School Country
                      {isRequired && <span className={styles.boldRed}>*</span>}
                      <input
                        className={styles.inputText}
                        type="text"
                        name={`country${index}`}
                        placeholder="Enter Country"
                        required={isRequired}
                        value={formData.SchoolsAttended[index]?.schoolCountry || ""}
                        onChange={(e) => {
                          handleInputChange(index, "schoolCountry", e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.inputBox}>
                    <label className={styles.inputTitle}>
                      Core Units Completed
                      {isRequired && <span className={styles.boldRed}>*</span>}
                      <input
                        className={styles.inputText}
                        type="number"
                        name={`coreUnits${index}`}
                        placeholder="Enter Number Here"
                        required={isRequired}
                        value={formData.SchoolsAttended[index]?.coreUnits || ""}
                        onChange={(e) => {
                          handleInputChange(index, "coreUnits", e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.inputBox}>
                    <label className={styles.inputTitle}>
                      Degree Received
                      {isRequired && <span className={styles.boldRed}>*</span>}
                      <input
                        className={styles.inputText}
                        type="text"
                        name={`degree${index}`}
                        placeholder="Enter Degree Name"
                        required={isRequired}
                        value={formData.SchoolsAttended[index]?.degreeReceived || ""}
                        onChange={(e) => {
                          handleInputChange(index, "degreeReceived", e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.inputBox}>
                    <label className={styles.inputTitle}>
                      Month/Year Started Attending
                      {isRequired && <span className={styles.boldRed}>*</span>}
                      <input
                        className={styles.inputText}
                        type="text"
                        name={`startDate${index}`}
                        placeholder="mm/yyyy"
                        pattern="^(0[1-9]|1[0-2])/(19|20)\d{2}$"
                        required={isRequired}
                        value={formData.SchoolsAttended[index]?.dateStarted || ""}
                        onChange={(e) => {
                          handleInputChange(index, "dateStarted", e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.inputBox}>
                    <label className={styles.inputTitle}>
                      Month/Year Stopped Attending/Completed
                      {isRequired && <span className={styles.boldRed}>*</span>}
                      <input
                        className={styles.inputText}
                        type="text"
                        name={`endDate${index}`}
                        placeholder="mm/yyyy"
                        pattern="^(0[1-9]|1[0-2])/(19|20)\d{2}$"
                        required={isRequired}
                        value={formData.SchoolsAttended[index]?.dateStopped || ""}
                        onChange={(e) => {
                          handleInputChange(index, "dateStopped", e.target.value);
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        {formData.SchoolsAttended.length > 0 ? (
          <>
            <hr className={styles.break} />
            <div className={styles.warningMessage}>
              <p className={styles.warningText}>
                *All transcripts must be <b>&nbsp;official</b>, they may be mailed or emailed
                directly from your school or educational institution
              </p>
              <button type="button" onClick={toggleAddress}>
                <img src={showAddress ? caretUp : caretDown} alt="caret-icon" />
              </button>
            </div>
            {showAddress && (
              <p className={styles.addressText}>
                <b className={styles.boldRed}>Mailing Address:</b>
                <br />
                365 W. Second Ave, Suite 221 <br />
                Escondido, CA 92025 <br />
                <b className={styles.boldRed}>Email:</b>{" "}
                <a className={styles.link} href="mailto:ccidc@ccidc.org">
                  ccidc@ccidc.org
                </a>
              </p>
            )}
          </>
        ) : null}
      </div>
      <hr />
    </div>
  );
}

function ProfessionalAssociationSection() {
  const { formData, setFormData } = useContext(FormContext);

  const handleInputChange = (
    index: number,
    field: keyof ProfessionalMemberships,
    value: string | number | boolean,
  ) => {
    setFormData((prevFormData) => {
      const updatedProfessionalMemberships = [...prevFormData.ProfessionalMemberships];
      updatedProfessionalMemberships[index] = {
        ...updatedProfessionalMemberships[index],
        [field]: value,
      };
      return {
        ...prevFormData,
        ProfessionalMemberships: updatedProfessionalMemberships,
      };
    });
  };

  const addAssociation = () => {
    const newProfessionalMembership: ProfessionalMemberships = {
      membershipName: "",
      membershipLevel: "",
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      ProfessionalMemberships: [...prevFormData.ProfessionalMemberships, newProfessionalMembership],
    }));
  };

  const deleteAssociation = (indexToDelete: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ProfessionalMemberships: prevFormData.ProfessionalMemberships.filter(
        (_, index) => index !== indexToDelete,
      ),
    }));
  };

  return (
    <div>
      <div className={styles.formSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionName}>Professional Association Memberships</h2>
          <button type="button" className={styles.add} onClick={addAssociation}>
            <span>Add</span>
            <img src={plus} alt="buttonpng" height="14px" />
          </button>
        </div>
        {formData.ProfessionalMemberships.slice()
          .reverse()
          .map((_, reversedIndex) => {
            const index = formData.ProfessionalMemberships.length - 1 - reversedIndex;
            return (
              <div className={styles.subSection} key={index}>
                <div className={styles.titleContainer}>
                  <h3 className={styles.subTitle}>{"Membership " + (index + 1)}</h3>
                  <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={() => {
                      deleteAssociation(index);
                    }}
                  >
                    <img
                      src={deleteIconHovered}
                      className={styles.redDelete}
                      alt="delete-icon-hovered"
                    />
                    <img src={deleteIcon} className={styles.greyDelete} alt="delete-icon" />{" "}
                    <span className={styles.deleteText}>Delete</span>
                  </button>
                </div>

                <div className={styles.formSectionContainer}>
                  <div className={styles.inputBox}>
                    <label className={styles.inputTitle}>
                      Professional Association Membership
                      <input
                        className={styles.inputText}
                        type="text"
                        name={`memName${index}`}
                        placeholder="Enter Membership Name"
                        value={formData.ProfessionalMemberships[index]?.membershipName || ""}
                        onChange={(e) => {
                          handleInputChange(index, "membershipName", e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.inputBox}>
                    <label className={styles.inputTitle}>
                      Membership Level
                      <input
                        className={styles.inputText}
                        type="text"
                        name={`memLevel${index}`}
                        placeholder="Enter Membership Level"
                        value={formData.ProfessionalMemberships[index]?.membershipLevel || ""}
                        onChange={(e) => {
                          handleInputChange(index, "membershipLevel", e.target.value);
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <hr />
    </div>
  );
}

function NationalExamSection() {
  const { formData, setFormData } = useContext(FormContext);
  if (formData.NationalExams.length === 0) {
    const newNationalExam: NationalExams = {
      examName: "",
      examDate: "",
      certificateNumber: "",
    };

    setFormData({
      ...formData,
      NationalExams: [newNationalExam],
    });
  }

  const handleInputChange = (
    index: number,
    field: keyof NationalExams,
    value: string | number | boolean,
  ) => {
    setFormData((prevFormData) => {
      const updatedNationalExams = [...prevFormData.NationalExams];
      updatedNationalExams[index] = {
        ...updatedNationalExams[index],
        [field]: value,
      };
      return {
        ...prevFormData,
        NationalExams: updatedNationalExams,
      };
    });
  };

  const addNationalExam = () => {
    const newNationalExam: NationalExams = {
      examName: "",
      examDate: "",
      certificateNumber: "",
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      NationalExams: [...prevFormData.NationalExams, newNationalExam],
    }));
  };

  const deleteNationalExam = (indexToDelete: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      NationalExams: prevFormData.NationalExams.filter((_, index) => index !== indexToDelete),
    }));
  };

  return (
    <div>
      <div className={styles.formSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionName}>
            National Exam<span className={styles.boldRed}>*</span>
          </h2>
          <button type="button" className={styles.add} onClick={addNationalExam}>
            <span>Add</span>
            <img src={plus} alt="buttonpng" height="14px" />
          </button>
        </div>
        {formData.NationalExams.slice()
          .reverse()
          .map((_, reversedIndex) => {
            const index = formData.NationalExams.length - 1 - reversedIndex;
            return (
              <>
                <div className={styles.subSection} key={index}>
                  <div className={styles.titleContainer}>
                    <h3 className={styles.subTitle}>{"National Exam " + (index + 1)}</h3>
                    {index !== 0 && (
                      <button
                        type="button"
                        className={styles.deleteButton}
                        onClick={() => {
                          deleteNationalExam(index);
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
                      <label
                        htmlFor="nationalExam"
                        className={`${styles.inputTitle} ${styles.dropdownLabel}`}
                      >
                        National Exam<span className={styles.boldRed}>*</span>
                        <Dropdown
                          name={"nationalExam"}
                          options={examList}
                          required
                          onSelect={(option) => {
                            handleInputChange(index, "examName", option);
                          }}
                          value={formData.NationalExams[index]?.examName || ""}
                        />
                      </label>
                    </div>
                    <div className={styles.inputBox}>
                      <label className={styles.inputTitle}>
                        Date of National Exam<span className={styles.boldRed}>*</span>
                        <input
                          className={styles.inputText}
                          name="exam-date"
                          type="text"
                          placeholder="mm/dd/yyyy"
                          pattern="^(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1])/(19|20)\d{2}$"
                          required
                          value={formData.NationalExams[index]?.examDate || ""}
                          onChange={(e) => {
                            handleInputChange(index, "examDate", e.target.value);
                          }}
                        />
                      </label>
                    </div>
                    <div className={styles.inputBox}>
                      <label className={styles.inputTitle}>
                        Certificate Number<span className={styles.boldRed}>*</span>
                        <input
                          className={styles.inputText}
                          name="certificate-number"
                          type="text"
                          placeholder="Enter Certificate Number"
                          required
                          value={formData.NationalExams[index]?.certificateNumber || ""}
                          onChange={(e) => {
                            handleInputChange(index, "certificateNumber", e.target.value);
                          }}
                        />
                      </label>
                    </div>
                  </div>

                  <FileUploadPopupWindow buttonTitle="Upload Proof of National Exam" />
                </div>
              </>
            );
          })}
      </div>
      <hr />
    </div>
  );
}

function ICCCoursesSection() {
  const { formData, setFormData } = useContext(FormContext);

  if (formData.ICCCourses.length === 0) {
    const newICCCourse: ICCCourses = {
      courseName: "",
      courseCompleteDate: "",
      courseCertificateNumber: "",
    };

    setFormData({
      ...formData,
      ICCCourses: [newICCCourse],
    });
  }

  const handleInputChange = (
    index: number,
    field: keyof ICCCourses,
    value: string | number | boolean,
  ) => {
    setFormData((prevFormData) => {
      const updatedICCCourses = [...prevFormData.ICCCourses];
      updatedICCCourses[index] = {
        ...updatedICCCourses[index],
        [field]: value,
      };
      return {
        ...prevFormData,
        ICCCourses: updatedICCCourses,
      };
    });
  };

  const addCourse = () => {
    const newICCCourse: ICCCourses = {
      courseName: "",
      courseCompleteDate: "",
      courseCertificateNumber: "",
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      ICCCourses: [...prevFormData.ICCCourses, newICCCourse],
    }));
  };

  const deleteCourse = (indexToDelete: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ICCCourses: prevFormData.ICCCourses.filter((_, index) => index !== indexToDelete),
    }));
  };

  return (
    <div>
      <div className={styles.formSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionName}>
            ICC Courses<span className={styles.boldRed}>*</span>
          </h2>
          <button type="button" className={styles.add} onClick={addCourse}>
            <span>Add</span>
            <img src={plus} alt="buttonpng" height="14px" />
          </button>
        </div>
        {formData.ICCCourses.slice()
          .reverse()
          .map((_, reversedIndex) => {
            const index = formData.ICCCourses.length - 1 - reversedIndex;
            return (
              <div className={styles.subSection} key={index}>
                <div className={styles.titleContainer}>
                  <h3 className={styles.subTitle}>{"Course " + (index + 1)}</h3>
                  {index !== 0 && (
                    <button
                      type="button"
                      className={styles.deleteButton}
                      onClick={() => {
                        deleteCourse(index);
                      }}
                    >
                      <img
                        src={deleteIconHovered}
                        className={styles.redDelete}
                        alt="delete-icon-hovered"
                      />
                      <img src={deleteIcon} className={styles.greyDelete} alt="delete-icon" />{" "}
                      <span className={styles.deleteText}>Delete</span>
                    </button>
                  )}
                </div>
                <div className={styles.formSectionContainer}>
                  <div className={styles.inputBox}>
                    <label
                      htmlFor={`iccCourse${index}`}
                      className={`${styles.inputTitle} ${styles.dropdownLabel}`}
                    >
                      Courses
                      <span className={styles.boldRed}>*</span>
                      <Dropdown
                        name={`iccCourse${index}`}
                        options={courseList}
                        required
                        value={formData.ICCCourses[index]?.courseName || ""}
                        onSelect={(option) => {
                          handleInputChange(index, "courseName", option);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.inputBox}>
                    <label className={styles.inputTitle}>
                      Date of Completion<span className={styles.boldRed}>*</span>
                      <input
                        className={styles.inputText}
                        type="text"
                        name={`iccComplete${index}`}
                        placeholder="mm/dd/yyyy"
                        pattern="^(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1])/(19|20)\d{2}$"
                        required
                        value={formData.ICCCourses[index]?.courseCompleteDate || ""}
                        onChange={(e) => {
                          handleInputChange(index, "courseCompleteDate", e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.inputBox}>
                    <label className={styles.inputTitle}>
                      Certificate Number<span className={styles.boldRed}>*</span>
                      <input
                        className={styles.inputText}
                        type="text"
                        name={`certificateNumber${index}`}
                        placeholder="10-digit number"
                        required
                        value={formData.ICCCourses[index]?.courseCertificateNumber || ""}
                        onChange={(e) => {
                          handleInputChange(index, "courseCertificateNumber", e.target.value);
                        }}
                      />
                    </label>
                  </div>
                </div>

                <FileUploadPopupWindow buttonTitle="Upload Proof of Course Completion" />
              </div>
            );
          })}
      </div>
      <hr />
    </div>
  );
}
type Step2Props = {
  next: () => void;
};

export function Step2({ next }: Step2Props) {
  let content;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    next();
  };

  const { formData } = useContext(FormContext);

  if (formData.applicantPath === "3") {
    content = (
      <>
        <NationalExamSection />
      </>
    );
  } else if (formData.applicantPath === "4") {
    content = (
      <>
        <NationalExamSection />
        <ICCCoursesSection />
      </>
    );
  }
  return (
    <form id="step2-form" className={styles.formContainer} onSubmit={handleSubmit}>
      <SchoolSection />
      {content}
      <ProfessionalAssociationSection />
    </form>
  );
}
