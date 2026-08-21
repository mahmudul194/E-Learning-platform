import { PendingApproval } from "@/types/dashboard";

export interface AdminStudent {
  id: string;
  name: string;
  roll: string;
  email: string;
  phone: string;
  course: string;
  batch: string;
  paidAmount: string;
  totalFee: string;
  paymentStatus: "Paid" | "Partial" | "Overdue";
  joinDate: string;
}

export interface AdminBatch {
  id: string;
  name: string;
  code: string;
  instructor: string;
  enrolledStudents: number;
  maxSeats: number;
  startDate: string;
  fee: string;
  status: "Enrolling" | "Ongoing" | "Completed";
}

export const MOCK_ADMIN_STUDENTS: AdminStudent[] = [
  {
    id: "std-1",
    name: "Md. Ariful Islam",
    roll: "BIM-2026-0842",
    email: "ariful.civil@gmail.com",
    phone: "+880 1811-223344",
    course: "Revit Combo (Arch + Struct + MEP)",
    batch: "8th Batch",
    paidAmount: "৳18,000",
    totalFee: "৳18,000",
    paymentStatus: "Paid",
    joinDate: "Aug 02, 2026",
  },
  {
    id: "std-2",
    name: "Tanvir Ahmed",
    roll: "BIM-2026-0855",
    email: "tanvir.engr@gmail.com",
    phone: "+880 1722-334455",
    course: "Professional Tekla Steel Detailing",
    batch: "3rd Batch",
    paidAmount: "৳4,000",
    totalFee: "৳12,000",
    paymentStatus: "Partial",
    joinDate: "Aug 10, 2026",
  },
  {
    id: "std-3",
    name: "Nusrat Jahan",
    roll: "BIM-2026-0861",
    email: "nusrat.arch@gmail.com",
    phone: "+880 1933-445566",
    course: "Revit Architecture + Structure",
    batch: "5th Batch",
    paidAmount: "৳14,000",
    totalFee: "৳14,000",
    paymentStatus: "Paid",
    joinDate: "Aug 12, 2026",
  },
  {
    id: "std-4",
    name: "Kazi Sazzad Hossain",
    roll: "BIM-2026-0870",
    email: "sazzad.bim@gmail.com",
    phone: "+880 1644-556677",
    course: "Revit Dynamo Automation",
    batch: "2nd Batch",
    paidAmount: "৳5,000",
    totalFee: "৳10,000",
    paymentStatus: "Partial",
    joinDate: "Aug 15, 2026",
  },
];

export const MOCK_ADMIN_BATCHES: AdminBatch[] = [
  {
    id: "bat-8",
    name: "Professional Revit Combo Pro",
    code: "REV-8TH",
    instructor: "Engr. Ashikur Rahman",
    enrolledStudents: 42,
    maxSeats: 50,
    startDate: "Sep 01, 2026",
    fee: "৳18,000",
    status: "Enrolling",
  },
  {
    id: "bat-5",
    name: "Revit Architecture + Structure",
    code: "REV-5TH",
    instructor: "Engr. Mojahedur Rahman",
    enrolledStudents: 36,
    maxSeats: 40,
    startDate: "Jul 15, 2026",
    fee: "৳14,000",
    status: "Ongoing",
  },
  {
    id: "bat-3",
    name: "Tekla Steel Detailing Masterclass",
    code: "TEK-3RD",
    instructor: "Engr. Maidul Islam",
    enrolledStudents: 30,
    maxSeats: 35,
    startDate: "Aug 01, 2026",
    fee: "৳12,000",
    status: "Ongoing",
  },
];
