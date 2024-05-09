import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormProviderProps {
  children: ReactNode;
}

interface SchoolsAttended {
  schoolName: string;
  schoolCity: string;
  schoolState: string;
  schoolCountry: string;
  coreUnits: string;
  degreeReceived: string;
  dateStarted: string;
  dateStopped: string;
}
interface ProfessionalMemberships {
  membershipName: string;
  membershipLevel: string;
}
interface ICCCourses {
  courseName: string;
  courseCompleteDate: string;
}
interface NationalExams {
  examName: string;
  examDate: string;
  certificateNumer: string;
}

interface WorkExperience {
  designExperience: string;
  numHours: string;
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
}

interface FormData {
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

  totalHours: string;
  totalYears: string;

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
}

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

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

  totalHours: "",
  totalYears: "",

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

const FormContext = createContext<FormContextType>({
  formData: initialFormData,
  setFormData: () => {},
});

export const useFormContext = () => useContext(FormContext);

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  return <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>;
};
