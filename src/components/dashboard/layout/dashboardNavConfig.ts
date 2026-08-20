import {
  Sparkles,
  BookOpen,
  Video,
  FileCheck,
  Award,
  CreditCard,
  FolderDown,
  Upload,
  Users,
  Layers,
  BarChart3,
  User,
  LucideIcon,
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
}

export const STUDENT_NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "Overview", icon: Sparkles },
  { id: "courses", label: "Course & Videos", icon: BookOpen, badge: "28/45" },
  { id: "live", label: "Live Schedule", icon: Video, badge: "Live" },
  { id: "assignments", label: "Assignments", icon: FileCheck, badge: "1 Due" },
  { id: "resources", label: "Project Files", icon: FolderDown },
  { id: "payments", label: "Installments", icon: CreditCard, badge: "৳4k Due" },
  { id: "certificate", label: "Certificate", icon: Award },
  { id: "profile", label: "Settings", icon: User },
];

export const INSTRUCTOR_NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "Instructor Overview", icon: Sparkles },
  { id: "batches", label: "Active Batches", icon: BookOpen, badge: "3 Batches" },
  { id: "live_host", label: "Host Live Zoom", icon: Video, badge: "Host" },
  { id: "grading", label: "Review Submissions", icon: FileCheck, badge: "12 Due" },
  { id: "materials", label: "Upload Lectures", icon: Upload },
  { id: "profile", label: "Profile", icon: User },
];

export const ADMIN_NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "Admin Overview", icon: Sparkles },
  { id: "admissions", label: "Admissions & TrxID", icon: CreditCard, badge: "2 Pending" },
  { id: "students", label: "Student Database", icon: Users, badge: "5,240" },
  { id: "batches", label: "Batch Manager", icon: Layers },
  { id: "revenue", label: "Financial Reports", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: User },
];
