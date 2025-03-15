import { Workshop } from "./workshop";

export type User = {
  name: string,
  surname: string,
  gender: string,
  phone: string,
  email: string,
  category: string,
  visitDate: string,
  interestedActivities: string,
  referralSource: string,
  studentLevel: string,
  studyStream: string,
  school: string,
  province: string,
  interestLevel: string,
  interestedField: string,
  emergencyContact: string,
  universityYear: string,
  faculty: string,
  university: string,
  alumniBatch: string,
  teacherSchool: string,
  teacherProvince: string,
  subjectTaught: string,

  // registeredWorkshops: Workshop[],
}