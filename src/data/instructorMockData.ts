export interface InstructorBatch {
  id: string;
  name: string;
  code: string;
  studentsCount: number;
  completedClasses: number;
  totalClasses: number;
  schedule: string;
  nextClassTopic: string;
  status: "Active" | "Upcoming" | "Completed";
}

export interface StudentSubmission {
  id: string;
  studentName: string;
  studentRoll: string;
  assignmentTitle: string;
  submittedAt: string;
  fileName: string;
  fileSize: string;
  score: number | null;
  feedback: string;
  status: "Pending" | "Graded";
}

export interface UploadedMaterial {
  id: string;
  title: string;
  batchCode: string;
  classNo: string;
  videoUrl: string;
  attachedFile: string;
  uploadDate: string;
}

export const MOCK_INSTRUCTOR_BATCHES: InstructorBatch[] = [
  {
    id: "batch-5",
    name: "Professional Revit Architecture + Structure",
    code: "REV-5TH",
    studentsCount: 74,
    completedClasses: 28,
    totalClasses: 45,
    schedule: "Mon, Wed, Fri (9:00 PM - 11:00 PM)",
    nextClassTopic: "Class 29: Structural Beam-Slab Framing & Rebar",
    status: "Active",
  },
  {
    id: "batch-3",
    name: "Professional Tekla Steel Detailing Masterclass",
    code: "TEK-3RD",
    studentsCount: 58,
    completedClasses: 18,
    totalClasses: 36,
    schedule: "Sun, Tue, Thu (9:30 PM - 11:30 PM)",
    nextClassTopic: "Class 19: PEB Steel Connection & Bolt Detailing",
    status: "Active",
  },
  {
    id: "batch-4",
    name: "Professional Revit MEP & HVAC Masterclass",
    code: "MEP-4TH",
    studentsCount: 52,
    completedClasses: 12,
    totalClasses: 28,
    schedule: "Sat, Tue (8:30 PM - 10:30 PM)",
    nextClassTopic: "Class 13: Duct Sizing & Air Terminal Placement",
    status: "Active",
  },
];

export const MOCK_STUDENT_SUBMISSIONS: StudentSubmission[] = [
  {
    id: "sub-101",
    studentName: "Md. Ariful Islam",
    studentRoll: "BIM-2026-0842",
    assignmentTitle: "Assignment 7: 6-Storey Residential Rebar Detailing",
    submittedAt: "Aug 18, 2026 (10:45 PM)",
    fileName: "Ariful_Assignment_7_Model.rvt",
    fileSize: "36.4 MB",
    score: 94,
    feedback: "Excellent reinforcement detailing and automated schedule generation.",
    status: "Graded",
  },
  {
    id: "sub-102",
    studentName: "Tanvir Ahmed",
    studentRoll: "BIM-2026-0855",
    assignmentTitle: "Assignment 8: Curtain Wall & Elevation Modeling",
    submittedAt: "Aug 20, 2026 (08:30 PM)",
    fileName: "Tanvir_CurtainWall_Project.rvt",
    fileSize: "42.1 MB",
    score: null,
    feedback: "",
    status: "Pending",
  },
  {
    id: "sub-103",
    studentName: "Nusrat Jahan",
    studentRoll: "BIM-2026-0861",
    assignmentTitle: "Assignment 8: Curtain Wall & Elevation Modeling",
    submittedAt: "Aug 20, 2026 (09:15 PM)",
    fileName: "Nusrat_Elevation_Model.rvt",
    fileSize: "29.8 MB",
    score: null,
    feedback: "",
    status: "Pending",
  },
  {
    id: "sub-104",
    studentName: "Kazi Sazzad Hossain",
    studentRoll: "BIM-2026-0870",
    assignmentTitle: "Assignment 8: Curtain Wall & Elevation Modeling",
    submittedAt: "Aug 20, 2026 (11:00 PM)",
    fileName: "Sazzad_Shopping_Mall_Facade.rvt",
    fileSize: "48.2 MB",
    score: null,
    feedback: "",
    status: "Pending",
  },
];
