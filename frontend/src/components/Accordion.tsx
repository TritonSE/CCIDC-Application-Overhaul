import { FC, ReactNode, useEffect, useRef, useState } from "react";

import selectFAQ from "../assets/selectFAQ.svg";
import unselectFAQ from "../assets/unselectFAQ.svg";
import styles from "./FAQ.module.css";

export type AccordionProps = {
  title: string;
  children?: ReactNode;
  toggleAll: boolean;
};

export const Accordion: FC<AccordionProps> = ({ title, children, toggleAll }) => {
  const [toggle, setIsOpen] = useState(toggleAll);
  const [height, setHeight] = useState(toggleAll || toggle ? "auto" : "0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(toggle ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [toggle, toggleAll]);

  useEffect(() => {
    setIsOpen(toggleAll);
  }, [toggleAll]);

  const toggleAccordion = () => {
    setIsOpen(!toggle);
  };

  return (
    <>
      <div className={styles.faqBar}>
        <span style={{ fontWeight: 600, marginTop: 10 }}>{title}</span>
        <button onClick={toggleAccordion} style={{ marginLeft: "auto" }}>
          <img alt="" src={toggle ? unselectFAQ : selectFAQ} />
        </button>
      </div>
      <div style={{ height }} ref={contentRef}>
        {toggle && children}
      </div>
      <hr
        style={{ border: "1px solid #d8d8d8", boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.15)" }}
      ></hr>
    </>
  );
};

export default Accordion;
