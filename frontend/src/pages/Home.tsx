import { Page } from "../components/Page";
import Accordion from "../components/Accordion";
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

        <Accordion
          title="Information about the Pathways to Certification"
          content={
            <>
              <p>
                <span style={{ fontWeight: "bold" }}>1. Why should I become a CID</span>
                <br></br>
                Certified Interior Designer (CID) is the exclusive legally recognized title for
                interior designers in California. CIDs demonstrate their education, experience, and
                examination expertise in California, reducing legal risks and boosting client
                confidence. They are accredited for professionalism, mandated to adhere to the CCIDC
                Code of Ethics and Conduct.
                <br></br>
                <span style={{ fontWeight: "bold" }}>
                  2. What are the requirements to become a CID?
                </span>
                <br></br>
                To become a Certified Interior Designer (CID) in California, passing the IDEX@ Exam
                tailored to the California Building COde (CBC) or Title 24 is mandatory. Applicants
                should check the different pathways to ensure they meet CID requirements.
                <br></br>
                <span style={{ fontWeight: "bold" }}>
                  3. What happens after I submit my application packet?
                </span>
                <br></br>
                The verification process after you submit your applicationtakes time, please check
                to see if you received an email from CCIDC or login to your portal for status
                updates after you submitted your application
                <br></br>
                <span style={{ fontWeight: "bold" }}>4. Who can refer themselves as CID</span>
                <br></br>
                Only individuals who have fulfilled education, experience, and exam requirements and
                received certificaiton from CCIDC can use the title "Certified Interior Designer" in
                California. The title is legally protected, and it is deemed an "unfair buisness
                practice" under B&P Code Section 17200 for anyone to claim this designation without
                complying with Section 5800.
                <br></br>
                <span style={{ fontWeight: "bold" }}>5. When do I become CID</span>
                <br></br>
                Candidates are certified once the following have been completed:
                <ol style={{ marginLeft: 20 }}>
                  <li>Bi-annual certification fees have been paid</li>
                  <li>Certifcation number has been assigned</li>
                  <li>
                    Upon completion, CIDs will be mailed:
                    <ol type="a" style={{ marginLeft: 20 }}>
                      <li>Cid information Binder</li>
                      <li>CID Certificate</li>
                      <li>Verification Letter with CID #</li>
                      <li>CID ID-Card</li>
                      <li>
                        Rubber or Degital Stamp (Only if order, approximately 8-12 weeks later)
                      </li>
                    </ol>
                  </li>
                </ol>
                <span style={{ fontWeight: "bold" }}>6. How much does it cost to be a CID?</span>
                <br></br>
                <ol type="a" style={{ marginLeft: 35 }}>
                  <li>
                    NOTE:{" "}
                    <span className={styles.red}>
                      There will be a $50.00 charge for returned checks and for $25.00 Returned
                      Credit Card transaction fees.
                    </span>
                  </li>
                  <li>
                    Total Fees with application(Includes Application fee + IDEX Exam Fee + Testing
                    Center Fee)*:
                    <ol type="i" style={{ marginLeft: 25 }}>
                      <li>Path 1 & Path 2: $700 Total*</li>
                      <li>Path 3 & Path 4: $600 Total*</li>
                    </ol>
                  </li>
                  <li>Total Bi-annual Certification Fees</li>
                  <ol type="i" style={{ marginLeft: 25 }}>
                    <li>Due after passing exam and compliance approval:</li>
                    <li>All candidates $275-300</li>
                  </ol>
                </ol>
                <span style={{ fontWeight: "bold" }}>7. How will I be identified as a CID?</span>
                <ol type="a" style={{ marginLeft: 35 }}>
                  <li>
                    Each CID should affix a stamp or wet signature to all drawings, speicifations,
                    or documents prepared for submission. All documents should be presented as
                    interior design documents. <span style={{ fontWeight: "bold" }}>NOT </span>{" "}
                    architectural or egineering ones.
                  </li>
                </ol>
              </p>
            </>
          }
        ></Accordion>

        <Accordion
          title="Information about the IDEX Exam"
          content={
            <>
              <p>
                <span style={{ fontWeight: "bold" }}>1. What is IDEX® Exam?</span>
                <br></br>
                The IDEX® California is a certification exam designed for California, focusing on
                the California Building Code (CBC), Title 24, ethics, business practies, and design
                standards. The examincation evaluates designers' competence in various areas,
                including Commercial and Residential California Codes and Regulations, Design
                Synthesis, Schematics, Programming, Space Planning, Design Development, Working
                Drawings, Construction documents, Furniture and finish specifications, Lighting
                layou and specifications, Contract documents, Contract administration, Business law,
                and Ethics.
                <br></br>
                <span style={{ fontWeight: "bold" }}>
                  2. What is the IDEX® Exam required and not one of the national examinations?
                </span>
                <br></br>
                The IDEX® Exam in the <strong>ONLY</strong> national examination that tests for the{" "}
                <span>
                  <a className={styles.lightBlue} href="https://www.dgs.ca.gov/bsc">
                    California Building Code (CBC)
                  </a>
                </span>{" "}
                or{" "}
                <span>
                  <a
                    className={styles.lightBlue}
                    href="https://www.dgs.ca.gov/Error-Pages/404?item=%2fdsa%2fprograms%2fprogcodes%2ftitle24&user=sitecore%5cAnonymous&site=website"
                  >
                    Title 24
                  </a>
                </span>
                . Other exams test for codes that are <strong>NOT</strong> specific to applying in
                California.
                <br></br>
                <span style={{ fontWeight: "bold" }}>3. How do I apply for the IDEX® Exam?</span>
                <br></br>
                First, apply to become a CID to verify your education and work experience. Then you
                will register for the IDEX® California on the same application.
                <br></br>
                <span style={{ fontWeight: "bold" }}>4. How is the IDEX® Exam administered?</span>
                <br></br>
                The IDEX® California is an online exam available at various proctored testing sites
                across California and can be taken in other states as well. It is offered twice a
                year, in May (spring), and October (fall), with a testing window lasting the entire
                month for each session. Candidates registering for the exam can choose their testing
                location, including Live Remote Proctoring (LRP), and select their preferred date
                and time withing the designated testing window.
                <br></br>
                <span style={{ fontWeight: "bold" }}>
                  5. How long is the IDEX® Exam and are there any drawing requirements?
                </span>
                <br></br>
                The IDEX® California exam consists of 150-multiple choice questions to be completed
                withing three hours. Drawing skills are not assessed, as candidates must meet
                minimum education or work experience requirements, assuming proficiency in drawing.
                The exam aims to evaluate knowledge of codes, regulations, consumer safety, and
                other certification-related issues. Passing the IDEX@ California is an additional
                requirement beyong the education and experience criteria outlines in the brouchre
                and Section 5801 of the Business and Professions Code.
                <br></br>
                <span style={{ fontWeight: "bold" }}>
                  6. If I pass the IDEX® Exam, am I a Certified Interior Designer?
                </span>
                <br></br>
                Not yet! Passing the IDEX® Exam does not automatically grant certification. For
                Path 1 candidates, proof of qualification completion is required before processing.
                Other candidates need to go through the certification process to obtain their
                number, stamp, and ID card. Once the exam is passed, candidated have one year from
                the letter date to complete the certification process.
                <br></br>
                <span style={{ fontWeight: "bold" }}>
                  7. How do I find out more information about the IDEX® Exam?
                </span>
                <br></br>
                Please refer to the{" "}
                <span>
                  <a
                    className={styles.lightBlue}
                    href="https://ccidc.org/idex-california-exam-information/"
                    color="blue"
                  >
                    IDEX® California Exam Information
                  </a>
                </span>{" "}
                section of this website for more detailed information
              </p>
            </>
          }
        ></Accordion>

        <Accordion
          title="Information about the Pathways to Certification"
          content={
            <>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  1. What is an accredited design program or educational institution?
                </span>
                <br></br>
                Requirements must be from a US Department of Education-accredited instituion.
                Accredidation by CIDA or FIDER is not mandatory. <br></br>
                <span style={{ fontWeight: "bold" }}>2. What are core units?</span>
                <br></br>
                The total combined coursework units, excluding general education courses, must cover
                various categories such as Interior Design, Building Design, Interior Decoration,
                Drafting History Design, Architectural History, Architecture, Graphic Design,
                Construction Documents, Art History, Building Codes, Green Building Practiced,
                Computer-Aided Design and Drafting (CADD), and Businees Practices related to the
                Practicce of Design.
                <br></br>
                <span style={{ fontWeight: "bold" }}>3. How are core units calculated?</span>
                <br></br>
                Core units are cauclauted by semester units. Quarter units will be converted into
                semester units.
                <br></br>
                <span style={{ fontWeight: "bold" }}>
                  4. I do not have a degree, will I qualify?
                </span>
                <br></br>
                Total core units determine eligibility, degree completion is NOT required.
                <br></br>
                <span style={{ fontWeight: "bold" }}>5. How much education do I need?</span>
                <br></br>
                The minimum educational requirement is 40 semester/60 quarter core inits from
                accredited design program. Certification completion education requirements vary by
                path, and there is also an option for experience-only candidates to apply.
                <br></br>
                <span style={{ fontWeight: "bold" }}>
                  6. What is diversified design experience?
                </span>
                <br></br>
                Design experience includes the preparation of complex nonstructural or non-seismic
                plans, providing instruction for their preparation, requiring the skills of a
                licensed contractor for implementation. It encompasses programming, planning,
                designing, documenting constrcution, and the installation of nonstructural or
                non-seismic elements, finishes, and furnishings, all with the aim of protecting and
                enhancing the health, safety, and welfare of the public.
                <br></br>
                <span style={{ fontWeight: "bold" }}>
                  7. How is diversified design experience calculated?
                </span>
                <ol type="a" style={{ marginLeft: 40 }}>
                  <li>
                    Based on full-time work 36 hours or more per week, 52 weeks per year. The
                    full-time diversified design experience experiments:
                  </li>
                  <ol type="i" style={{ marginLeft: 25 }}>
                    <li>1 Year = 1.872 Hours+</li>
                    <li>2 Years = 3.744 Hours+</li>
                    <li>3 Years = 5.616 Hours+</li>
                    <li>4 Years = 7.488 Hours+</li>
                    <li>5 Years = 9.360 Hours+</li>
                    <li>8 Years = 14.976 Hours+</li>
                  </ol>
                </ol>
                <span style={{ fontWeight: "bold" }}>
                  8. How is diversified design experience submitted?
                </span>
                <br></br>
                To submit proof of diversified design experience:
                <ol type="a" style={{ marginLeft: 45 }}>
                  <li>
                    If self-employed, complete the Employment Verification Form, including federal
                    tax returns or a verified letter from a CPA or Attorney for the claimed
                    experience duration. Resumes are not accepted for self-employment.
                  </li>
                  <li>
                    If not self-employed, complete the Employment Verification Form signed by both
                    the candidate and emplpyer, including a seperate form for all
                    experience/positions under consideration.
                  </li>
                </ol>
                <span style={{ fontWeight: "bold" }}>9. Can international candidates apply?</span>
                <ol type="a" style={{ marginLeft: 45 }}>
                  <li>
                    All candidates who meet the qualification are encouraged to become certified, as
                    long as they provide
                  </li>
                  <ol type="i" style={{ marginLeft: 25 }}>
                    <li>International Education from Accredited Source</li>
                    <li>Accreditation by USDE International Equivalent accrediting agency</li>
                    <li>Provide translated/verified transcripts</li>
                    <li>International experience considered</li>
                    <li>Provide verifiable proof of diversified design experieence</li>
                  </ol>
                </ol>
              </p>
            </>
          }
        ></Accordion>

        <Accordion
          title="What you need to Apply"
          content={
            <>
              <p>
                <ol style={{ marginLeft: 25 }}>
                  <li>Complete Online Application</li>
                  <li>Sign Code of Ethics</li>
                  <li>Proof of Education</li>
                  <li>Proof of diversified interior design experience</li>
                  <li>Photocopy of driver's license</li>
                  <li>
                    Credit card payment or check payable to CCIDC for the: one-time non-refundable
                    application and processing fee, IDEX@ California Exam fees, Testing center fee
                  </li>
                </ol>
              </p>
            </>
          }
        ></Accordion>

        <div className="tag">
          Built for free by{" "}
          <a href="https://tse.ucsd.edu/">
            <span>Triton Software Engineering</span>
          </a>
        </div>
      </div>
    </Page>
  );
}
