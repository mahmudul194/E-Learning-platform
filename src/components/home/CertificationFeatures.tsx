import React from "react";
import {
  Layers,
  Award,
  Briefcase,
  Video,
  Globe,
  CheckCircle,
} from "lucide-react";

export default function CertificationFeatures() {
  const features = [
    {
      icon: Layers,
      title: "Working Drawing Mastery",
      titleBn: "আর্কিটেকচার, স্ট্রাকচারাল ও MEP ওয়ার্কিং ড্রয়িং",
      description:
        "Architecture, Structural, HVAC, Plumbing, Firefighting & Electrical ফুল ওয়ার্কিং ড্রয়িংস ও শিট জেনারেশন শিখুন সরাসরি ইন্ডাস্ট্রি স্ট্যান্ডার্ডে।",
      color: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
    },
    {
      icon: Award,
      title: "Industry Recognized Certificate",
      titleBn: "ইন্ডাস্ট্রি-স্বীকৃত BIM প্রফেশনাল সার্টিফিকেট",
      description:
        "কোর্স সমাপ্তির পর ইউনিক কিউআর কোড ও অনলাইন ভেরিফিকেশনসহ অফিসিয়াল সার্টিফিকেট যা দেশি-বিদেশি জবে গ্রহণযোগ্য।",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      icon: Briefcase,
      title: "Real-Life Projects & Guidance",
      titleBn: "হ্যান্ডস-অন লাইভ প্রজেক্ট ও এক্সপার্ট গাইডেন্স",
      description:
        "শুধু থিওরি নয়, একাধিক রিয়েল-লাইফ রেসিডেন্সিয়াল ও কমার্শিয়াল প্রজেক্টে হাতেকলমে মডেলিং এবং অভিজ্ঞ ইঞ্জিনিয়ারদের সরাসরি মেন্টরিং।",
      color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    },
    {
      icon: Video,
      title: "Flexible Learning & Recordings",
      titleBn: "ফ্লেক্সিবল লাইভ ক্লাস ও রেকর্ডেড ব্যাকআপ",
      description:
        "লাইভ ইন্টারেক্টিভ জুম ক্লাসের পাশাপাশি প্রতিটি ক্লাসের লাইফটাইম ফুল এইচডি রেকর্ডিং ও প্র্যাকটিস ফাইলস স্টুডেন্ট পোর্টালে সংরক্ষিত থাকবে।",
      color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30",
    },
    {
      icon: Globe,
      title: "Global Career Readiness",
      titleBn: "জাতীয় ও আন্তর্জাতিক প্রজেক্টের উপযোগী স্কিল",
      description:
        "আন্তর্জাতিক BIM স্ট্যান্ডার্ড (LOD 100 to 400), ক্ল্যাশ ডিটেকশন ও অটোমেশন শিখে দেশের বাইরে রিমোট জব ও ফ্রিল্যান্সিংয়ে এগিয়ে থাকুন।",
      color: "from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Why Choose Advance BIM Institute</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            What You’ll Learn & Get Certified
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            আমাদের বাস্তবমুখী কারিকুলাম ও সাপোর্ট সিস্টেম আপনাকে ইন্ডাস্ট্রির প্রথম সারির BIM প্রফেশনাল হিসেবে প্রস্তুত করবে।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/40 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{item.titleBn}</h3>
                <div className="text-xs font-medium text-slate-400 mb-3 uppercase tracking-wider">
                  {item.title}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
