import leftArrow from "../assets/leftArrow.svg";
import plus from "../assets/plusIcon.svg";
import rightArrow from "../assets/rightArrow.svg";
import upload from "../assets/upload.svg"
import courseList from "../constants/courses.json"
import examList from "../constants/exams.json"

import styles from "./Path1.module.css";

function SchoolSection() {
    return (
        <form>
            <h2 className = {styles.sectionTitle}>Schools <button className= {styles.add} ><span>&nbsp;&nbsp;Add</span><img src={plus} alt="buttonpng" height="14px"/></button></h2>
            <div className={styles.formRow}>
                <label className={styles.label}>Name of School Attended
                    <input className={styles.input} type="text" name="school" placeholder="School Name"/>
                </label>
                <label className={styles.label}>School City
                    <input className={styles.input} type="text" name="city" placeholder="City"/>
                </label >
            </div>

            <div className={styles.formRow}>
                <label className={styles.label}>School State
                    <input className={styles.input} type="text" name="state" placeholder="State"/>
                </label >
                <label className={styles.label}>School Country
                    <input className={styles.input} type="text" name="country" placeholder="Country"/>
                </label>
            </div>

            <div className={styles.formRow}>
                <label className={styles.label}>Core Units Completed
                    <input className={styles.input} type="text" name="units" placeholder="Enter Number here"/>
                </label >
                <label className={styles.label}>Degree Received
                    <input className={styles.input} type="text" name="degree" placeholder="Degree Name"/>
                </label>
            </div>

            <div className={styles.formRow}>
                <label className={styles.label}>Month/Year Started Attending
                    <input className={styles.input} type="text" name="attending" placeholder="mm/yyyy"/>
                </label >
                <label className={styles.label}>Month/Year Stopped Attending/Completed
                    <input className={styles.input} type="text" name="stopAttending" placeholder="mm/yyyy"/>
                </label>
            </div>

            <div className = {styles.warningText}>*All transcripts must be <b>official</b>, they may be mailed or emailed directly from your school or educational institution</div>
            
            <hr className = {styles.line} />
        </form>
    )
}

function ProfessionalAssociationSection() {
    return (
        <form>
            <h2 className = {styles.sectionTitle}>Professional Association Memberships</h2>
            <div className={styles.formRow}>
                <label className={styles.label}>Professional Association Membership
                        <input className={styles.input} type="text" name="email" placeholder="Enter your Membership"/>
                </label>
                <label className={styles.label}>Other Professional Associations
                    <input className={styles.input} type = "text" name="prof assoc" placeholder="Enter Professional Associations"/>
                </label >
            </div>

            <div className={styles.formRow}>
                <label className={styles.label}>Membership Level
                        <input className={styles.input} type="text" name="mem level" placeholder="Enter Membership Level"/>
                </label>
            </div>
        </form>
    )
}

function NationalExamSection() {
    return (
        <form>
            <h2 className = {styles.sectionTitle}>National Exam</h2>
            <div className={styles.formRow}>
                <label className={styles.label}>National Exam
                    <select required className={styles.input} name="exam">
                        <option value="" disabled selected className={styles.label1}>Select the Appropriate Exam</option>
                        {examList.map((exam) => {
                                return <option key={exam}>{exam}</option>
                        })}
                    </select>
                </label>
                <label className={styles.label}>Date of National Exam
                    <input className={styles.input} type = "text" name="date" placeholder="Enter Date"/>
                </label >
            </div>

            <div className={styles.formRow}>
                <label className={styles.label}>Certificate Number
                        <input className={styles.input} type="text" name="cert number" placeholder="Enter Certificate Number"/>
                </label>
            </div>
            <button className= {styles.upload} >Upload Proof of National Exam<img src={upload} height="80%" alt="buttonpng"/></button>
        </form>
    );
}

function ICCCourses() {
    return (
        <form>
            <h2 className = {styles.sectionTitle}>ICC Courses <button className= {styles.add} ><span>&nbsp;&nbsp;Add</span><img src={plus} alt="buttonpng" height="14px"/></button></h2>
            <div className={styles.formRow}>
                <label className={styles.label}>Courses
                    <select required className={styles.input} name="course">
                        <option value="" disabled selected className={styles.label1}>Select the Course</option>
                        {courseList.map((course) => {
                                return <option key={course}>{course}</option>
                        })}
                    </select>
                </label>
                <label className={styles.label}>Date of Completion
                    <input className={styles.input} type="text" name="date" placeholder="Enter Date"/>
                </label >
            </div>
            <button className= {styles.upload} >Upload Proof of Course Completion<img src={upload} height="80%" alt="buttonpng"/></button>
        </form>
    );
}
type Page2AllPathsProps = {
    pathNumber: number;
}

export function Page2AllPaths({ pathNumber }: Page2AllPathsProps) {
    let content;

    if (pathNumber === 1 || pathNumber === 2) {
        content = (
            <ProfessionalAssociationSection></ProfessionalAssociationSection>
        );
    } else if (pathNumber === 3) {
        content =  (
            <>
                <NationalExamSection></NationalExamSection>
                <hr className = {styles.line} />
                <ProfessionalAssociationSection></ProfessionalAssociationSection>
            </>
        );
    } else if (pathNumber === 4) {
        content = (
            <>
                <NationalExamSection></NationalExamSection>
                <hr className = {styles.line} />
                <ICCCourses></ICCCourses>
                <hr className = {styles.line} />
                <ProfessionalAssociationSection></ProfessionalAssociationSection>
            </>
        )
    }
    return (
        <>
            <SchoolSection></SchoolSection>
            {content}
            <div className={styles.buttonRow}>
                <button className= {styles.arrow} ><img src={leftArrow} alt="buttonpng"/></button>
                <button className={styles.arrow}><img src={rightArrow} alt="buttonpng"/></button>
            </div>
        </>
    );
};