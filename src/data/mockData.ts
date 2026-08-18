export interface Course {
  id: string;
  title: string;
  titleBn?: string;
  slug: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  totalClasses: number;
  batchNo: string;
  price: number;
  originalPrice: number;
  installmentAvailable: boolean;
  installmentDetails?: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  image: string;
  badge?: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  features: string[];
  description: string;
}

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

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  course: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const CATEGORIES = [
  { id: "all", name: "All Courses", count: 8 },
  { id: "bim-combo", name: "Revit Combo (Arch + Struct + MEP)", count: 2 },
  { id: "architecture", name: "Revit Architecture", count: 2 },
  { id: "structure", name: "Revit Structure", count: 2 },
  { id: "mep", name: "Revit MEP & HVAC", count: 1 },
  { id: "autocad", name: "Professional AutoCAD", count: 1 },
  { id: "dynamo", name: "Revit Dynamo & Navisworks", count: 2 },
];

export const COURSES: Course[] = [
  {
    id: "revit-combo-pro",
    title: "Professional Revit Combo Course (Architecture, Structure & MEP)",
    titleBn: "প্রফেশনাল রেভিট কম্বো কোর্স (আর্কিটেকচার, স্ট্রাকচার ও এমইপি)",
    slug: "professional-revit-combo-course",
    category: "bim-combo",
    level: "All Levels",
    duration: "5 to 6 Months",
    totalClasses: 48,
    batchNo: "8th Batch",
    price: 18000,
    originalPrice: 25000,
    installmentAvailable: true,
    installmentDetails: "৩ মাসে ধাপে ধাপে সহজ কিস্তিতে পেমেন্ট সুবিধা",
    rating: 4.9,
    reviewsCount: 142,
    studentsCount: 620,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular",
    instructor: {
      name: "Engr. Ashikur Rahman",
      role: "Lead BIM Specialist & Trainer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    features: [
      "Architecture, Structural, HVAC, Plumbing & Electrical Working Drawings",
      "ইন্ডাস্ট্রি স্ট্যান্ডার্ড লাইভ প্রজেক্ট প্র্যাকটিস",
      "রেকর্ডেড ভিডিও ব্যাকআপ ও লাইফটাইম রিসোর্স এক্সেস",
      "ইন্টারন্যাশনাল মানের BIM প্রফেশনাল সার্টিফিকেট",
      "সরাসরি জুম লাইভ ক্লাস ও ২৪/৭ ডেডিকেটেড সাপোর্ট",
    ],
    description: "Autodesk Revit-এর সম্পূর্ণ আর্কিটেকচারাল, স্ট্রাকচারাল এবং MEP ওয়ার্কিং মেথডোলজি শিখে আন্তর্জাতিক ও জাতীয় লেভেলে ক্যারিয়ার গড়ুন।",
  },
  {
    id: "revit-arch-struct",
    title: "Professional Revit Architecture + Structure Course",
    titleBn: "প্রফেশনাল রেভিট আর্কিটেকচার + স্ট্রাকচার কোর্স",
    slug: "professional-revit-architecture-structure",
    category: "bim-combo",
    level: "Intermediate",
    duration: "3 to 4 Months",
    totalClasses: 36,
    batchNo: "5th Batch",
    price: 14000,
    originalPrice: 18000,
    installmentAvailable: true,
    installmentDetails: "৩ মাসে ধাপে ধাপে পেমেন্ট সুবিধা",
    rating: 4.85,
    reviewsCount: 98,
    studentsCount: 450,
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    badge: "Trending",
    instructor: {
      name: "Engr. Mojahedur Rahman",
      role: "Senior BIM Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    features: [
      "Complete 3D Building Modeling & Detailing",
      "Structural Column, Beam, Footing & Rebar Detailing",
      "Sheet Creation, Schedules & Quantity Takeoff",
      "AutoCAD to Revit Workflow Transformation",
    ],
    description: "বিল্ডিং আর্কিটেকচার এবং স্ট্রাকচারাল ডিজাইনকে সম্পূর্ণ অটোমেশন ও BIM স্ট্যান্ডার্ডে রূপান্তর করার কমপ্লিট কোর্স।",
  },
  {
    id: "revit-mep",
    title: "Professional Revit MEP Course (HVAC, Plumbing & Electrical)",
    titleBn: "প্রফেশনাল রেভিট এমইপি কোর্স",
    slug: "professional-revit-mep-course",
    category: "mep",
    level: "Intermediate",
    duration: "2 to 3 Months",
    totalClasses: 28,
    batchNo: "4th Batch",
    price: 12000,
    originalPrice: 16000,
    installmentAvailable: true,
    installmentDetails: "৩ মাসে কিস্তিতে পেমেন্ট সুবিধা",
    rating: 4.9,
    reviewsCount: 76,
    studentsCount: 310,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    badge: "High Demand",
    instructor: {
      name: "Engr. Md. Ariful Haque",
      role: "MEP Design Consultant",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    features: [
      "HVAC Ductwork & Mechanical Equipment Sizing",
      "Plumbing Piping & Drainage Layout System",
      "Electrical Lighting, Cable Tray & Conduit Modeling",
      "Clash Detection with Navisworks",
    ],
    description: "কমার্শিয়াল ও রেসিডেন্সিয়াল মেকানিক্যাল, ইলেকট্রিক্যাল এবং প্লাম্বিং সিস্টেমের ইন্ডাস্ট্রি-লেভেল মডেলিং ও ড্রয়িং শিখুন।",
  },
  {
    id: "revit-navisworks",
    title: "Professional Navisworks & Clash Detection Course",
    titleBn: "প্রফেশনাল নেভিসওয়ার্কস ও ক্ল্যাশ ডিটেকশন কোর্স",
    slug: "professional-revit-navisworks-course",
    category: "dynamo",
    level: "Intermediate",
    duration: "1 to 2 Months",
    totalClasses: 16,
    batchNo: "3rd Batch",
    price: 8000,
    originalPrice: 11000,
    installmentAvailable: true,
    installmentDetails: "২ ধাপে পেমেন্ট সুবিধা",
    rating: 4.8,
    reviewsCount: 54,
    studentsCount: 220,
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    instructor: {
      name: "Engr. Ashikur Rahman",
      role: "BIM Coordination Expert",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    features: [
      "BIM Model Coordination & Hard/Soft Clash Test",
      "TimeLiner 4D Construction Simulation",
      "Quantity Takeoff & Clash Matrix Reporting",
    ],
    description: "প্রজেক্টের সাইট কনস্ট্রাকশনের আগেই ডিজাইন এরর ও ক্ল্যাশ সমাধান করতে নেভিসওয়ার্কসের মাস্টারক্লাস।",
  },
  {
    id: "autocad-pro",
    title: "Professional 2D & 3D AutoCAD Drafting Course",
    titleBn: "প্রফেশনাল অটোক্যাড ২ডি এবং ৩ডি ড্রাফটিং কোর্স",
    slug: "professional-autocad-course",
    category: "autocad",
    level: "Beginner",
    duration: "2 to 3 Months",
    totalClasses: 24,
    batchNo: "6th Batch",
    price: 7500,
    originalPrice: 10000,
    installmentAvailable: true,
    installmentDetails: "৩ মাসে ধাপে ধাপে পেমেন্ট সুবিধা",
    rating: 4.95,
    reviewsCount: 180,
    studentsCount: 890,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    badge: "Best for Beginners",
    instructor: {
      name: "Engr. Matiur Rahaman",
      role: "Senior CAD Architect",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    },
    features: [
      "Architectural Floor Plan, Section & Elevation",
      "Municipal Approval Drawing Preparation",
      "Layer Management, Blocks & Plotting Setup",
    ],
    description: "বিল্ডিং প্ল্যানিং এবং আর্কিটেকচারাল ওয়ার্কিং ড্রয়িং তৈরির পূর্ণাঙ্গ প্র্যাকটিক্যাল গাইড।",
  },
  {
    id: "revit-dynamo",
    title: "Professional Revit Dynamo & Parametric Design",
    titleBn: "প্রফেশনাল রেভিট ডাইনামো ও প্যারামেট্রিক ডিজাইন",
    slug: "professional-revit-dynamo-course",
    category: "dynamo",
    level: "Advanced",
    duration: "2 to 3 Months",
    totalClasses: 20,
    batchNo: "2nd Batch",
    price: 11000,
    originalPrice: 15000,
    installmentAvailable: true,
    installmentDetails: "৩ মাসে ধাপে ধাপে পেমেন্ট সুবিধা",
    rating: 4.88,
    reviewsCount: 41,
    studentsCount: 175,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    badge: "Advanced",
    instructor: {
      name: "Engr. Souvik Karmakar",
      role: "Computational Design Specialist",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    },
    features: [
      "Visual Programming for Revit Automation",
      "Complex Parametric Geometry Creation",
      "Excel to Revit Data Exchange & Batch Renaming",
    ],
    description: "রেভিটের জটিল ও পুনরাবৃত্তিমূলক কাজগুলোকে ডাইনামো স্ক্রিপ্টিং দিয়ে অটোমেট করার অ্যাডভান্সড কোর্স।",
  },
];

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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mojahedur Rahman",
    role: "BIM Modeler",
    company: "Descon Engineering Ltd.",
    course: "Professional Revit Combo Course",
    rating: 5,
    comment: "Advance BIM Institute থেকে রেভিট কম্বো কোর্সটি করার পর আমার প্রজেক্ট হ্যান্ডলিং কনফিডেন্স অনেক বেড়ে গেছে। ট্রেইনারদের লাইভ সাপোর্ট এবং ইনস্টলমেন্টে ফি পরিশোধের সুবিধা সত্যি প্রশংসনীয়!",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "2",
    name: "Md. Mizanur Rahman",
    role: "Structural Engineer",
    company: "Concord Group",
    course: "Revit Architecture + Structure Course",
    rating: 5,
    comment: "স্ট্রাকচারাল রিবর ডিটেইলিং ও শিডিউল বের করার মেথডোলজিগুলো এত সহজ করে বুঝিয়ে দেওয়া হয়েছে যে আমি সরাসরি আমার রিয়েল প্রজেক্টে কাজে লাগাতে পারছি।",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "3",
    name: "Souvik Karmakar",
    role: "MEP Coordinator",
    company: "Freelance / Remote BIM Specialist",
    course: "Revit MEP & Navisworks",
    rating: 5,
    comment: "ক্ল্যাশ ডিটেকশন ও এইচভিএসি ডাক্টিং নিয়ে এত ডিটেইলড রিসোর্স বাংলাদেশে আর কোথাও পাইনি। দেশের বাইরে রিমোট জবের জন্য এই ট্রেনিং গেম চেঞ্জার ছিল।",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80",
  },
];

