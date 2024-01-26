// import FAQs from "../components/FAQs";
import { Page } from "../components/Page";
// import Pathways from "../components/Pathways";
// import PathwaysTitle from "../components/PathwaysTitle";
import styles from "../stylesheets/Home.module.css";

function Home() {
  return (
    <>
      <Page>
        <main>
          <div className={styles.PathwaysTitle}>
            <div className={styles.line149}></div>
            <div className={styles.PathwaysToCertification}>Pathways to Certification</div>
            <div className={styles.line150}></div>
          </div>

          <div className={styles.descriptionContainer}>
            <div className={styles.eligibilityDescription}>
              To be eligible for the
              <span className={styles.qualificationsWord}> IDEX® California</span> and begin the
              certification process, a candidate must provide evidence of completing the required
              education and/or diversified design work experience in interior design or
              architectural work. Candidates must meet the minimum education/experience requirements
              to apply. Each path and their unique qualifications are listed below.
            </div>
            {/* <span id={styles.Transition}>To be eligible for the </span>
            <span id={styles.IDEXCalifornia}>IDEX® California</span>
            <span id={styles.text}>
              {" "}
              and begin the certification process, a candidate must provide evidence of completing
              the required education and/or diversified design work experience in interior design or
              architectural work. Candidates must meet the minimum education/experience requirements
              to apply. Each path and their unique qualifications are listed below.
            </span> */}
          </div>

          <div className={styles.pathways}>
            <div className={styles.pathway1container}>
              <div className={styles.pathway1}>Path 1</div>
              <div className={styles.pathway1Text}>
                <span className={styles.qualificationsWord}>Qualifications:</span>
                {" >"} 40 Core Units or 5 years of Diversified Design Experience.
              </div>
              <div className={styles.learnMoreBtn}>
                <div className={styles.learnMoreTxt}>Learn More</div>
              </div>
              <div className={styles.learnMore}></div>
            </div>
            <div className={styles.pathway2container}>
              <div className={styles.pathway2}>Path 2</div>
              <div className={styles.pathway2Text}>
                <span className={styles.qualificationsWord}>Qualifications:</span>
                Meet education and/or work experience requirements at the time of application.
              </div>
              <div className={styles.learnMoreBtn}>
                <div className={styles.learnMoreTxt}>Learn More</div>
              </div>
            </div>
            <div className={styles.pathway3container}>
              <div className={styles.pathway3}>Path 3</div>
              <div className={styles.pathway3Text}>
                <span className={styles.qualificationsWord}>Qualifications:</span> Meet education
                and/or work experience requirements and have successfully passed one of the
                qualifying National Interior Design Exams at the time of application.
              </div>
              <div className={styles.learnMoreBtn}>
                <div className={styles.learnMoreTxt}>Learn More</div>
              </div>
            </div>
            <div className={styles.pathway4container}>
              <div className={styles.pathway4}>Path 4</div>
              <div className={styles.pathway4Text}>
                <span className={styles.qualificationsWord}>Qualifications:</span> Mainly practice
                commercial design, meet education and/or work experience requirements, and passed
                one of the qualifying National Interior Design Exams at the time of application.
              </div>
              <div className={styles.learnMoreBtn}>
                <div className={styles.learnMoreTxt}>Learn More</div>
              </div>
            </div>
          </div>

          <div className={styles.FaqS}>
            <div className={styles.FaqStitle}>FAQ’s</div>
          </div>

          <div className={styles.FaqContainer}>
            <div className={styles.faq1Bar}>
              <div className={styles.moreInfo}>
                <div className={styles.Vector15}></div>
                <div className={styles.Vector16}></div>
              </div>
              <div className={styles.faq1}>Certification Information & Overview</div>
            </div>
            <div className={styles.faq2Bar}>
              <div className={styles.moreInfo}>
                <div className={styles.Vector15}></div>
                <div className={styles.Vector16}></div>
              </div>
              <div className={styles.faq2}>Certification Qualification & Paths</div>
            </div>
            <div className={styles.faq3Bar}>
              <div className={styles.moreInfo}>
                <div className={styles.Vector15}></div>
                <div className={styles.Vector16}></div>
              </div>
              <div className={styles.faq3}>Becoming Certified</div>
            </div>
            <div className={styles.faq4Bar}>
              <div className={styles.moreInfo}>
                <div className={styles.Vector15}></div>
                <div className={styles.Vector16}></div>
              </div>
              <div className={styles.faq4}>What You Need to Apply</div>
            </div>
          </div>
        </main>
      </Page>
    </>
  );
}

export default Home;
