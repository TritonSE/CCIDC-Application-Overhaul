import { useState } from "react";
import styles from "./PageNavigator.module.css";

import arrow from "../assets/arrow.svg";
import toggledArrow from "../assets/search.svg";
import backArrow from "../assets/backArrow.svg";
import toggledBackArrow from "../assets/toggledBackArrow.svg";

export const PageNavigator = () => {
  const [pageNum, setPageNum] = useState(0);

  const next = () => {
    if (pageNum < 5) {
      setPageNum(pageNum + 1);
    }
  };

  const back = () => {
    if (pageNum == 1) {
      // Prescreening Questions
    } else {
      setPageNum(pageNum - 1);
    }
  };
  return (
    <div className={styles.pageNavigator}>
      <button onClick={back}>
        <img src={backArrow} id={styles.backArrow}></img>
      </button>
      <button onClick={next}>
        <img src={arrow} id={styles.arrow}></img>
      </button>
    </div>
  );
};