export const FAQS = [
  {
    question: "কোর্স ফি কি কিস্তিতে (Installment) পরিশোধ করা যাবে?",
    answer: "হ্যাঁ! আমাদের প্রায় প্রতিটি ৩-৬ মাসের প্রফেশনাল কোর্সে ৩ মাসে সহজ ধাপে ধাপে কিস্তিতে (Installment) কোর্স ফি পরিশোধ করার সুবিধা রয়েছে। ভর্তি হওয়ার সময় প্রথম কিস্তি এবং পরবর্তী মাসগুলোতে বাকি কিস্তি দিতে পারবেন।",
  },
  {
    question: "ক্লাসগুলো কিভাবে পরিচালিত হবে?",
    answer: "সবগুলো ক্লাস সরাসরি Zoom / Google Meet-এর মাধ্যমে লাইভ ইন্টারঅ্যাক্টিভ পদ্ধতিতে নেওয়া হয়। প্রতিটি ক্লাসের পর এইচডি ভিডিও রেকর্ডিং এবং প্রজেক্ট ফাইল স্টুডেন্ট পোর্টালে যুক্ত করে দেওয়া হয়।",
  },
  {
    question: "পেমেন্ট কোন কোন মাধ্যমে দেওয়া যাবে?",
    answer: "আমরা বাংলাদেশের যেকোনো মোবাইল ব্যাংকিং (bKash, Nagad, Rocket), ডেবিট/ক্রেডিট কার্ড (SSLCommerz) এবং সরাসরি ব্যাংক ট্রান্সফারের মাধ্যমে সুরক্ষিতভাবে ফি গ্রহণ করি।",
  },
  {
    question: "কোর্স শেষে সার্টিফিকেট প্রদান করা হবে কি?",
    answer: "হ্যাঁ, সফলভাবে প্রতিটি অ্যাসাইনমেন্ট, কুইজ এবং ফাইনাল ক্যাপিং প্রজেক্ট জমা দেওয়ার পর ইন্ডাস্ট্রি-স্বীকৃত ভেরিফাইড প্রফেশনাল BIM সার্টিফিকেট প্রদান করা হয়।",
  },
  {
    question: "কোনো সমস্যা হলে কি লাইভ সাপোর্ট পাওয়া যাবে?",
    answer: "অবশ্যই! ক্লাস চলাকালীন ছাড়াও আমাদের ডেডিকেটেড সাপোর্ট গ্রুপ এবং ইন্সট্রাক্টরদের মাধ্যমে ২৪/৭ টেকনিক্যাল সমস্যার সমাধান ও ইনস্টলেশন সাপোর্ট দেওয়া হয়।",
  },
];

export const PLATFORM_STATS = [
  { value: "5,000+", label: "সফল শিক্ষার্থী (Students)", sub: "Active Community" },
  { value: "15+", label: "প্রফেশনাল কোর্স ও মডিউল", sub: "BIM & CAD Specialization" },
  { value: "98%", label: "সন্তুষ্টি ও ক্যারিয়ার প্লেসমেন্ট", sub: "Positive Rating" },
  { value: "100%", label: "লাইভ প্রজেক্ট ভিত্তিক ট্রেনিং", sub: "Hands-on Practice" },
];
