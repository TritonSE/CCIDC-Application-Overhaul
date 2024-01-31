import { Page } from "../components/Page";
import styles from "../stylesheets/Home.module.css";

export function Home() {
  return (
    <Page>
      <h1 className={styles.title}>Become a Certified Interior Designer</h1>
      <img alt="" src="/home_cover.svg" />
      <div className={styles.textDivider}>
        <h2 className={styles.heading}>CID Candidate Information</h2>
      </div>
      <ul className={styles.list}>
        <li>
          <p className={styles.item}>
            Under the Certified Interior Designers Title Act law, Certified Interior Designers are
            qualified by the California Council for Interior Design Certification (CCIDC) upon
            evidence of a combination of interior design education, experience <strong>AND</strong>{" "}
            passage of the IDEX® California examination.
          </p>
        </li>
        <li>
          <p className={styles.item}>
            <strong>ONLY</strong> CCIDC can determine eligibility to be a Certified Interior
            Designer in California. Designers who meet the criteria of the CCIDC are allowed to use
            the “Certified Interior Designer” title and “CID” appellation and are recognized in the
            State of California.
          </p>
        </li>
        <li>
          <p className={styles.item}>
            Upon qualification, the Certified Interior Designer will be identified by an individual
            number on a certificate, a stamp to identify interior design nonstructural and
            non-seismic drawings and documents, and an identification card (ID).
          </p>
        </li>
        <li>
          <p className={styles.item}>
            Certification in California is a Title Act, not a license or registration (Practice
            Act). The Certified Interior Designer’s Title Act is the only thing the state
            recognizes.
          </p>
        </li>
      </ul>
      <button className={styles.apply} type="button">
        Apply Now
      </button>
      <div className={styles.textDivider2}>
        <div className={styles.heading}>Pathways to Certification</div>
      </div>

      <p>
        To become a CID, you must:
        <ul className={styles.list}>
          <li>
            Have a minimum of 6 years of combined accredited interior design education and
            experience <strong>OR</strong> a minimum of 8 years of combined interior design
            education and experience.
          </li>
          <li>
            Provide evidence of competing the required education and/or diversified design work
            experience in interior design, architecture, or building design.
          </li>
          <li>Pass the IDEX® California Exam.</li>
        </ul>
        There are four paths to qualification, candidates must meet one of the following path
        criteria and each is listed with proper qualifications below:
      </p>

      <div className={styles.pathwaysContainer}>
        <div className={styles.pathwayRows}>
          <div className={styles.pathwayContainer}>
            <h2 className={styles.pathName}>Path 1</h2>
            <div className={styles.pathwayText}>
              <span className={styles.red}>Qualifications:</span>
              Candidates who meet the education requirement, and have <strong>NOT</strong> met the
              work experience requirement, may opt first to apply to take the IDEX® California
              Exam. Candidates must meet one of these qualifications to sit for the IDEX®
              California Exam:
              <ol className={styles.olist}>
                <li>
                  At least 40 semester core units from an accredited design program (60 quarter
                  units)
                </li>
                <li>5-8 years of diversified design experience</li>
              </ol>
            </div>
          </div>
          <div className={styles.pathwayContainer}>
            <h2 className={styles.pathName}>Path 2</h2>
            <div className={styles.pathwayText}>
              <span className={styles.red}>Qualifications: </span>
              Candidates who meet both the education <strong>AND</strong> work experience
              requirements will be eligible to complete the certification process upon completing
              the IDEX® California Exam if they meet one of these requirements:
              <ol className={styles.olist}>
                <li>
                  80+ semester core units from an accredited design program (120+ quarter units)
                </li>
                <li>
                  60 - 79 semester core units from an accredited design program (90+ quarter units)
                </li>
                <li>
                  40 - 59 semester core units from an accredited design program (60+ quarter units)
                </li>
                <li>
                  At least 8 years of diversified design experience, interior design education, or
                  combination that totals 8 years.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className={styles.pathwayRows}>
          <div className={styles.pathwayContainer}>
            <h2 className={styles.pathName}>Path 3</h2>
            <div className={styles.pathwayText}>
              <span className={styles.red}>Qualifications:</span> Candidates who meet the education,
              work experience requirements, <strong>AND</strong> have successfully passed one of the
              qualifying National Interior Design Exams at the time of application, will be eligible
              to complete the certification process upon completing the IDEX® California Exam.
              Qualifying exams include:
              <ul className={styles.list}>
                <li>ARE, CASp, LEED | Minimum AP, NCBDC, NCIDQ, NKBA | Minimum CKBD</li>
              </ul>
              <br />
              RIDQC Exam Candidates, please apply under <strong>Path 1 or 2</strong>
            </div>
          </div>
          <div className={styles.pathwayContainer}>
            <h2 className={styles.pathName}>Path 4</h2>
            <div className={styles.pathwayText}>
              <span className={styles.red}>Qualifications:</span> Candidates who mainly practice
              commercial design meet the education, work experience requirements
              <strong>AND</strong> have successfully passed 1 of the qualifying National Interior
              Design Exams at the time of application will be eligible to complete the certification
              process with a commercial designation upon successful completion of the IDEX®
              California Exam and passing required ICC Courses.
              <br />
              Qualifying exams include:
              <ul className={styles.list}>
                <li>ARE, CASp, LEED | Minimum AP, NCBDC, NCIDQ, NKBA | Minimum CKBD</li>
              </ul>
              <br />
              RIDQC Exam Candidates, please apply under <strong>Path 1 or 2</strong>
            </div>
          </div>
        </div>
      </div>

      <h1 className={styles.title}>FAQ’s</h1>

      <div className={styles.FaqsContainer}>
        <div className={styles.line} />
        <div className={styles.faqBar}>
          <button className={styles.moreInfo} type="button">
            <img alt="" src="/moreInfoButton.svg" />
          </button>
          <p className={styles.item}>Certification Information & Overview</p>
        </div>
        <div className={styles.line} />

        <div className={styles.faqBar}>
          <button className={styles.moreInfo} type="button">
            <img alt="" src="/moreInfoButton.svg" />
          </button>
          <p className={styles.item}>Certification Qualification & Paths</p>
        </div>
        <div className={styles.line} />

        <div className={styles.faqBar}>
          <button className={styles.moreInfo} type="button">
            <img alt="" src="/moreInfoButton.svg" />
          </button>
          <p className={styles.item}>Becoming Certified</p>
        </div>
        <div className={styles.line} />

        <div className={styles.faqBar}>
          <button className={styles.moreInfo} type="button">
            <img alt="" src="/moreInfoButton.svg" />
          </button>
          <p className={styles.item}>What You Need to Apply</p>
        </div>
        <div className={styles.line} />
      </div>
    </Page>
  );
}
