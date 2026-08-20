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
      titleEn: "Architecture, Structural & MEP Drawings",
      description:
        "Learn architectural, structural, HVAC, plumbing, firefighting, and electrical working drawings and sheet generation to global industry standards.",
      color: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
    },
    {
      icon: Award,
      title: "Industry Recognized Certificate",
      titleEn: "Verified BIM Professional Credential",
      description:
        "Earn an official verified certificate featuring a unique QR code and online credential validation, recognized by top engineering firms.",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      icon: Briefcase,
      title: "Real-Life Projects & Guidance",
      titleEn: "Hands-on Modeling & Expert Mentoring",
      description:
        "Go beyond theory with hands-on practice on real residential and commercial projects, backed by direct mentorship from senior BIM consultants.",
      color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    },
    {
      icon: Video,
      title: "Flexible Learning & Recordings",
      titleEn: "Live Zoom Classes & Full HD Backups",
      description:
        "Attend interactive live Zoom sessions and access full HD recorded backups, sample models, and exercise files anytime on your student portal.",
      color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30",
    },
    {
      icon: Globe,
      title: "Global Career Readiness",
      titleEn: "National & International Job Standards",
      description:
        "Master international BIM standards (LOD 100 to 400), clash detection, and automation to excel in domestic careers and global remote freelance roles.",
      color: "from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Why Choose BIM Build BD</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            What You’ll Learn & Get Certified
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Our practical project curriculum and dedicated support empower you to become a leading BIM specialist in the AEC industry.
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
                <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                <div className="text-xs font-semibold text-sky-400 mb-3 tracking-wide">
                  {item.titleEn}
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
