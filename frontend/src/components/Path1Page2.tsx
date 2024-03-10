import leftArrow from "../assets/leftArrow.svg";
import plus from "../assets/plus.svg";
import rightArrow from "../assets/rightArrow.svg";

import styles from "./Path1.module.css";

export function Path1Page2() {
    return (
        <>
        <div className="Apply-Page1">
          <form>
                          <h2 className = {styles.sectionTitle}>Schools <button className= {styles.add} ><span>Add &nbsp;&nbsp; </span><img src={plus} alt="buttonpng"/></button></h2>
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
    
            
                          <div className={styles.buttonRow}>
                              <button className= {styles.arrow} ><img src={leftArrow} alt="buttonpng"/></button>
                              <button className={styles.arrow}><img src={rightArrow} alt="buttonpng"/></button>
                          </div>
          </form>
        </div>
      </>
    );
}