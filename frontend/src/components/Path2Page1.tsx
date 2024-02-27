import deviceList from "../constants/devices.json"
import genderList from "../constants/genders.json"
import rightArrow from "../assets/rightArrow.svg";
import leftArrow from "../assets/leftArrow.svg";

import styles from "./Path2Page2.module.css";

export function Path2Page1() {
    return (
        <>
          <div className="Apply-Page1">
            <form>
							<h2 className = {styles.sectionTitle}>Personal Information</h2>
							<div className={styles.formRow}>
								<label className={styles.label}>First Name 
									<input className={styles.input} type="text" name="fName" placeholder="Enter First Name Here"/>
								</label>
								<label className={styles.label}>Middle Name 
									<input className={styles.input} type="text" name="mName" placeholder="Enter Middle Name Here"/>
								</label >
							</div>

							<div className={styles.formRow}>
								<label className={styles.label}>Last Name 
									<input className={styles.input} type="text" name="lName" placeholder="Enter Last Name Here"/>
								</label >
								<label className={styles.label}>Maiden/Other Name Used 
									<input className={styles.input} type="text" name="maiden" placeholder="Enter 2nd Last Name Here"/>
								</label>
							</div>

							<div className={styles.formRow}>
								<label className={styles.label}>Gender 
									<select className={styles.input} name="gender">
									<option value="" disabled selected >Select one</option>
										{genderList.map((gender) => {
											return <option key={gender}>{gender}</option>
										})}
									</select>
								</label>
							</div>
							
							<hr className = {styles.line} />
							
							<h2 className = {styles.sectionTitle}>Contact Information</h2>
							<div className={styles.formRow}>
								<label className={styles.label}>Email Address <br/>
										<input className={styles.input} type="text" name="email" placeholder="Enter Email Address"/>
								</label>
								<label className={styles.label}>Confirm Email Address <br/>
										<input className={styles.input} type="text" name="email" placeholder="Enter Email Address"/>
								</label >
							</div>

							<div className={styles.formRow}>
								<label className={styles.label}>Phone Device Type <br/>
									<select required className={styles.input} name="device-type">
										<option value="" disabled selected className={styles.label1}>Select one</option>
										{deviceList.map((device) => {
												return <option key={device}>{device}</option>
										})}
									</select>
								</label >
								<label className={styles.label}>Phone Number <br/>
										<input className={styles.input} type="text" name="phone num" placeholder="Enter Phone Number"/>
								</label>
							</div>
							
							<hr className = {styles.line} />

							<h2 className = {styles.sectionTitle}>Mailing Address</h2>
							<div className={styles.formRow}>
								<label className={styles.label}>Address <br/>
									<input className={styles.input} type="text" name="address" placeholder="Enter Address"/>
								</label>
								<label className={styles.label}>City <br/>
									<input className={styles.input} type="text" name="city" placeholder="Enter City"/>
								</label >
							</div>

							<div className={styles.formRow}>
								<label className={styles.label}>State <br/>
									<input className={styles.input} type="text" name="state" placeholder="Enter State"/>
								</label >
								<label className={styles.label}>Zip <br/>
									<input className={styles.input} type="text" name="zip" placeholder="Enter Zip Code"/>
								</label>
							</div>

							<div className={styles.formRow}>
								<label className={styles.label}>County <br/>
									<input className={styles.input} type="text" name="county" placeholder="Enter County"/>
								</label >
								<label className={styles.label}>Country <br/>
									<input className={styles.input} type="text" name="country" placeholder="Enter Country"/>
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