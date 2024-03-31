import certificate from "../assets/certifcate.svg";
import homeCover from "../assets/homeCover.svg";
import idCard from "../assets/idCard.svg";
import stamp from "../assets/stamp.svg";
import tseLogo from "../assets/tseLogoVector.svg";
import { Button, FAQs, Page, Pathway } from "../components/index.ts";
import styles from "../stylesheets/Candidates.module.css";

export function Candidates() {
  return (
    <Page>
      <h1 className={styles.title}>Become a Certified Interior Designer (CID)</h1>
      <img alt="home cover" src={homeCover} />
      <div className={styles.textDivider2}>
        <div className={styles.heading}>CID Candidate Information</div>
      </div>
      <p>
        Certified Interior Designers (CIDs) must fulfill CCIDC&#39;s education, experience, and exam
        criteria to achieve the designation of &#34;Certified Interior Designer&#34;. CCIDC is
        backed by The Certified Interior Designers Title Act which is governed by California
        Business & Professions Codes Sections 5800-5812. CIDs, recognized as skilled professionals,
        are authorized to develop and submit non-structural construction documents, demonstrating
        expertise in the California Building Code. Upon qualification, CIDs receive a unique
        identification number, a certificate, a stamp for nonstructural drawings, and an ID card,
        symbolizing their unwavering commitment to upholding high professional standards and ethical
        conduct.
      </p>
      <div className={styles.imgs}>
        <div className={styles.imgCaption}>
          <img alt="certificate" className={styles.cert} src={certificate} />
          <p className={styles.caption} id={styles.c1}>
            CCIDC Certificate & Indentification Number
          </p>
        </div>
        <div className={styles.imgCaption}>
          <img alt="stamp" src={stamp} />
          <p className={styles.caption} id={styles.c2}>
            Individual Stamp
          </p>
        </div>
        <div className={styles.imgCaption}>
          <img alt="id card" src={idCard} />
          <p className={styles.caption} id={styles.c3}>
            Identification Card (ID)
          </p>
        </div>
      </div>
      <p>
        As the exclusive authority for approving the CID title, CCIDC establishes rigorous
        eligibility criteria for achieving the title to ensure a high standard of qualification.
        Becoming a CID is the exclusive and legally recognized title for interior designers in
        California. CIDs demonstrate education, experience, and examination expertise tailored to
        California&#39;s requirements, reducing legal risks and instilling heightened confidence in
        clients. Accredited for professionalism, CIDs strictly adhere to the CCIDC Code of Ethics
        and Conduct, emphasizing their unwavering commitment to maintaining the highest industry
        standards.
      </p>
      <div className={styles.centeredContainer}>
        <Button onClick={null}>Apply Now</Button>
      </div>
      <div className={styles.textDivider2}>
        <div className={styles.heading}>Pathways to Certification</div>
      </div>

      <p>
        To be eligible for the IDEX® California and begin the certification process, you must
        provide evidence of completing the required education and/or diversified design work
        experience in interior design or architectural work. You must meet one of the following path
        criteria with proper qualifications listed below:
      </p>

      <div className={styles.pathwaysContainer}>
        <Pathway
          pathName="Path 1"
          qualifications={[
            "< 40 semester core units from an accredited design program",
            "5+ years of diversified design experience",
          ]}
        ></Pathway>
        <Pathway
          pathName="Path 2"
          qualifications={[
            "80+ semester core units & 2 years of design experience",
            "60+ semester core units & 3 years of design experience",
            "40+ semester core units & 4 years of design experience",
            "At least 8 years of diversified design experience, interior design education, or combination that totals 8 years.",
          ]}
        ></Pathway>
        <Pathway
          pathName="Path 3"
          qualifications={[
            "Meet one of the Path 2 education and work experience requirements",
            "Passed one of the qualifying National Interior Design Exams: ARE | CASP | LEED-AP (+) | NCBDC | NCIDQ | NKBA-CKBD (+) ",
          ]}
        ></Pathway>
        <Pathway
          pathName="Path 4"
          qualifications={[
            "Meet one of the Path 2 education and work experience requirements",
            "Passed one of the qualifying National Interior Design Exams: ARE | CASP | LEED-AP (+) | NCBDC | NCIDQ | NKBA-CKBD (+) ",
            "Pass required ICC Courses",
          ]}
        ></Pathway>
      </div>

      <div className={styles.centeredContainer}>
        <Button onClick={null}>Discover Your Ideal Pathway</Button>
      </div>

      <FAQs></FAQs>

      <footer className={styles.footer}>
        <div className={styles.tseLogo}>
          <img src={tseLogo} alt="TSE Logo"></img>
        </div>
        <div className={styles.footerContent}>
          <p>
            Built for free by{" "}
            <a href="https://tse.ucsd.edu/">
              <span>Triton Software Engineering</span>
            </a>
          </p>
        </div>
      </footer>

      <div className="tag"></div>
    </Page>
  );
}
