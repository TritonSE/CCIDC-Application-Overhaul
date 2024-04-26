import { useState } from "react";

import caretDown from "../assets/caretdown.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import deleteIconHovered from "../assets/red-delete.svg";
import plus from "../assets/plusIcon.svg";
import upload from "../assets/upload.svg";
import courseList from "../constants/courses.json";
import examList from "../constants/exams.json";

import styles from "./Steps.module.css";

function SchoolSection({ pathNumber }: { pathNumber: number }) {
  const [schools, setSchools] = useState([{ id: 1 }]);
  const [showAddress, setShowAddress] = useState(false);

  const [hovered, setHovered] = useState(false);

  const addSchool = () => {
    setSchools((prevSchools) => [...prevSchools, { id: prevSchools.length + 1 }]);
  };

  const deleteSchool = (idToDelete: number) => {
    setSchools((prevSchools) => prevSchools.filter((school) => school.id !== idToDelete));
  };

  const toggleAddress = () => {
    setShowAddress((prevState) => !prevState);
  };

  const isRequired = [2, 3, 4].includes(pathNumber);

  return (
    <div>
      <div className={styles.formSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionName}>
            Schools{isRequired && <span className={styles.boldRed}>*</span>}
          </h2>
          <button className={styles.add} onClick={addSchool}>
            <span>Add</span>
            <img src={plus} alt="buttonpng" height="14px" />
          </button>
        </div>
        {schools.map((school, index) => (
          <div className={styles.subSection} key={school.id}>
            <div className={styles.titleContainer}>
              <h3 className={styles.subTitle}>{"School " + school.id}</h3>
              <button
                className={styles.deleteButton}
                onMouseEnter={() => {
                  setHovered(true);
                }}
                onMouseLeave={() => {
                  setHovered(false);
                }}
                onClick={() => {
                  deleteSchool(school.id);
                }}
              >
                <img src={hovered ? deleteIconHovered : deleteIcon} alt="deletepng" />
                <span className={styles.deleteText}>Delete</span>
              </button>
            </div>

            <div className={styles.formSectionContainer}>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Name of School Attended
                  {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    name={`school_${index}`}
                    placeholder="Enter School Name"
                    required={isRequired}
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
                    name={`city_${index}`}
                    placeholder="Enter City"
                    required={isRequired}
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
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Core Units Completed
                  {isRequired && <span className={styles.boldRed}>*</span>}
                  <input
                    className={styles.inputText}
                    type="text"
                    name={`coreUnits${index}`}
                    placeholder="Enter Number Here"
                    required={isRequired}
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
                    required={isRequired}
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
                    required={isRequired}
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
        <hr className={styles.break} />
        <div className={styles.warningText}>
          *All transcripts must be <b>&nbsp;official</b>, they may be mailed or emailed directly
          from your school or educational institution
          <button onClick={toggleAddress}>
            <img src={caretDown} alt="caret-icon" />
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
      </div>
      <hr />
    </div>
  );
}

function ProfessionalAssociationSection() {
  const [associations, setAssociations] = useState([{ id: 1 }]);
  const [hovered, setHovered] = useState(false);

  const addAssociation = () => {
    setAssociations((prevAssociations) => [
      ...prevAssociations,
      { id: prevAssociations.length + 1 },
    ]);
  };

  const deleteAssociation = (idToDelete: number) => {
    setAssociations((prevAssociations) =>
      prevAssociations.filter((association) => association.id !== idToDelete),
    );
  };

  return (
    <div>
      <div className={styles.formSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionName}>Professional Association Memberships</h2>
          <button className={styles.add} onClick={addAssociation}>
            <span>Add</span>
            <img src={plus} alt="buttonpng" height="14px" />
          </button>
        </div>
        {associations.map((association, index) => (
          <div className={styles.subSection} key={association.id}>
            <div className={styles.titleContainer}>
              <h3 className={styles.subTitle}>{"Membership " + association.id}</h3>
              <button
                className={styles.deleteButton}
                onMouseEnter={() => {
                  setHovered(true);
                }}
                onMouseLeave={() => {
                  setHovered(false);
                }}
                onClick={() => {
                  deleteAssociation(association.id);
                }}
              >
                <img src={hovered ? deleteIconHovered : deleteIcon} alt="deletepng" />
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
                    name={`email_${index}`}
                    placeholder="Enter your Membership"
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Membership Level
                  <input
                    className={styles.inputText}
                    type="text"
                    name={`memLevel_${index}`}
                    placeholder="Enter Membership Level"
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

function NationalExamSection() {
  return (
    <div>
      <div className={styles.formSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionName}>
            National Exam<span className={styles.boldRed}>*</span>
          </h2>
        </div>
        <div className={styles.formSectionContainer}>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              National Exam<span className={styles.boldRed}>*</span>
              <select className={styles.inputText} id="drop" required>
                <option value="" className={styles.optionDefault} selected disabled>
                  Select the Appropriate Exam
                </option>
                {examList.map((dropOption, dropIndex) => (
                  <option
                    key={dropIndex}
                    value={dropOption}
                    className={dropOption ? styles.optionSelected : styles.optionDefault}
                  >
                    {dropOption}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Date of National Exam<span className={styles.boldRed}>*</span>
              <input className={styles.inputText} type="text" placeholder="mm/dd/yyyy" required />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputTitle}>
              Certificate Number<span className={styles.boldRed}>*</span>
              <input
                className={styles.inputText}
                type="text"
                placeholder="Enter Certificate Number"
                required
              />
            </label>
          </div>
        </div>
        <button className={styles.upload}>
          Upload Proof of National Exam
          <img src={upload} className={styles.uploadButton} alt="buttonpng" />
        </button>
      </div>
      <hr />
    </div>
  );
}

function ICCCourses() {
  const [courses, setCourses] = useState([{ id: 1 }]);
  const [hovered, setHovered] = useState(false);

  const addCourse = () => {
    setCourses((prevCourses) => [...prevCourses, { id: prevCourses.length + 1 }]);
  };

  const deleteCourse = (idToDelete: number) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== idToDelete));
  };

  return (
    <div>
      <div className={styles.formSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionName}>
            ICC Courses<span className={styles.boldRed}>*</span>
          </h2>
          <button className={styles.add} onClick={addCourse}>
            <span>Add</span>
            <img src={plus} alt="buttonpng" height="14px" />
          </button>
        </div>
        {courses.map((course, index) => (
          <div className={styles.subSection} key={course.id}>
            <div className={styles.titleContainer}>
              <h3 className={styles.subTitle}>{"Course " + course.id}</h3>
              <button
                className={styles.deleteButton}
                onMouseEnter={() => {
                  setHovered(true);
                }}
                onMouseLeave={() => {
                  setHovered(false);
                }}
                onClick={() => {
                  deleteCourse(course.id);
                }}
              >
                <img src={hovered ? deleteIconHovered : deleteIcon} alt="deletepng" />
                <span className={styles.deleteText}>Delete</span>
              </button>
            </div>
            <div className={styles.formSectionContainer}>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Courses<span className={styles.boldRed}>*</span>
                  <select className={styles.inputText} id="drop" required>
                    <option value="" className={styles.optionDefault} selected disabled>
                      Select One
                    </option>
                    {courseList.map((dropOption, dropIndex) => (
                      <option
                        key={dropIndex}
                        value={dropOption}
                        className={dropOption ? styles.optionSelected : styles.optionDefault}
                      >
                        {dropOption}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Professional Association Membership<span className={styles.boldRed}>*</span>
                  <input
                    className={styles.inputText}
                    type="text"
                    name={`email_${index}`}
                    placeholder="Enter your Membership"
                    required
                  />
                </label>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.inputTitle}>
                  Certificate Number<span className={styles.boldRed}>*</span>
                  <input
                    className={styles.inputText}
                    type="text"
                    name={`certNun${index}`}
                    placeholder="Enter Certificate Number"
                    required
                  />
                </label>
              </div>
            </div>
            <button className={styles.upload}>
              Upload Proof of Course Completion
              <img src={upload} className={styles.uploadButton} alt="buttonpng" />
            </button>
          </div>
        ))}
      </div>
      <hr />
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
        <ProfessionalAssociationSection></ProfessionalAssociationSection>
      </>
    );
  } else if (pathNumber === 4) {
    content = (
      <>
        <NationalExamSection></NationalExamSection>
        <ICCCourses></ICCCourses>
        <ProfessionalAssociationSection></ProfessionalAssociationSection>
      </>
    );
  }
  return (
    <form id="step2-form" className={styles.formContainer}>
      <SchoolSection pathNumber={pathNumber}></SchoolSection>
      {content}
    </form>
  );
}
