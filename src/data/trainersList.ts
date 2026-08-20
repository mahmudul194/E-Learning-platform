export interface Trainer {
  id: string;
  name: string;
  role: string;
  organization: string;
  experience: string;
  image: string;
  bio: string;
  coursesCount: number;
  studentsCount: number;
  specialties: string[];
}

export const TRAINERS: Trainer[] = [
  {
    id: "ashikur-rahman",
    name: "Engr. Ashikur Rahman (Ovi)",
    role: "Lead BIM Specialist & Founder",
    organization: "Advance BIM / NextByteIT",
    experience: "8+ Years Industry Experience",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Autodesk Certified Professional with extensive experience leading international BIM projects and training over 2,000+ engineers.",
    coursesCount: 3,
    studentsCount: 2400,
    specialties: ["Revit Architecture", "Navisworks Coordination", "BIM Management"],
  },
  {
    id: "mojahedur-rahman",
    name: "Engr. Mojahedur Rahman",
    role: "Senior Structural BIM Consultant",
    organization: "Advance BIM Institute",
    experience: "6+ Years Experience",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Specialist in structural concrete/steel detailing, reinforcement schedule extraction, and building stability modeling in Revit Structure.",
    coursesCount: 2,
    studentsCount: 1650,
    specialties: ["Revit Structure", "Rebar Detailing", "Quantity Takeoff"],
  },
  {
    id: "ariful-haque",
    name: "Engr. Md. Ariful Haque",
    role: "Lead MEP Systems Engineer",
    organization: "Advance BIM Institute",
    experience: "7+ Years Experience",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Expert in HVAC mechanical calculations, firefighting piping codes, plumbing slope engineering, and electrical BIM integration.",
    coursesCount: 2,
    studentsCount: 1200,
    specialties: ["HVAC Ducting", "Firefighting Design", "Revit MEP"],
  },
  {
    id: "matiur-rahaman",
    name: "Engr. Matiur Rahaman",
    role: "Senior Architectural Drafter",
    organization: "Advance BIM Institute",
    experience: "10+ Years Experience",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Master draftsman with deep expertise in Rajuk/Municipal approval drawings, architectural working drawings, and 2D/3D CAD.",
    coursesCount: 2,
    studentsCount: 3100,
    specialties: ["AutoCAD 2D/3D", "Working Drawings", "Municipal Plans"],
  },
];
