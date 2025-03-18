"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    gender: "",
    phone: "",
    email: "",
    category: "",
    visitDate: "",
    interestedActivities: "",
    referralSource: "",
    studentLevel: "",
    studyStream: "",
    school: "",
    province: "",
    interestLevel: "",
    interestedField: "",
    emergencyContact: "",
    universityYear: "",
    faculty: "",
    university: "",
    alumniBatch: "",
    teacherSchool: "",
    teacherProvince: "",
    subjectTaught: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((res) => {
      redirect("/qr");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ชื่อ:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        นามสกุล:
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        เพศ:
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        เบอร์โทรติดต่อ:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        ประเภท:
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">เลือกประเภท</option>
          <option value="student">นักเรียน/ผู้ที่สนใจศึกษาต่อ</option>
          <option value="externalStudent">นิสิตนักศึกษาจากมออื่น</option>
          <option value="chulaAlumni">นิสิตปัจจุบัน/ศิษย์เก่า วิศวะจุฬา</option>
          <option value="teacher">ครู</option>
          <option value="parent">ผู้ปกครอง/บุคคลภายนอก</option>
        </select>
      </label>
      <br />
      <label>
        วันที่จะมา:
        <input
          type="date"
          name="visitDate"
          value={formData.visitDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        กิจกรรมที่สนใจ:
        <input
          type="text"
          name="interestedActivities"
          value={formData.interestedActivities}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        ช่องทางที่รู้จักงานนี้:
        <input
          type="text"
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
        />
      </label>
      <br />
      {formData.category === "student" && (
        <>
          <label>
            ระดับชั้นในปี 2567:
            <input
              type="text"
              name="studentLevel"
              value={formData.studentLevel}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            สายการเรียน (หากมอปลาย):
            <input
              type="text"
              name="studyStream"
              value={formData.studyStream}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            โรงเรียน:
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            จังหวัด:
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            ระดับความสนใจคณะวิศวะจุฬา:
            <input
              type="text"
              name="interestLevel"
              value={formData.interestLevel}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            สาขาวิศวะที่สนใจ:
            <input
              type="text"
              name="interestedField"
              value={formData.interestedField}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            เบอร์ติดต่อฉุกเฉิน:
            <input
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
            />
          </label>
          <br />
        </>
      )}
      {formData.category === "externalStudent" && (
        <>
          <label>
            ชั้นปี:
            <input
              type="text"
              name="universityYear"
              value={formData.universityYear}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            คณะที่กำลังศึกษา:
            <input
              type="text"
              name="faculty"
              value={formData.faculty}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            มหาลัยที่กำลังศึกษา:
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
            />
          </label>
          <br />
        </>
      )}
      {formData.category === "chulaAlumni" && (
        <>
          <label>
            รุ่น:
            <input
              type="text"
              name="alumniBatch"
              value={formData.alumniBatch}
              onChange={handleChange}
            />
          </label>
          <br />
        </>
      )}
      {formData.category === "teacher" && (
        <>
          <label>
            โรงเรียนในสังกัด:
            <input
              type="text"
              name="teacherSchool"
              value={formData.teacherSchool}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            จังหวัด:
            <input
              type="text"
              name="teacherProvince"
              value={formData.teacherProvince}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            วิชาที่สอน:
            <input
              type="text"
              name="subjectTaught"
              value={formData.subjectTaught}
              onChange={handleChange}
            />
          </label>
          <br />
        </>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
