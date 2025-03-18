import { UUID } from "crypto";

export type User = {
  // ? following the document
  id: string;
  email: string;
};

export type ExpoStaff = {
  role: "expoStaff";
} & User;

export type WorkshopStaff = {
  role: "workshopStaff";
  workshopId: UUID;
} & User;

export type Visitor = {
  role: "visitor";
  sixDigitCode: string;
  name: string;
  surname: string;
  gender: string;
  phone: string;
  category: string;
  visitDate: string;
  interestedActivities?: string;
  referralSource?: string;
  studentLevel?: string;
  studyStream?: string;
  school?: string;
  province?: string;
  interestLevel?: string;
  interestedField?: string;
  emergencyContact?: string;
  universityYear?: string;
  faculty?: string;
  university?: string;
  alumniBatch?: string;
  teacherSchool?: string;
  teacherProvince?: string;
  subjectTaught?: string;
} & User;
