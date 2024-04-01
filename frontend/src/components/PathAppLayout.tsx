import { useState } from "react";

import arrow from "../assets/arrow.svg";
import backArrow from "../assets/backArrow.svg";

import styles from "./PathAppLayout.module.css";
import { Button, Page, PathwayTimeline } from "./index.ts";

export type PathAppLayoutProps = {
  path: 1 | 2 | 3 | 4;
};

export const PathAppLayout: React.FC<PathAppLayoutProps> = ({ path }: PathAppLayoutProps) => {
  const [pageNum, setPageNum] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);

  const next = () => {
    if (pageNum < 5) {
      setPageNum((prevPageNum) => (prevPageNum + 1) as 0 | 1 | 2 | 3 | 4 | 5);
    }
  };

  const back = () => {
    if (pageNum > 0) {
      setPageNum((prevPageNum) => (prevPageNum - 1) as 0 | 1 | 2 | 3 | 4 | 5);
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

  return (
    <Page>
      <div className={styles.pathwayApplicationBase}>
        <div className={styles.applicationContainer}>
          <h1 className={styles.title}>Path {path} Application</h1>

          <div className={styles.pathContent}>{path_descriptions[path]}</div>
          <div className={styles.centeredContainer}>
            <Button onClick={null}>Retake Prescreening Questions</Button>
          </div>

          <div className={styles.note}>
            <p className={styles.red}>
              {" "}
              If you would like to be sorted into a different pathway, please click above to retake
              the
              <br></br>
              sorting questionnaire. For further inquiries, please reach out to{" "}
              <strong>ccidc@ccidc.org</strong>
            </p>
          </div>
        </div>

        <PathwayTimeline path={path} progress={pageNum}></PathwayTimeline>

        <div className={styles.navigationContainer}>
          <button onClick={back}>
            <div className={styles.backArrow}>
              <img src={backArrow} id={styles.backArrow} alt="backArrow"></img>
            </div>
          </button>
          <button onClick={next}>
            <div className={styles.arrow}>
              <img src={arrow} id={styles.arrow} alt="arrow"></img>
            </div>
          </button>
        </div>
      </div>
    </Page>
  );
};
