export interface UserAccount {
  username: string;
  email: string;
  password: string;
  name: string;
  nameEn: string;
  role: "student" | "instructor" | "admin";
  roleTitle: string;
  avatar: string;
  details: string;
}

export const DUMMY_ACCOUNTS: UserAccount[] = [
  {
    username: "student",
    email: "student@bimbuild.com",
    password: "123",
    name: "Md. Ariful Islam",
    nameEn: "Md. Ariful Islam",
    role: "student",
    roleTitle: "BIM Student",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    details: "Roll: BIM-2026-0842 • 5th Batch",
  },
  {
    username: "instructor",
    email: "instructor@bimbuild.com",
    password: "123",
    name: "Engr. Maidul Islam",
    nameEn: "Engr. Maidul Islam",
    role: "instructor",
    roleTitle: "Lead BIM & Tekla Trainer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    details: "Senior Structural & BIM Engineer",
  },
  {
    username: "admin",
    email: "admin@bimbuild.com",
    password: "123",
    name: "BIM Build BD Admin",
    nameEn: "System Administrator",
    role: "admin",
    roleTitle: "Super Admin & Controller",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    details: "Full LMS Platform Control",
  },
];
