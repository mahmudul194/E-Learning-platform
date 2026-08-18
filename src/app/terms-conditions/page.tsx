import React from "react";

export default function TermsConditionsPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-slate-700 text-xs sm:text-sm">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">ব্যবহারের শর্তাবলী (Terms & Conditions)</h1>
        <p className="text-slate-500">সর্বশেষ আপডেট: আগস্ট ২০২৬</p>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">১. ক্লাস ও রিসোর্স অ্যাক্সেস</h2>
          <p>ভর্তিকৃত শিক্ষার্থী তার নিজস্ব স্টুডেন্ট পোর্টালের মাধ্যমে ক্লাস রেকর্ডিং এবং প্রজেক্ট ফাইলস ব্যক্তিগত শেখার জন্য ব্যবহার করতে পারবেন। কোনো রিসোর্স বাণিজ্যিক উদ্দেশ্যে কপি বা পুনর্বিতরণ সম্পূর্ণ নিষিদ্ধ।</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">২. কিস্তি পরিশোধের সময়সীমা</h2>
          <p>কিস্তি সুবিধায় ভর্তিকৃত শিক্ষার্থীদের পরবর্তী কিস্তির ফি নির্ধারিত তারিখের মধ্যে পরিশোধ করতে হবে।</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">৩. সার্টিফিকেট অর্জনের শর্ত</h2>
          <p>কোর্সের ন্যূনতম ৮০% উপস্থিতি এবং প্রদত্ত ক্যাপিং প্রজেক্ট সফলভাবে জমা দেওয়া সাপেক্ষে সার্টিফিকেট প্রদান করা হবে।</p>
        </section>
      </div>
    </div>
  );
}
