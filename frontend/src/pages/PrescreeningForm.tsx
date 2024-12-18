import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import buttonStyle from "../components/Button.module.css";
import { Page, RequirementsNotMetModal } from "../components/index.ts";
import { ApplicationPathType, FormContext } from "../contexts/FormContext.tsx";
import styles from "../stylesheets/PrescreeningForm.module.css";

export function PrescreeningForm() {
  // State to manage the selected values for each question
  const [question1Value, setQuestion1Value] = useState("");
  const [question2Value, setQuestion2Value] = useState("");
  const [question3Value, setQuestion3Value] = useState("");
  const [isRequirementsNotMetModalOpen, setIsRequirementsNotMetModalOpen] = useState(false);
  const navigate = useNavigate();
  const { setFormData } = useContext(FormContext);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let finalPath = "" as ApplicationPathType | "";

    // Use the selected values to determine the finalPath
    // Can modify this logic based on your requirements
    if (question1Value === "" || question2Value === "" || question3Value === "") {
      return;
    }

    if (question1Value === "op12" && question2Value === "op22" && question3Value === "op32") {
      finalPath = "1";
    } else if (
      question1Value === "op11" &&
      question2Value === "op22" &&
      question3Value === "op32"
    ) {
      finalPath = "2";
    } else if (
      question1Value === "op11" &&
      question2Value === "op21" &&
      question3Value === "op32"
    ) {
      finalPath = "3";
    } else if (
      question1Value === "op11" &&
      question2Value === "op21" &&
      question3Value === "op31"
    ) {
      finalPath = "4";
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
    setQuestion1Value("");
    setQuestion2Value("");
    setQuestion3Value("");
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
        {/* Question 1 */}
        <div className="QuestionOne">
          <p className={styles.question}>
            1. Please select the appropriate amount of experience you currently have.
          </p>

          <br />

          <input
            type="radio"
            id="op11"
            name="question1"
            checked={question1Value === "op11"}
            onChange={() => {
              setQuestion1Value("op11");
            }}
          />

          <label htmlFor="op11" className={styles.label}>
            <p>
              5+ years of Diversified Design Experience <strong> and/or </strong> 40+ Core Units
            </p>
          </label>

          <br />

          <input
            type="radio"
            id="op12"
            name="question1"
            checked={question1Value === "op12"}
            onChange={() => {
              setQuestion1Value("op12");
            }}
          />

          <label htmlFor="op12" className={styles.label}>
            <p>
              I do not have 5 years of Diversified Design Experience <strong> and/or </strong> 40+
              Core Units but am in the process of completing <strong> one </strong> of these two and
              will do <strong> within a year </strong> from today.
            </p>
          </label>

          <br />

          <input
            type="radio"
            id="op13"
            name="question1"
            checked={question1Value === "op13"}
            onChange={() => {
              setQuestion1Value("op13");
            }}
          />

          <label htmlFor="op13" className={styles.label}>
            <p>
              I do not have 5 years of Diversified Design Experience or have 40+ Core Units and
              <strong> will not complete </strong> at least one of these two requirements{" "}
              <strong> within a year </strong> from today.
            </p>
          </label>
        </div>

        <br />

        {/* Question 2 */}
        <div className="QuestionTwo">
          <p className={styles.question}>
            2. If you have passed any of the following qualifying National Interior Design Exams,
            please indicate so
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
            id="op21"
            name="question2"
            checked={question2Value === "op21"}
            onChange={() => {
              setQuestion2Value("op21");
            }}
          />

          <label htmlFor="op21" className={styles.label}>
            Yes
          </label>

          <br />

          <input
            type="radio"
            id="op22"
            name="question2"
            checked={question2Value === "op22"}
            onChange={() => {
              setQuestion2Value("op22");
            }}
          />

          <label htmlFor="op22" className={styles.label}>
            No
          </label>
        </div>

        <br />

        {/* Question 3 */}
        <div className="QuestionThree">
          <p className={styles.question}>3. Do you mainly practice commercial design?</p>

          <br />

          <input
            type="radio"
            id="op31"
            name="question3"
            checked={question3Value === "op31"}
            onChange={() => {
              setQuestion3Value("op31");
            }}
          />

          <label htmlFor="op31" className={styles.label}>
            Yes
          </label>

          <br />

          <input
            type="radio"
            id="op32"
            name="question3"
            checked={question3Value === "op32"}
            onChange={() => {
              setQuestion3Value("op32");
            }}
          />
          <label htmlFor="op32" className={styles.label}>
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
