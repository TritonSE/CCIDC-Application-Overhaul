import plusIcon from "../assets/plusIcon.svg";
import minusIcon from "../assets/minusIcon.svg";
import { Accordion } from "../components/index.ts";
import styles from "../stylesheets/Home.module.css";

import { useState } from "react";

export function FAQs() {
  const [expandAllCertificationInfo, setExpandAllCertificationInfo] = useState(false);
  const [expandAllPathwaysInfo, setExpandAllPathwaysInfo] = useState(false);

  const toggleExpandAllCertificationInfo = () => {
    setExpandAllCertificationInfo(!expandAllCertificationInfo);
  };
  const toggleExpandAllPathwaysInfo = () => {
    setExpandAllPathwaysInfo(!expandAllPathwaysInfo);
  };

  return (
    <>
      <div className={styles.textDivider2}>
        <div className={styles.heading}>FAQ's</div>
      </div>

      <div className={styles.FaqsContainer}>
        <div className={styles.infoTitle}>
          <h2 className={styles.red}>Certification Information</h2>
          <button className={styles.expand} onClick={toggleExpandAllCertificationInfo}>
            <span style={{ marginLeft: 20 }}>
              {expandAllCertificationInfo ? "Collapse" : "Expand All"}
            </span>
            <div className={styles.expandAllPlus}>
              <img
                src={expandAllCertificationInfo ? minusIcon : plusIcon}
                style={{ height: "14px", width: "14px" }}
              ></img>
            </div>
            {expandAllCertificationInfo}
          </button>
        </div>
        <hr
          style={{ border: "1px solid #d8d8d8", boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.15)" }}
        ></hr>
        <Accordion title="Why should I become a CID?" toggleAll={expandAllCertificationInfo}>
          <p>
            Certified Interior Designer (CID) is the exclusive legally recognized title for interior
            designers in California. CIDs demonstrate their education, experience, and examination
            expertise in California, reducing legal risks and boosting client confidence. They are
            accredited for professionalism, mandated to adhere to the{" "}
            <a href="https://ccidc.org/code-of-ethics/CCIDC" style={{ textDecoration: "none" }}>
              <span className={styles.lightBlue}>Code of Ethics and Conduct.</span>
            </a>
          </p>
        </Accordion>
        <Accordion
          title="What are the requirements to become a CID?"
          toggleAll={expandAllCertificationInfo}
        >
          <p>
            To become a Certified Interior Designer (CID) in California, passing the IDEX@ Exam
            tailored to the California Building COde (CBC) or Title 24 is mandatory. Applicants
            should check the different pathways to ensure they meet CID requirements.
          </p>
          <ol className={styles.olist} id={styles.answerList}>
            <li>Complete Online Application</li>
            <li>Sign Code of Ethics</li>
            <li>Provide Proof of Education</li>
            <li>Provide Proof of Diversified interior design experience</li>
            <li>Provide a Photocopy of driver's license</li>
            <li>
              Pay with credit card or check to CCIDC for the: one-time-non-refundable application
              and processing fee. IDEX® California Exam fee, and testing center fee.
            </li>
          </ol>
        </Accordion>
        <Accordion
          title="What happens after I submit my application packet?"
          toggleAll={expandAllCertificationInfo}
        >
          <p>
            The verification process after you submit your applicationtakes time, please check to
            see if you received an email from CCIDC or{" "}
            <a href="https://ccidc.org/wp-login.php">
              <span className={styles.lightBlue}>login</span>
            </a>{" "}
            to your portal for status updates after you submitted your application
          </p>
        </Accordion>
        <Accordion title="Who can refer themselves as CID" toggleAll={expandAllCertificationInfo}>
          {" "}
          <p>
            Only individuals who have fulfilled education, experience, and exam requirements and
            received certificaiton from CCIDC can use the title &#34;Certified Interior
            Designer&#34; in California. The title is legally protected, and it is deemed an
            &#34;unfair buisness practice&#34; under B&P Code Section 17200 for anyone to claim this
            designation without complying with{" "}
            <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=5800.&lawCode=BPC">
              <span className={styles.lightBlue}>Section 5800.</span>
            </a>
          </p>
        </Accordion>
        <Accordion title="When do I become CID" toggleAll={expandAllCertificationInfo}>
          <p>Candidates are certified once the following have been completed:</p>
          <ol style={{ marginLeft: 20, lineHeight: 1.5 }}>
            <li>Bi-annual certification fees have been paid</li>
            <li>Certifcation number has been assigned</li>
            <li>
              Upon completion, CIDs will be mailed:
              <ol type="a" style={{ marginLeft: 20 }}>
                <li>Cid information Binder</li>
                <li>CID Certificate</li>
                <li>Verification Letter with CID #</li>
                <li>CID ID-Card</li>
                <li>Rubber or Degital Stamp (Only if order, approximately 8-12 weeks later)</li>
              </ol>
            </li>
          </ol>
        </Accordion>
        <Accordion
          title="How much does it cost to be a CID?"
          toggleAll={expandAllCertificationInfo}
        >
          {" "}
          <p>
            Certified Interior Designer (CID) is the exclusive legally recognizNOTE: There will be a
            $50.00 charge for returned checks and for $25.00 Returned Credit Card transaction fees.
            Total Fees with application (Includes Application Fee + IDEX Exam Fee + Testing Center
            Fee)*:<br></br>Path 1 & Path 2: $700 Total* <br></br>Path 3 & Path 4: $600 Total*{" "}
            <br></br>Total Bi-annual Certification Fees<br></br> Due after passing exam and
            compliance approval: <br></br> All candidates $275-300ed title for interior designers in
            California. CIDs demonstrate their education, experience, and examination expertise in
            California, reducing legal risks and boosting client confidence. They are accredited for
            professionalism, mandated to adhere to the{" "}
            <a href="https://ccidc.org/code-of-ethics/CCIDC" style={{ textDecoration: "none" }}>
              <span className={styles.lightBlue}>Code of Ethics and Conduct.</span>
            </a>
          </p>
        </Accordion>
        <Accordion
          title="How will I be identified as a CID?"
          toggleAll={expandAllCertificationInfo}
        >
          <ol type="a" style={{ marginLeft: 35, lineHeight: 1.5 }}>
            <li>
              Each CID should affix a stamp or wet signature to all drawings, speicifations, or
              documents prepared for submission. All documents should be presented as interior
              design documents. <span style={{ fontWeight: "bold" }}>NOT </span> architectural or
              egineering ones.
            </li>
          </ol>
        </Accordion>
        <Accordion
          title="How do I sign up for the next IDEX Exam"
          toggleAll={expandAllCertificationInfo}
        >
          <p>
            The IDEX® California is a certification exam designed for Calfornia, focusing on the
            California Building Code (CBC), Title 24, ethics, buisness practices, and design
            standards. The examination evaluates designers' competence in various areas, including
            Commercial and Residential California Codes and Regulations, Design Synthesis,
            Schematics, Programming, Space Planning, Design Development, Working Drawings,
            Construction documents, Furniture and finish specifications, Lighting layout and
            specifications, Contract documents, Contract administration, Buisness law, and Ethics.
            Please refer to this website for more information about the exam and to{" "}
            <a href="https://www.idexprep.com/exam.html">
              <span className={styles.lightBlue}>sign up</span>.
            </a>
          </p>
        </Accordion>
        <div className={styles.infoTitle} id={styles.pathwaysFAQ}>
          <h2 className={styles.red}>Pathways Information</h2>
          <button className={styles.expand} onClick={toggleExpandAllPathwaysInfo}>
            <span style={{ marginLeft: 20 }}>
              {expandAllPathwaysInfo ? "Collapse" : "Expand All"}
            </span>
            <div className={styles.expandAllPlus}>
              <img
                src={expandAllPathwaysInfo ? minusIcon : plusIcon}
                style={{ height: "14px", width: "14px" }}
              ></img>
            </div>
            {expandAllCertificationInfo}
          </button>
        </div>
        <hr
          style={{
            border: "1px solid #d8d8d8",
            boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
        ></hr>

        <Accordion
          title="How do I know which pathway is right for me?"
          toggleAll={expandAllPathwaysInfo}
        >
          <p>
            Once you login you will be directed to the Pre-Screening Questionnaire. This will help
            you assess what the right pathway is for you. You can retake the questionnaire as many
            times as you want to determine the right pathway for you.
          </p>
        </Accordion>
        <Accordion
          title="What is an accredited design program or educational institution?"
          toggleAll={expandAllPathwaysInfo}
        >
          <p>
            Requirements must be from a US Department of Education-accredited institution.
            Accreditation by CIDA or FIDER is not mandatory.
          </p>
        </Accordion>
        <Accordion
          title="What are core units & how are they calculated?"
          toggleAll={expandAllPathwaysInfo}
        >
          {" "}
          <p>
            The total combined coursework units, excluding general education courses, must cover
            various categories such as Interior Design, Building Design, Interior Decoration,
            Drafting History Design, Architectural History, Architecture, Graphic Design,
            Construction Documents, Art History, Building Codes, Green Building Practices,
            Computer-Aided Design and Drafting (CADD), and Business Practices related to the
            Practice of Design. Core units listed on the website are in terms of semester credits.
            Please divide quarter units by 1.5 to convert.
          </p>
        </Accordion>
        <Accordion
          title="I do not have a degree, will I qualify?"
          toggleAll={expandAllPathwaysInfo}
        >
          <p>Total core units determine eligibility, degree completion is NOT required. </p>
        </Accordion>
        <Accordion title="How much education do I need?" toggleAll={expandAllPathwaysInfo}>
          <p>
            The minimum educational requirement is 40 semester/60 quarter core units from an
            accredited design program. Certification completion education requirements vary by path,
            and there is also an option for experience-only candidates to apply.
          </p>
        </Accordion>
        <Accordion
          title="What is diversified design experience & how is is submitted and calculated?"
          toggleAll={expandAllPathwaysInfo}
        >
          {" "}
          <p>
            Diversified design experience includes the preparation of complex nonstructural or
            non-seismic plans, providing instruction for their preparation, requiring the skills of
            a licensed contractor for implementation. It encompasses programming, planning,
            designing, documenting construction, and the installation of nonstructural or
            non-seismic elements, finishes, and furnishings, all with the aim of protecting and
            enhancing the health, safety, and welfare of the public. Based on full-time work 36
            hours or more per week, 52 weeks per year.
            <br></br>
            <br></br>
            The full-time diversified design experience requirements are calculated by:<br></br>1
            Year = 1,872 Hours+<br></br>2 Years = 3,744 Hours+<br></br>3 Years = 5,616 Hours+
            <br></br>4 Years = 7,488 Hours+<br></br>5 Years = 9,360 Hours+<br></br>8 Years = 14,976
            Hours+<br></br>
            <br></br>
            To submit proof of diversified design experience:
          </p>
          <ol className={styles.olist}>
            <li>
              If <strong>self-employed</strong>, complete the Employment Verification Form,
              including federal tax returns or a verified letter from a CPA or Attorney for the
              claimed experience duration. Resumés are not accepted for self-employment.
            </li>
            <li>
              If <strong>not self-employed</strong>complete the Employment Verification Form signed
              by both the candidate and employer, including a separate form for all
              experience/positions under consideration.
            </li>
          </ol>
        </Accordion>
        <Accordion title="Can international candidates apply?" toggleAll={expandAllPathwaysInfo}>
          <ol type="a" style={{ marginLeft: 45, lineHeight: 1.5 }}>
            <li>
              All candidates who meet the qualifications are encouraged to become certified, as long
              as they provide
            </li>
            <ol type="i" style={{ marginLeft: 25 }}>
              <li>International Education from Accredited Source</li>
              <li>Accreditation by USDE International Equivalent accrediting agency</li>
              <li>Provide translated/verified transcripts</li>
              <li>International experience considered</li>
              <li>Provide verifiable proof of diversified design experience</li>
            </ol>
          </ol>
        </Accordion>
      </div>
    </>
  );
}

export default FAQs;
