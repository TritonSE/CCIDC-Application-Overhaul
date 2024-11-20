import React, { ReactNode, createContext, useState } from "react";

type FormProviderProps = {
  children: ReactNode;
};

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

export type WorkExperience = {
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
  currentWork: boolean;
};

type FormData = {
  firstName: string;
  lastName: string;
  middleName: string;
  maidenName: string;
  gender: string;
  email: string;
  confirmEmail: string;
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
  dateCertifiedExpires: string;
  convictedOfFelony: string;
  extraExplanation: string;
  readRules: boolean;
  readPay: boolean;

  SchoolsAttended: SchoolsAttended[];
  ProfessionalMemberships: ProfessionalMemberships[];
  ICCCourses: ICCCourses[];
  NationalExams: NationalExams[];
  WorkExperience: WorkExperience[];
};

type FormContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  middleName: "",
  maidenName: "",
  gender: "",
  email: "",
  confirmEmail: "",
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
  dateCertifiedExpires: "",
  convictedOfFelony: "",
  extraExplanation: "",
  readRules: false,
  readPay: false,

  SchoolsAttended: [],
  ProfessionalMemberships: [],
  ICCCourses: [],
  NationalExams: [],
  WorkExperience: [],
};

const initialState: FormContextType = {
  formData: initialFormData,
  setFormData: () => undefined,
};

export const FormContext = createContext<FormContextType>(initialState);

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  return <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>;
};
