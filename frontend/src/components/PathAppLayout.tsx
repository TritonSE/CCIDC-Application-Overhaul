import styles from "./PathAppLayout.module.css";
import { Button, PathwayTimeline } from "./index.ts";
import arrow from "../assets/arrow.svg";
import toggledArrow from "../assets/search.svg";
import backArrow from "../assets/backArrow.svg";
import toggledBackArrow from "../assets/toggledBackArrow.svg";

import { useState } from "react";

export type PathAppLayoutProps = {
  pathName: string;
  children: React.ReactNode;
};

export const PathAppLayout: React.FC<PathAppLayoutProps> = ({ pathName, children }) => {
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

  return (
    <div className={styles.pathwayApplicationBase}>
      <div className={styles.applicationContainer}>
        <h1 className={styles.title}>{pathName}</h1>

        <div className={styles.pathContent}>{children}</div>
        <div className={styles.centeredContainer}>
          <Button onClick={null}>Retake Prescreening Questions</Button>
        </div>

        <div className={styles.note}>
          <p className={styles.red}>
            {" "}
            If you would like to be sorted into a different pathway, please click above to retake
            the
            <br></br>
            sorting questionnaire. For further inquiries, please reach out to ccidc@ccidc.org
          </p>
        </div>
      </div>

      <PathwayTimeline path={1} progress={pageNum}></PathwayTimeline>
      <div className={styles.pageNavigator}>
        <button onClick={back}>
          <div className={styles.backArrow}>
            <img src={backArrow} id={styles.backArrow}></img>
          </div>
        </button>
        <button onClick={next}>
          <div className={styles.arrow}>
            <img src={arrow} id={styles.arrow}></img>
          </div>
        </button>
      </div>
    </div>
  );
};
