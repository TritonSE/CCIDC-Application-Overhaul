import { FC, ReactNode, useEffect, useRef, useState } from "react";

import clickedFAQ from "../assets/clickedFAQ.svg";
import moreInfo from "../assets/moreInfoButton.svg";
import styles from "../stylesheets/Home.module.css";

export const Accordion: FC<{ title: string; content: ReactNode }> = ({ title, content }) => {
  const [toggle, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(toggle ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [toggle]);

  const toggleAccordion = () => {
    setIsOpen(!toggle);
  };

  return (
    <>
      <div className={styles.faqBar} onClick={toggleAccordion}>
        <button onClick={toggleAccordion} className={styles.moreInfo} type="button">
          <img
            className={toggle ? styles.active : "/clickedFAQ.svg"}
            alt=""
            src={toggle ? clickedFAQ : moreInfo}
          />
        </button>
        <p className={styles.item}>{title}</p>
      </div>
      <div
        className={toggle ? "collapse" : "close"}
        style={{ height }}
        ref={contentRef}
        aria-hidden={!toggle}
      >
        {toggle && content}
      </div>
      <hr style={{ border: "1px solid #d8d8d8" }}></hr>
    </>
  );
};

export default Accordion;
