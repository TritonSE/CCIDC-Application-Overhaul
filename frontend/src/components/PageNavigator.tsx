import { useState } from "react";

import arrow from "../assets/arrow.svg";
import backArrow from "../assets/backArrow.svg";

import styles from "./PageNavigator.module.css";

export const PageNavigator = () => {
  const [pageNum, setPageNum] = useState(0);

  const next = () => {
    if (pageNum < 5) {
      setPageNum(pageNum + 1);
    }
  };

  const back = () => {
    if (pageNum === 1) {
      // Prescreening Questions
    } else {
      setPageNum(pageNum - 1);
    }
  };
  return (
    <div className={styles.pageNavigator}>
      <button className={styles.pageButton} onClick={back}>
        <img src={backArrow} alt="left arrow" id={styles.backArrow}></img>
      </button>
      <button className={styles.pageButton} onClick={next}>
        <img src={arrow} alt="right arrow" id={styles.arrow}></img>
      </button>
    </div>
  );
};
