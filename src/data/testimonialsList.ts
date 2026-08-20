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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mojahedur Rahman",
    role: "BIM Modeler",
    company: "Descon Engineering Ltd.",
    course: "Professional Revit Combo Course",
    rating: 5,
    comment: "Taking the Revit Combo Course from BIM Build BD elevated my project handling confidence. The live mentor guidance and flexible installment option made learning seamless!",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "2",
    name: "Md. Mizanur Rahman",
    role: "Structural Engineer",
    company: "Concord Group",
    course: "Revit Architecture + Structure Course",
    rating: 5,
    comment: "The structural rebar detailing and schedule generation methodologies were explained so clearly that I immediately applied them to our real construction projects.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "3",
    name: "Souvik Karmakar",
    role: "MEP Coordinator",
    company: "Freelance / Remote BIM Specialist",
    course: "Revit MEP & Navisworks",
    rating: 5,
    comment: "The clash detection and HVAC ducting modules are world-class. This practical training was a true career game-changer for landing remote BIM contracts.",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80",
  },
];
