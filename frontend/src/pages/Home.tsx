import { Page } from "../components/Page";
import styles from "../stylesheets/Home.module.css";

export function Home() {
  return (
    <Page>
      <h1 className={styles.title}>Become a Certified Interior Designer</h1>
      <img alt="" src="/home_cover.svg" />
      <div className={styles.textDivider}>
        <h2 className={styles.heading}>Candidate Information</h2>
      </div>
      <ul className={styles.list}>
        <li>
          <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=5800.&lawCode=BPC">
            California Business & Professions Codes Sections 5800 - 5812
          </a>
        </li>
        <li>
          <p className={styles.item}>
            Under the Certified Interior Designers Title Act law, Certified Interior Designers are
            qualified by the California Council for Interior Design Certification (CCIDC) upon
            evidence of a combination of interior design education and/or experience and passage of
            the <span className={styles.red}>IDEX California®</span> examination.
          </p>
        </li>
        <li>
          <p className={styles.item}>
            <strong>Only</strong> CCIDC can determine eligibility to be a Certified Interior
            Designer in the State of California. Designers who meet the education, experience and
            examination criteria of the CCIDC Board are allowed to use the “
            <span className={styles.red}>Certified Interior Designer</span>” title and “
            <span className={styles.red}>CID</span>” appellation and are recognized in the State of
            California.
          </p>
        </li>
        <li>
          <p className={styles.item}>
            Upon qualification, the “Certified Interior Designer” will be identified by an
            individual number which will appear on a certificate, a stamp with which to identify
            interior design nonstructural and non-seismic drawings and documents, and an
            identification card.
          </p>
        </li>
        <li>
          <p className={styles.item}>
            Certified Interior Designers, as mandated by the State of California, have met high
            standards of qualification and have agreed to uphold a strict code of ethics and
            conduct.
          </p>
        </li>
        <li>
          <p className={styles.item}>
            Certification in California is a Title Act, it is not a license or registration
            (Practice Act). The Certified Interior Designer’s Title Act is the only thing recognized
            by the state.
          </p>
        </li>
      </ul>
      <p className={styles.message}>
        <strong className={styles.red}>UPDATE: </strong>
        As of January 1, 2023, Meazure Learning Live Remote Proctoring (LRP) will no longer accept
        expired IDs. We will require all test takers without an accommodation to present a current,
        unexpired ID for identity verification. This LRP policy now aligns with Meazure Learning’s
        Test Center policy.
      </p>
      <button className={styles.apply} type="button">
        Apply Now
      </button>
      <div className={styles.textDivider2}>
        <div className={styles.heading}>Pathways to Certification</div>
      </div>

      <p>
        To be eligible for the
        <span className={styles.red}> IDEX® California</span> and begin the certification process,
        a candidate must provide evidence of completing the required education and/or diversified
        design work experience in interior design or architectural work. Candidates must meet the
        minimum education/experience requirements to apply. Each path and their unique
        qualifications are listed below.
      </p>

      <div className={styles.pathwaysContainer}>
        <div className={styles.pathwayRows}>
          <div className={styles.pathwayContainer}>
            <h2 className={styles.pathName}>Path 1</h2>
            <div className={styles.pathwayText}>
              <span className={styles.red}>Qualifications:</span>
              {" >"} 40 Core Units or 5 years of Diversified Design Experience.
            </div>
            <button className={styles.learnMoreBtn} type="button">
              Learn More
            </button>
          </div>
          <div className={styles.pathwayContainer}>
            <h2 className={styles.pathName}>Path 2</h2>
            <div className={styles.pathwayText}>
              <span className={styles.red}>Qualifications: </span>
              Meet education and/or work experience requirements at the time of application.
            </div>
            <button className={styles.learnMoreBtn} type="button">
              Learn More
            </button>
          </div>
        </div>
        <div className={styles.pathwayRows}>
          <div className={styles.pathwayContainer}>
            <h2 className={styles.pathName}>Path 3</h2>
            <div className={styles.pathwayText}>
              <span className={styles.red}>Qualifications:</span> Meet education and/or work
              experience requirements and have successfully passed one of the qualifying National
              Interior Design Exams at the time of application.
            </div>
            <button className={styles.learnMoreBtn} type="button">
              Learn More
            </button>
          </div>
          <div className={styles.pathwayContainer}>
            <h2 className={styles.pathName}>Path 4</h2>
            <div className={styles.pathwayText}>
              <span className={styles.red}>Qualifications:</span> Mainly practice commercial design,
              meet education and/or work experience requirements, and passed one of the qualifying
              National Interior Design Exams at the time of application.
            </div>
            <button className={styles.learnMoreBtn} type="button">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <h1 className={styles.title}>FAQ’s</h1>

      <div className={styles.FaqsContainer}>
        <div className={styles.faqBar}>
          <button className={styles.moreInfo} type="button">
            <img alt="" src="/moreInfoButton.svg" />
          </button>
          <p className={styles.item}>Certification Information & Overview</p>
        </div>
        <div className={styles.faqBar}>
          <button className={styles.moreInfo} type="button">
            <img alt="" src="/moreInfoButton.svg" />
          </button>
          <p className={styles.item}>Certification Qualification & Paths</p>
        </div>
        <div className={styles.faqBar}>
          <button className={styles.moreInfo} type="button">
            <img alt="" src="/moreInfoButton.svg" />
          </button>
          <p className={styles.item}>Becoming Certified</p>
        </div>
        <div className={styles.faqBar}>
          <button className={styles.moreInfo} type="button">
            <img alt="" src="/moreInfoButton.svg" />
          </button>
          <p className={styles.item}>What You Need to Apply</p>
        </div>
      </div>
    </Page>
  );
}

export default Home;
