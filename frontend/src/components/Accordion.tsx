import { FC, ReactNode, useEffect, useRef, useState } from "react";

import selectFAQ from "../assets/selectFAQ.svg";
import unselectFAQ from "../assets/unselectFAQ.svg";
import styles from "../stylesheets/Home.module.css";

export const Accordion: FC<{
  title: string;
  content: ReactNode;
  toggleAll: boolean;
}> = ({ title, content, toggleAll }) => {
  const [expandAllCertificationInfo, setExpandAllCertificationInfo] = useState(false);
  const [toggle, setIsOpen] = useState(toggleAll);
  const [height, setHeight] = useState(toggleAll || toggle ? "auto" : "0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(toggle || toggleAll ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [toggle, toggleAll]);

  const toggleAccordion = () => {
    if (toggleAll) {
      setIsOpen(!toggleAll);
      setExpandAllCertificationInfo(!expandAllCertificationInfo);
    } else {
      setIsOpen(!toggle);
    }
  };

  return (
    <>
      <div className={styles.faqBar} onClick={toggleAccordion}>
        <span style={{ fontWeight: 500 }}>{title}</span>
        <button onClick={toggleAccordion} style={{ marginLeft: "auto" }} type="button">
          <img alt="" src={toggle || toggleAll ? unselectFAQ : selectFAQ} />
        </button>
      </div>
      <div style={{ height }} ref={contentRef}>
        {(toggle || toggleAll) && content}
      </div>
      <hr
        style={{ border: "1px solid #d8d8d8", boxShadow: "20px 2px 4px rgba(0, 0, 0, 0.1)" }}
      ></hr>
    </>
  );
};

export default Accordion;
