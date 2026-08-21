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
  regularFee: string;
  discountFee: string;
  fbGroupUrl: string;
  schedule: string;
  duration: string;
  softwareVersion: string;
  metaTitle: string;
  metaKeywords: string;
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
    regularFee: "৳22,000",
    discountFee: "৳18,000",
    fbGroupUrl: "https://facebook.com/groups/bim-revit-combo-8th",
    schedule: "Mon, Wed, Fri (9:00 PM - 11:00 PM)",
    duration: "4.5 Months (45 Classes)",
    softwareVersion: "Revit 2024 + Dynamo 2.19",
    metaTitle: "Revit Architecture, Structure & MEP Online Batch",
    metaKeywords: "BIM Bangladesh, Revit Training, Tekla Detailing",
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
    regularFee: "৳16,000",
    discountFee: "৳14,000",
    fbGroupUrl: "https://facebook.com/groups/bim-revit-arch-5th",
    schedule: "Sun, Tue, Thu (9:00 PM - 11:00 PM)",
    duration: "3.5 Months (36 Classes)",
    softwareVersion: "Autodesk Revit 2024",
    metaTitle: "Revit Architecture & Structure Masterclass",
    metaKeywords: "Revit Architecture, Structural BIM Modeling",
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
    regularFee: "৳15,000",
    discountFee: "৳12,000",
    fbGroupUrl: "https://facebook.com/groups/bim-tekla-steel-3rd",
    schedule: "Sat, Mon, Wed (8:30 PM - 10:30 PM)",
    duration: "3 Months (30 Classes)",
    softwareVersion: "Tekla Structures 2024",
    metaTitle: "Tekla Steel Detailing Industrial Training",
    metaKeywords: "Tekla Structures, Steel Fabrication, BNBC Detailing",
    status: "Ongoing",
  },
];
