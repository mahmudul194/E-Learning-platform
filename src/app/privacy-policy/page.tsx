import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-slate-700 text-xs sm:text-sm">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">গোপনীয়তা নীতি (Privacy Policy)</h1>
        <p className="text-slate-500">সর্বশেষ আপডেট: আগস্ট ২০২৬</p>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">১. তথ্য সংগ্রহ ও ব্যবহার</h2>
          <p>Advance BIM Institute শিক্ষার্থীদের নাম, ইমেইল, মোবাইল নম্বর এবং পেশাগত তথ্য শুধুমাত্র ভর্তি, ক্লাস লিঙ্ক সরবরাহ ও সার্টিফিকেট প্রস্তুতকরণের উদ্দেশ্যে সংরক্ষণ করে।</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">২. পেমেন্ট ও লেনদেন নিরাপত্তা</h2>
          <p>বিকাশ, নগদ, রকেট ও SSLCommerz-এর মাধ্যমে কৃত সকল লেনদেন এনক্রিপ্টেড এবং ব্যাংকিং সিকিউরিটি প্রোটোকল মেনে সম্পন্ন হয়।</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">৩. তথ্যের সুরক্ষা</h2>
          <p>শিক্ষার্থীদের কোনো ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রয় বা শেয়ার করা হয় না।</p>
        </section>
      </div>
    </div>
  );
}
