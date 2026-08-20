import { ClassVideo, LiveClass, Assignment, CourseResource } from "@/types/dashboard";

export const MOCK_DASHBOARD_CLASSES: ClassVideo[] = [
  {
    no: "28",
    title: "Class 28: Structural Column & Rebar Detailing in Revit",
    duration: "2h 10m",
    date: "Aug 13, 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Practical step-by-step tutorial on rebar modeling, column scheduling, and reinforcement drafting to BNBC/ACI standards.",
    resources: [
      { name: "Class_28_Rebar_Model.rvt", size: "38 MB", type: "RVT" },
      { name: "Column_Schedule_Standard.pdf", size: "4.2 MB", type: "PDF" },
    ],
    completed: true,
  },
  {
    no: "27",
    title: "Class 27: 3D Curtain Wall & Custom Parametric Family",
    duration: "1h 55m",
    date: "Aug 10, 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Custom curtain wall grids, mullions, panel types, and parametric door family modeling.",
    resources: [{ name: "Curtain_Wall_Profiles.rfa", size: "12 MB", type: "RFA" }],
    completed: true,
  },
  {
    no: "26",
    title: "Class 26: Multi-Storey Residential Project Setup & Levels",
    duration: "2h 05m",
    date: "Aug 07, 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Architectural grid creation, elevation levels setup, and CAD underlay import techniques.",
    resources: [{ name: "Floor_Plans_Grid.dwg", size: "24 MB", type: "DWG" }],
    completed: true,
  },
  {
    no: "25",
    title: "Class 25: Advanced Wall Layers, Materials & Quantity Takeoff",
    duration: "1h 50m",
    date: "Aug 03, 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Compound wall structures, material assignments, layers, and automated material quantity schedules.",
    resources: [{ name: "Material_Takeoff_Sheet.xlsx", size: "2.1 MB", type: "XLSX" }],
    completed: true,
  },
];

export const MOCK_LIVE_CLASSES: LiveClass[] = [
  {
    id: 1,
    title: "Class 29: Structural Beam-Slab Framing & Reinforcement Modeling",
    date: "Aug 22, 2026 (Thursday)",
    time: "9:00 PM - 11:00 PM",
    instructor: "Engr. Maidul Islam",
    status: "Upcoming Live",
    zoomLink: "https://zoom.us/j/1234567890",
    meetingId: "872 9102 4819",
    passcode: "BIM2026",
  },
  {
    id: 2,
    title: "Special Doubt Clearing & Live Project Review Session",
    date: "Aug 24, 2026 (Saturday)",
    time: "9:30 PM - 11:00 PM",
    instructor: "BIM Architecture Expert Team",
    status: "Scheduled",
    zoomLink: "https://zoom.us/j/1234567890",
    meetingId: "872 9102 4819",
    passcode: "BIM2026",
  },
];

export const MOCK_ASSIGNMENTS: Assignment[] = [
  {
    id: 101,
    title: "Assignment 7: 6-Storey Residential Building 3D Rebar Detailing",
    deadline: "Aug 25, 2026",
    totalMarks: 100,
    obtainedMarks: 94,
    status: "Graded",
    feedback: "Great rebar modeling and schedule accuracy. Minor fix needed in column splice length.",
  },
  {
    id: 102,
    title: "Assignment 8: Commercial Shopping Complex Curtain Wall & Elevation",
    deadline: "Aug 30, 2026",
    totalMarks: 100,
    obtainedMarks: null,
    status: "Due",
    feedback: "Pending submission. Please submit .rvt file along with exported PDF sheets.",
  },
];

export const MOCK_RESOURCES: CourseResource[] = [
  { name: "Revit Master Family Library (Doors, Windows & Furniture Pack)", size: "125 MB", type: "ZIP", category: "Revit Families (.rfa)" },
  { name: "BNBC 2020 Architectural Standard Template & Title Block", size: "18 MB", type: "RTE", category: "Templates" },
  { name: "Multi-Storey Structural Rebar Detailing AutoCAD Base Drawing", size: "42 MB", type: "DWG", category: "CAD Drawings" },
  { name: "Tekla Steel Connection Standard Sample Model", size: "68 MB", type: "ZIP", category: "Project Files" },
];
