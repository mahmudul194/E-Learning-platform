export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "Can I pay the course fee in installments?",
    answer: "Yes! Almost all of our 3 to 6-month professional courses offer flexible 3-month installment plans. You pay the first installment upon admission and the remaining portions in subsequent months.",
  },
  {
    question: "How are classes conducted?",
    answer: "All classes are held live and interactively via Zoom or Google Meet. Full HD recorded backups and practice files are uploaded to your Student Portal after every session.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We support bKash, Nagad, Rocket, debit/credit cards (Visa, MasterCard via SSLCommerz), and direct secure bank transfers.",
  },
  {
    question: "Will I receive a verified certificate upon completion?",
    answer: "Yes! Upon submitting all assignments, quizzes, and the final capstone project, you receive an industry-recognized QR-verified BIM Professional Certificate.",
  },
  {
    question: "Is there live technical support if I face issues?",
    answer: "Absolutely! Our dedicated mentor support team and instructor channels are available to assist with software installation, model debugging, and project doubts.",
  },
];

export const PLATFORM_STATS = [
  { value: "5,000+", label: "Successful Students", sub: "Active Community" },
  { value: "15+", label: "Professional Courses & Modules", sub: "BIM & CAD Specialization" },
  { value: "98%", label: "Satisfaction & Placement Rate", sub: "Positive Rating" },
  { value: "100%", label: "Live Project-Based Training", sub: "Hands-on Practice" },
];
