export interface ClassVideo {
  no: string;
  title: string;
  duration: string;
  date: string;
  videoUrl: string;
  description: string;
  resources: { name: string; size: string; type: string }[];
  completed?: boolean;
}

export interface LiveClass {
  id: number;
  title: string;
  date: string;
  time: string;
  instructor: string;
  status: string;
  zoomLink: string;
  meetingId: string;
  passcode: string;
}

export interface Assignment {
  id: number;
  title: string;
  deadline: string;
  totalMarks: number;
  obtainedMarks: number | null;
  status: "Graded" | "Due" | "Submitted";
  feedback: string;
}

export interface CourseResource {
  name: string;
  size: string;
  type: string;
  category: string;
}

export interface PendingApproval {
  id: string;
  name: string;
  course: string;
  method: string;
  amount: string;
  phone: string;
  status: "Pending" | "Approved" | "Rejected";
}

export type StudentDashboardTab =
  | "overview"
  | "courses"
  | "live"
  | "assignments"
  | "resources"
  | "payments"
  | "certificate"
  | "profile";

export type InstructorDashboardTab =
  | "overview"
  | "batches"
  | "live_host"
  | "grading"
  | "materials"
  | "profile";

export type AdminDashboardTab =
  | "overview"
  | "admissions"
  | "students"
  | "batches"
  | "revenue"
  | "settings";
