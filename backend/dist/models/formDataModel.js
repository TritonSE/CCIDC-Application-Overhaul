"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Define MongoDB Schema
const formDataSchema = new mongoose_1.default.Schema({
    // Personal information
    firstName: String,
    lastName: String,
    middleName: String,
    maidenName: String,
    gender: String,
    email: String,
    deviceType: String,
    phoneNumber: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    county: String,
    country: String,
    // Current company information
    currCompanyName: String,
    currCompanyWebsite: String,
    currCompanyProfession: String,
    currCompanySpecialization: String,
    // Certification information
    totalHours: Number,
    totalYears: Number,
    certifiedJurisdiction: String,
    jurisdictionName: String,
    certificationExam: String,
    dateOfExam: String,
    licenseNumber: String,
    dateCertified: String,
    convictedOfFelony: String,
    extraExplanation: String,
    // Arrays of nested objects
    schoolsAttended: [
        {
            schoolName: String,
            schoolCity: String,
            schoolState: String,
            schoolCountry: String,
            coreUnits: String,
            degreeReceived: String,
            dateStarted: String,
            dateStopped: String,
        },
    ],
    professionalMemberships: [
        {
            membershipName: String,
            membershipLevel: String,
        },
    ],
    iccCourses: [
        {
            courseName: String,
            courseCompleteDate: String,
        },
    ],
    nationalExams: [
        {
            examName: String,
            examDate: String,
            certificateNumber: String,
        },
    ],
    workExperience: [
        {
            designExperience: String,
            numHours: Number,
            supervisorName: String,
            supervisorPhoneNum: String,
            supervisorEmail: String,
            companyName: String,
            companyAddress: String,
            companyCity: String,
            companyState: String,
            companyZip: String,
            companyCountry: String,
            hireDate: String,
            lastDateWorked: String,
        },
    ],
});
// Define MongoDB Model
const FormDataModel = mongoose_1.default.model("FormData", formDataSchema);
exports.default = FormDataModel;
