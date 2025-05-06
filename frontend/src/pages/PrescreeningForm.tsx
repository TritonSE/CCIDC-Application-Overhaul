import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import buttonStyle from "../components/Button.module.css";
import { Page, RequirementsNotMetModal } from "../components/index.ts";
import { ApplicationPathType, FormContext } from "../contexts/FormContext.tsx";
import styles from "../stylesheets/PrescreeningForm.module.css";

export function PrescreeningForm() {
  // State to manage the selected values for each question
  const [experienceQuestionValue, setExperienceQuestionValue] = useState("");
  const [educationQuestionValue, setEducationQuestionValue] = useState("");
  const [examsQuestionValue, setExamsQuestionValue] = useState("");
  const [mainlyCommercialDesignQuestionValue, setMainlyCommercialDesignQuestionValue] =
    useState("");

  const [isRequirementsNotMetModalOpen, setIsRequirementsNotMetModalOpen] = useState(false);
  const navigate = useNavigate();
  const { setFormData } = useContext(FormContext);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let finalPath = "" as ApplicationPathType | "";

    // Use the selected values to determine the finalPath
    // Can modify this logic based on your requirements
    if (
      experienceQuestionValue === "" ||
      educationQuestionValue === "" ||
      examsQuestionValue === "" ||
      mainlyCommercialDesignQuestionValue === ""
    ) {
      return;
    }

    if (
      (experienceQuestionValue === "lessFiveYears" && educationQuestionValue === "yes") ||
      (experienceQuestionValue === "fiveToSevenYears" && educationQuestionValue === "no")
    ) {
      finalPath = "1";
    } else if (
      (experienceQuestionValue === "fiveToSevenYears" && educationQuestionValue === "yes") ||
      experienceQuestionValue === "eightPlusYears"
    ) {
      // Paths 2-4
      if (examsQuestionValue === "yes") {
        if (mainlyCommercialDesignQuestionValue === "yes") {
          finalPath = "4";
        } else {
          finalPath = "3";
        }
      } else {
        finalPath = "2";
      }
    }

    if (finalPath !== "") {
      localStorage.setItem("applicantPath", finalPath);

      setFormData((prevFormData) => ({
        ...prevFormData,
        applicantPath: finalPath,
      }));

      navigate(`/application`);
    } else {
      setIsRequirementsNotMetModalOpen(true);
    }
  };

  function clearForm() {
    setExperienceQuestionValue("");
    setEducationQuestionValue("");
    setExamsQuestionValue("");
    setMainlyCommercialDesignQuestionValue("");
  }

  return (
    <Page>
      <RequirementsNotMetModal
        isOpen={isRequirementsNotMetModalOpen}
        onClose={() => {
          setIsRequirementsNotMetModalOpen(false);
        }}
        clearForm={clearForm}
      />
      <h1 className={styles.title}>Prescreening Questions</h1>
      <p className={styles.body}>
        Please answer the following questions about your experience as an Interior Designer. Based
        on your responses, we will automatically direct you into the appropriate pathway. View more
        information about the pathways{" "}
        <Link to="/" className={styles.blueLink}>
          here.
        </Link>{" "}
        <strong> All questions are required.</strong>
      </p>

      <form onSubmit={handleFormSubmit} id="form1">
        {/* Experience Question */}
        <div>
          <p className={styles.question}>
            1. Please select the amount of experience you currently have.
          </p>

          <br />

          <input
            type="radio"
            id="lessFiveYears"
            name="question1"
            checked={experienceQuestionValue === "lessFiveYears"}
            onChange={() => {
              setExperienceQuestionValue("lessFiveYears");
            }}
          />

          <label htmlFor="lessFiveYears" className={styles.label}>
            <p>Less than 5 years of Diversified Design Experience</p>
          </label>

          <br />

          <input
            type="radio"
            id="fiveToSevenYears"
            name="question1"
            checked={experienceQuestionValue === "fiveToSevenYears"}
            onChange={() => {
              setExperienceQuestionValue("fiveToSevenYears");
            }}
          />

          <label htmlFor="fiveToSevenYears" className={styles.label}>
            <p>5-7 years of Diversified Design Experience</p>
          </label>

          <br />

          <input
            type="radio"
            id="eightPlusYears"
            name="question1"
            checked={experienceQuestionValue === "eightPlusYears"}
            onChange={() => {
              setExperienceQuestionValue("eightPlusYears");
            }}
          />

          <label htmlFor="eightPlusYears" className={styles.label}>
            <p>8+ years of Diversified Design Experience</p>
          </label>
        </div>

        <br />

        {/* Education Question */}
        <div>
          <p className={styles.question}>
            2. Have you completed at least 40 Core Units of education?
          </p>

          <br />

          <input
            type="radio"
            id="yes"
            name="educationQuestion"
            checked={educationQuestionValue === "yes"}
            onChange={() => {
              setEducationQuestionValue("yes");
            }}
          />

          <label htmlFor="yes" className={styles.label}>
            Yes
          </label>

          <br />

          <input
            type="radio"
            id="no"
            name="educationQuestion"
            checked={educationQuestionValue === "no"}
            onChange={() => {
              setEducationQuestionValue("no");
            }}
          />

          <label htmlFor="no" className={styles.label}>
            No
          </label>
        </div>

        <br />

        {/* Exams Question */}
        <div>
          <p className={styles.question}>
            3. Have you passed any of the following qualifying National Interior Design Exams?
          </p>
          <ul className={styles.ulprescreening}>
            <li>ARE</li>
            <li>CASP</li>
            <li>LEED - AP (+)</li>
            <li>NCBDC</li>
            <li>NCIDQ</li>
            <li>NKBA - CKBD (+)</li>
          </ul>

          <br />

          <input
            type="radio"
            id="yes"
            name="question2"
            checked={examsQuestionValue === "yes"}
            onChange={() => {
              setExamsQuestionValue("yes");
            }}
          />

          <label htmlFor="yes" className={styles.label}>
            Yes
          </label>

          <br />

          <input
            type="radio"
            id="no"
            name="question2"
            checked={examsQuestionValue === "no"}
            onChange={() => {
              setExamsQuestionValue("no");
            }}
          />

          <label htmlFor="no" className={styles.label}>
            No
          </label>
        </div>

        <br />

        {/* Mainly Commerical Design Question */}
        <div>
          <p className={styles.question}>4. Do you mainly practice commercial design?</p>

          <br />

          <input
            type="radio"
            id="yes"
            name="question3"
            checked={mainlyCommercialDesignQuestionValue === "yes"}
            onChange={() => {
              setMainlyCommercialDesignQuestionValue("yes");
            }}
          />

          <label htmlFor="yes" className={styles.label}>
            Yes
          </label>

          <br />

          <input
            type="radio"
            id="no"
            name="question3"
            checked={mainlyCommercialDesignQuestionValue === "no"}
            onChange={() => {
              setMainlyCommercialDesignQuestionValue("no");
            }}
          />
          <label htmlFor="no" className={styles.label}>
            No
          </label>
        </div>

        <div className={styles.centeredContainer}>
          <button className={buttonStyle.button} type="submit" form="form1" value="Submit">
            Continue
          </button>
        </div>
      </form>
    </Page>
  );
}
