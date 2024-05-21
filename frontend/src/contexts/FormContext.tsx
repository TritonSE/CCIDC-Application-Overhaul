import React, { ReactNode, createContext, useState } from "react";
import axios from "axios";

type FormProviderProps = {
  children: ReactNode;
};

// Define types for various form data sections
type SchoolsAttended = {
  schoolName: string;
  schoolCity: string;
  schoolState: string;
  schoolCountry: string;
  coreUnits: string;
  degreeReceived: string;
  dateStarted: string;
  dateStopped: string;
};

type ProfessionalMemberships = {
  membershipName: string;
  membershipLevel: string;
};

type ICCCourses = {
  courseName: string;
  courseCompleteDate: string;
};

type NationalExams = {
  examName: string;
  examDate: string;
  certificateNumber: string;
};

type WorkExperience = {
  designExperience: string;
  numHours: number;
  superviserName: string;
  superviserPhoneNum: string;
  superviserEmail: string;
  companyName: string;
  companyAddress: string;
  companyCity: string;
  companyState: string;
  companyZip: string;
  companyCountry: string;
  hireDate: string;
  lastDateWorked: string;
};

// Define the complete form data type
type FormData = {
  firstName: string;
  lastName: string;
  middleName: string;
  maidenName: string;
  gender: string;
  email: string;
  deviceType: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  county: string;
  country: string;

  currCompanyName: string;
  currCompanyWebsite: string;
  currCompanyProfession: string;
  currCompanySpecialization: string;

  totalHours: number;
  totalYears: number;

  certifiedJurisdiction: string;
  jurisdictionName: string;
  certificationExam: string;
  dateOfExam: string;
  licenseNumber: string;
  dateCertified: string;
  convictedOfFelony: string;
  extraExplanation: string;

  SchoolsAttended: SchoolsAttended[];
  ProfessionalMemberships: ProfessionalMemberships[];
  ICCCourses: ICCCourses[];
  NationalExams: NationalExams[];
  WorkExperience: WorkExperience[];
};

type FormContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  submitForm: () => Promise<void>;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  middleName: "",
  maidenName: "",
  gender: "",
  email: "",
  deviceType: "",
  phoneNumber: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  county: "",
  country: "",

  currCompanyName: "",
  currCompanyWebsite: "",
  currCompanyProfession: "",
  currCompanySpecialization: "",

  totalHours: 0,
  totalYears: 0,

  certifiedJurisdiction: "",
  jurisdictionName: "",
  certificationExam: "",
  dateOfExam: "",
  licenseNumber: "",
  dateCertified: "",
  convictedOfFelony: "",
  extraExplanation: "",

  SchoolsAttended: [],
  ProfessionalMemberships: [],
  ICCCourses: [],
  NationalExams: [],
  WorkExperience: [],
};

export const FormContext = createContext<FormContextType>({
  formData: initialFormData,
  setFormData: () => {},
  submitForm: async () => {},
});

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const submitForm = async () => {
    try {
      const response = await axios.post("/form/submit-form", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      console.log("Form data submitted successfully");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, submitForm }}>
      {children}
    </FormContext.Provider>
  );
};
