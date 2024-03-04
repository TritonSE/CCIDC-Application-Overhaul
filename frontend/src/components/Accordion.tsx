import { FC, ReactNode, useEffect, useRef, useState } from "react";

import selectFAQ from "../assets/selectFAQ.svg";
import unselectFAQ from "../assets/unselectFAQ.svg";

import styles from "./Accordion.module.css";

export type AccordionProps = {
  question: string;
  children?: ReactNode;
  toggleAll: boolean;
};

export const Accordion: FC<AccordionProps> = ({ question, children, toggleAll }) => {
  const [toggle, setIsOpen] = useState(toggleAll);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(toggleAll);
  }, [toggleAll]);

  const toggleAccordion = () => {
    setIsOpen(!toggle);
  };

  return (
    <>
      <div className={styles.faqBar}>
        <span className={styles.question}>{question}</span>
        <button onClick={toggleAccordion} className={styles.expandButton}>
          <img alt={toggle ? "-" : "+"} src={toggle ? unselectFAQ : selectFAQ} />
        </button>
      </div>
      <div ref={contentRef}>{toggle && children}</div>
      <hr className={styles.lineShadow}></hr>
    </>
  );
};

export default Accordion;
