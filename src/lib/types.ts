
// Types for the attendance management system

export type Student = {
  id: string;
  name: string;
  rollNumber: string;
  class: string;
  gender: string;
  contactNumber: string;
};

export type SchoolClass = {
  id: string;
  name: string;
  teacher: string;
  totalStudents: number;
  attendanceRate: number;
};

export type AttendanceStatus = "present" | "absent" | "late";

export type AttendanceRecord = {
  id: string;
  studentId: string;
  date: string;
  status: AttendanceStatus;
  notes: string;
};

export type AttendanceStats = {
  totalStudents: number;
  presentToday: number;
  absentToday: number;
  attendanceRate: number;
  classesWithPerfectAttendance: number;
  classesBelowTarget: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "teacher" | "student";
};
