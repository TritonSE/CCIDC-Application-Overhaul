import React, { ReactNode, createContext, useState } from "react";

type FormProviderProps = {
  children: ReactNode;
};

// Define types for various form data sections
export type SchoolsAttended = {
  schoolName: string;
  schoolCity: string;
  schoolState: string;
  schoolCountry: string;
  coreUnits: string;
  degreeReceived: string;
  dateStarted: string;
  dateStopped: string;
};

export type ProfessionalMemberships = {
  membershipName: string;
  membershipLevel: string;
};

export type ICCCourses = {
  courseName: string;
  courseCompleteDate: string;
  courseCertificateNumber: string;
};

export type NationalExams = {
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

export type ApplicationPathType = "1" | "2" | "3" | "4";

// Define the complete form data type
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

  applicantPath: ApplicationPathType | "";
};

// Maps unique IDs to uploaded files
type FormFiles = Record<string, File | null>;

type FormContextType = {
  formData: FormData;
  formFiles: FormFiles;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setFormFiles: React.Dispatch<React.SetStateAction<FormFiles>>;
  submitForm: () => Promise<void>;
};

const storedValue = localStorage.getItem("applicantPath") ?? "";
const validValues = ["1", "2", "3", "4", ""];
const appPath = validValues.includes(storedValue) ? (storedValue as ApplicationPathType | "") : "";

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

  applicantPath: appPath,
};

export const FormContext = createContext<FormContextType>({
  formData: initialFormData,
  formFiles: {},
  setFormData: () => {},
  setFormFiles: () => {},
  submitForm: async () => {},
});

// Function to parse current cookies and return a map of name to value.
function parseCookies() {
  const cookieString = document.cookie;

  if (!cookieString) {
    return {};
  }

  const cookies: Record<string, string> = {};
  const cookieArray = cookieString.split(";");

  for (const cookieEntry of cookieArray) {
    const cookie = cookieEntry.trim();
    const parts = cookie.split("=");
    const name = parts[0];
    const value = parts.slice(1).join("="); // Handles values with "="
    cookies[name] = value;
  }
  return cookies;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formFiles, setFormFiles] = useState<FormFiles>({});

  const uploadFile = async (serverUrl: string, folderName: string, fileUuid: string) => {
    const file = formFiles[fileUuid] ?? null;
    if (!file) {
      return Promise.resolve();
    }

    const fileFormData = new FormData();
    fileFormData.append("files", file);
    fileFormData.append("folderName", folderName);

    const response = await fetch(`${serverUrl}/file/upload`, {
      method: "POST",
      body: fileFormData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
  };

  const submitForm = async () => {
    const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

    const folderName = `${formData.firstName}_${formData.lastName}_${new Date()
      .toDateString()
      .replace(/ /g, "_")}`;

    // Upload first file first, then upload others, so we don't create duplicate folders
    // due to race condition
    const allFileIds = Object.keys(formFiles);
    if (allFileIds.length > 0) {
      await uploadFile(SERVER_URL, folderName, allFileIds[0]);
    }

    await Promise.all(
      allFileIds.slice(1).map((fileUuid) => uploadFile(SERVER_URL, folderName, fileUuid)),
    );

    // Now submit the form
    const cookies = parseCookies();
    const nicename = cookies?.nicename;
    const response = await fetch(`${SERVER_URL}/form/submit-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, nicename }),
    });

    if (response.status !== 200) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    console.log("Form data submitted successfully");
  };

  return (
    <FormContext.Provider value={{ formData, formFiles, setFormData, setFormFiles, submitForm }}>
      {children}
    </FormContext.Provider>
  );
};
