import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import arrow from "../assets/arrow.svg";
import backArrow from "../assets/backArrow.svg";
import { Button, PathwayTimeline, Step1, Step2, Step3, Step4 } from "../components/index.ts";
import { AuthContext } from "../contexts/AuthContext.tsx";
import styles from "../stylesheets/Application.module.css";

export type ApplicationProps = {
  path: 1 | 2 | 3 | 4;
};

export const Application: React.FC<ApplicationProps> = ({ path }: ApplicationProps) => {
  const [pageNum, setPageNum] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect to login page if not logged in
  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      navigate("/login");
    }
  }, [isLoggedIn, isLoading]);

  const next = () => {
    if (pageNum < 5) {
      setPageNum((newPageNum) => (newPageNum + 1) as 0 | 1 | 2 | 3 | 4 | 5);
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    if (pageNum === 5) {
      // toggle Congratulations Modal
    }
  };

  const back = () => {
    if (pageNum > 0) {
      setPageNum((newPageNum) => (newPageNum - 1) as 0 | 1 | 2 | 3 | 4 | 5);
    }
  };

  // Tests dummy forms

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
    1: (
      <p>
        Path 1 is for Applicants who meet minimum education or experience-only requirements but who
        are still in the process of completing the necessary education/work experience, may take the{" "}
        <span className={styles.red}>IDEX California® Examination</span>. After successfully
        passing the <span className={styles.red}>IDEX California® Examination</span>, these
        candidates must submit the required proof of education/work experience, as listed under the
        Categories of Certification, in order to complete the certification process.
      </p>
    ),

    2: (
      <p>
        Path 2 is for Applicants who meet minimum education and education/work experience, may take
        the <span className={styles.red}>IDEX California® Examination</span>. After successfully
        passing the <span className={styles.red}>IDEX California® Examination</span>, these
        candidates must submit the required proof of education/work experience, as listed under the
        Categories of Certification, in order to complete the certification process.
      </p>
    ),

    3: (
      <p>
        Path 3 is for Applicants who meet minimum education and education/work experience, and has
        passed one of the qualifying National Interior Designer Exams. Applicants are eligible and
        must take the <span className={styles.red}>IDEX California® Examination</span>. After
        successfully passing the <span className={styles.red}>IDEX California® Examination</span>,
        these candidates must submit the required proof of education/work experience, as listed
        under the Categories of Certification, in order to complete the certification process.
      </p>
    ),

    4: (
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
    0: <Step1 onSubmit={next} />,
    1: <Step2 pathNumber={path} onSubmit={next} />,
    2: <Step3 next={next} />,
    3: <Step4 next={next} />,
    4: (
      <form id="step5-form" onSubmit={onSubmit}>
        <div />
      </form>
    ),
    5: <div className={styles.congratulationsModal}></div>,
  };

  return (
    <div className={styles.pathwayApplicationBase}>
      {pageNum === 0 && (
        <div className={styles.applicationContainer}>
          <h1 className={styles.title}>Path {path} Application</h1>

          <div className={styles.pathContent}>{path_descriptions[path]}</div>
          <div className={styles.centeredContainer}>
            <Button onClick={undefined}>Retake Prescreening Questionnaire</Button>
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
        <PathwayTimeline path={path} progress={pageNum}></PathwayTimeline>
        <div>{applicationSteps[pageNum]}</div>
        <div className={styles.navigationContainer}>
          <button onClick={back} id="a" className={styles.backArrow}>
            <img src={backArrow} id={styles.backArrow} alt="backArrow"></img>
          </button>
          <button
            type="submit"
            form={`step${pageNum + 1}-form`}
            onSubmit={next}
            className={styles.arrow}
          >
            <img src={arrow} id={styles.arrow} alt="arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
};
