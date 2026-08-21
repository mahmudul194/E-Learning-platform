import { EnrolledCourse } from "@/types/dashboard";

export const MOCK_STUDENT_ENROLLED_COURSES: EnrolledCourse[] = [
  {
    id: "course-revit-combo",
    title: "Revit Combo Pro (Architectural + Structural + MEP)",
    category: "Full BIM Lifecycle",
    batch: "8th Live Batch",
    instructor: "Engr. Ashikur Rahman & Engr. Maidul Islam",
    thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    totalLessons: 6,
    completedLessons: 3,
    progressPercent: 50,
    modules: [
      {
        id: "mod-1", moduleNo: "Module 01", title: "BIM Fundamentals & Revit Interface Setup",
        lessons: [
          {
            id: "les-101", lessonNo: 1, title: "Lesson 01: BIM Core Principles & Interface Navigation", duration: "1h 45m",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "LOD 100-500 standards, project browser setup, and view template configurations.",
            resources: [{ name: "BIM_LOD_Standards.pdf", size: "3.4 MB", type: "PDF" }], isCompleted: true, isUnlocked: true,
          },
          {
            id: "les-102", lessonNo: 2, title: "Lesson 02: Architectural Grids, Datum Levels & CAD Linking", duration: "2h 10m",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Architectural grid coordinate systems, datum levels, and importing DWG drawings.",
            resources: [{ name: "Grid_Setup_Template.rvt", size: "18 MB", type: "RVT" }], isCompleted: true, isUnlocked: true,
          },
        ],
      },
      {
        id: "mod-2", moduleNo: "Module 02", title: "Architectural Walls & Parametric Curtain Glazing",
        lessons: [
          {
            id: "les-201", lessonNo: 3, title: "Lesson 03: Multi-Layer Compound Walls & Material Takeoff", duration: "1h 55m",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Designing compound wall assemblies, thermal layers, and automated material schedules.",
            resources: [{ name: "Wall_Assemblies_Library.rfa", size: "12 MB", type: "RFA" }], isCompleted: true, isUnlocked: true,
          },
          {
            id: "les-202", lessonNo: 4, title: "Lesson 04: Parametric Curtain Walls, Grids & Mullions", duration: "2h 05m",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Curtain wall pattern creation, custom mullion profiles, and parametric corner door modeling.",
            resources: [{ name: "Curtain_Mullions_Pack.dwg", size: "8.5 MB", type: "DWG" }], isCompleted: false, isUnlocked: true,
          },
        ],
      },
      {
        id: "mod-3", moduleNo: "Module 03", title: "Structural Columns, Beams & 3D Rebar Detailing",
        lessons: [
          {
            id: "les-301", lessonNo: 5, title: "Lesson 05: Structural Column & Beam Framing Modeling", duration: "2h 15m",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "RCC column grids, framing systems, beam-slab joints, and analytical model validation.",
            resources: [{ name: "RCC_Framing_Model.rvt", size: "24 MB", type: "RVT" }], isCompleted: false, isUnlocked: false,
          },
          {
            id: "les-302", lessonNo: 6, title: "Lesson 06: Automated 3D Rebar Scheduling to BNBC", duration: "2h 30m",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Bar Bending Schedule (BBS) generation, rebar shape code assignment, and construction drafting.",
            resources: [{ name: "BNBC_Rebar_Schedule.xlsx", size: "2.1 MB", type: "XLSX" }], isCompleted: false, isUnlocked: false,
          },
        ],
      },
    ],
  },
  {
    id: "course-tekla-steel",
    title: "Professional Tekla Steel Detailing Masterclass",
    category: "Structural Fabrication",
    batch: "3rd Weekend Batch",
    instructor: "Engr. Mojahedur Rahman",
    thumbnail: "https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&q=80&w=800",
    totalLessons: 3,
    completedLessons: 1,
    progressPercent: 33,
    modules: [
      {
        id: "tek-mod-1", moduleNo: "Module 01", title: "Tekla Environment, 3D Grids & Column Modeling",
        lessons: [
          {
            id: "tek-101", lessonNo: 1, title: "Lesson 01: Tekla Structures Interface & Grid Construction", duration: "1h 50m",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Working planes setup, view filters, and European & US steel profiles database.",
            resources: [{ name: "Tekla_Grid_Config.xml", size: "1.2 MB", type: "XML" }], isCompleted: true, isUnlocked: true,
          },
          {
            id: "tek-102", lessonNo: 2, title: "Lesson 02: Base Plate & Anchor Bolt Joint Connection", duration: "2h 10m",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Column base plate modeling, stiffener plates, and anchor bolt detailing.",
            resources: [{ name: "Base_Plate_Detail.pdf", size: "3.1 MB", type: "PDF" }], isCompleted: false, isUnlocked: true,
          },
        ],
      },
      {
        id: "tek-mod-2", moduleNo: "Module 02", title: "Beam-to-Column Moment & Shear Connections",
        lessons: [
          {
            id: "tek-201", lessonNo: 3, title: "Lesson 03: Moment Connection with Bolted End Plates", duration: "2h 20m",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Moment connections (Component 144), bolt grades, and weld symbols.",
            resources: [{ name: "End_Plate_Sample.zip", size: "14 MB", type: "ZIP" }], isCompleted: false, isUnlocked: false,
          },
        ],
      },
    ],
  },
];
