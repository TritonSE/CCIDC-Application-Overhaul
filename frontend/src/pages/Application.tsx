import { FormEvent, useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import arrow from "../assets/arrow.svg";
import backArrow from "../assets/backArrow.svg";
import { CongratulationsPage } from "../components/CongratulationsPage.tsx";
import {
  Button,
  CompleteInOneSittingModal,
  ConfirmSubmissionModal,
  PathwayTimeline,
  Step1,
  Step2,
  Step3,
  Step4,
} from "../components/index.ts";
import { AuthContext } from "../contexts/AuthContext.tsx";
import { ApplicationPathType, FormContext } from "../contexts/FormContext.tsx";
import styles from "../stylesheets/Application.module.css";

export const Application: React.FC = () => {
  const [pageNum, setPageNum] = useState<0 | 1 | 2 | 3>(0);
  const [showCongratsPage, setShowCongratsPage] = useState(false);
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const { formData, submitForm } = useContext(FormContext);

  let path = formData.applicantPath;

  if (path === "") {
    navigate("/prescreening");
    path = path as ApplicationPathType;
  }

  // Redirect to login page if not logged in
  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      navigate("/login");
    }
  }, [isLoggedIn, isLoading]);
  const [isCompleteInOneSittingModalOpen, setIsCompleteInOneSittingModalOpen] = useState(true);
  const [confirmSubmissionModalOpen, setConfirmSubmissionModalOpen] = useState(false);

  const next = () => {
    if (pageNum < 3) {
      setPageNum((newPageNum) => (newPageNum + 1) as 0 | 1 | 2 | 3);
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    if (pageNum === 3) {
      setConfirmSubmissionModalOpen(true);
    }
  };

  const back = () => {
    if (pageNum > 0) {
      setPageNum((newPageNum) => (newPageNum - 1) as 0 | 1 | 2 | 3);
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) {
      return;
    } else {
      next();
    }
  };

  const path_descriptions = {
    "1": (
      <p>
        Path 1 is for Applicants who meet minimum education or experience-only requirements but who
        are still in the process of completing the necessary education/work experience, may take the{" "}
        <span className={styles.red}>IDEX California® Examination</span>. After successfully
        passing the <span className={styles.red}>IDEX California® Examination</span>, these
        candidates must submit the required proof of education/work experience, as listed under the
        Categories of Certification, in order to complete the certification process.
      </p>
    ),

    "2": (
      <p>
        Path 2 is for Applicants who meet minimum education and education/work experience, may take
        the <span className={styles.red}>IDEX California® Examination</span>. After successfully
        passing the <span className={styles.red}>IDEX California® Examination</span>, these
        candidates must submit the required proof of education/work experience, as listed under the
        Categories of Certification, in order to complete the certification process.
      </p>
    ),

    "3": (
      <p>
        Path 3 is for Applicants who meet minimum education and education/work experience, and has
        passed one of the qualifying National Interior Designer Exams. Applicants are eligible and
        must take the <span className={styles.red}>IDEX California® Examination</span>. After
        successfully passing the <span className={styles.red}>IDEX California® Examination</span>,
        these candidates must submit the required proof of education/work experience, as listed
        under the Categories of Certification, in order to complete the certification process.
      </p>
    ),

    "4": (
      <p>
        Path 4 is for Applicants who meet minimum education and education/work experience, have
        passed one of the qualifying National Interior Designer Exams, and passed required ICC
        courses. Applicants are eligible and must take the{" "}
        <span className={styles.red}>IDEX California® Examination</span>. After successfully
        passing the <span className={styles.red}>IDEX California® Examination</span>, these
        candidates must submit the required proof of education/work experience, as listed under the
        Categories of Certification, in order to complete the certification process.
      </p>
    ),
  };

  const applicationSteps = {
    0: <Step1 next={next} />,
    1: <Step2 next={next} />,
    2: <Step3 next={next} />,
    3: <Step4 next={next} />,
  };

  if (showCongratsPage) {
    return <CongratulationsPage />;
  }

  return (
    <div className={styles.pathwayApplicationBase}>
      <CompleteInOneSittingModal
        isOpen={isCompleteInOneSittingModalOpen}
        onClose={() => {
          setIsCompleteInOneSittingModalOpen(false);
        }}
      />
      <ConfirmSubmissionModal
        isOpen={confirmSubmissionModalOpen}
        onClose={() => {
          setConfirmSubmissionModalOpen(false);
        }}
        onSubmit={function (): void {
          submitForm()
            .then(() => {
              setShowCongratsPage(true);
            })
            .catch((error) => {
              alert(`Error submitting form data: ${error}`);
            });
        }}
      ></ConfirmSubmissionModal>
      {pageNum === 0 && (
        <div className={styles.applicationContainer}>
          <h1 className={styles.title}>Path {path} Application</h1>

          <div className={styles.pathContent}>{path_descriptions[path]}</div>
          <div className={styles.centeredContainer}>
            <NavLink className={styles.navLink} to={"/prescreening"}>
              <Button onClick={undefined}>Retake Prescreening Questionnaire</Button>
            </NavLink>
          </div>

          <p className={styles.note}>
            {" "}
            If you would like to be sorted into a different pathway, please click above to retake
            the
            <br></br>
            sorting questionnaire. For further inquiries, please reach out to{" "}
            <a href="mailto:ccidc@ccidc.org" className={styles.red}>
              <strong>ccidc@ccidc.org</strong>
            </a>
          </p>
        </div>
      )}

      <div className={styles.formContainer}>
        <PathwayTimeline progress={pageNum} />
        <div>{applicationSteps[pageNum]}</div>
        <div className={styles.navigationContainer}>
          <button onClick={back} id="a" className={styles.backArrow}>
            <img src={backArrow} id={styles.backArrow} alt="backArrow"></img>
          </button>
          <button
            type="submit"
            form={`step${pageNum + 1}-form`}
            onSubmit={(e) => {
              onSubmit(e as unknown as FormEvent<HTMLFormElement>);
            }}
            className={styles.arrow}
          >
            <img src={arrow} id={styles.arrow} alt="arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
};
