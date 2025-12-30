// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "../Home/Home.module.css";
import Navebar from "../Navebar/Navebar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import img1 from "../../../Images/home1.png";
import img2 from "../../../Images/home2.png";
import img3 from "../../../Images/home3.png";
import img4 from "../../../Images/home4.png";
import col1 from "../../../Images/col1.png";

import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <div
        id="header"
        className={`${style.src} mb-6 relative w-full min-h-screen pb-7 bg-center text-white`}
      >
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        <Navebar />
        <Header />
      </div>

      <section className="bg-white w-[98%] rounded-2xl mx-auto lg:mb-5">
        <div className="mx-auto text-center">
          {/* العنوان الرئيسي */}
          <div className="mx-auto max-w-7xl pt-4 mb-20 px-4">
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-extrabold mb-2 font-sansita">
              تعرف علي{" "}
              <span className="text-white bg-red-600 font-medium px-4 py-2 rounded-xl">
                فيرتس ترافل
              </span>
            </h2>
            <p
              className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] mb-12 font-inter"
              dir="rtl"
            >
              فور فيرتس ترافل، منصة سفر مبتكرة تجمع أدوات الرحلة الأساسية عبر
              حلول تقنية متكاملة....هدفنا تبسيط رحلتك من البداية حتي النهاية
            </p>
          </div>

          {/* الأهداف */}
          <div className="flex flex-col lg:flex-row justify-between items-center shadow-2xl px-4 py-6 gap-6">
            <img
              src={img1}
              alt="home1"
              className="w-full max-w-[546px] h-auto"
            />
            <div className="text-right max-w-5xl">
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold">
                الأهداف
              </h1>
              <p
                className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px]"
                dir="rtl"
              >
                تسعى شركة فور فيرتس ترافل إلى أن تكون من الشركات الرائدة في مجال
                تنظيم رحلات الحج والعمرة، من خلال تقديم خدمات عالية الجودة تضمن
                الراحة والأمان لضيوف الرحمن، وبناء علاقة طويلة الأمد قائمة على
                الثقة والالتزام، مع التطوير المستمر في مستوى التنظيم والخدمة.
              </p>
            </div>
          </div>

          {/* رسالتنا */}
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center shadow-2xl px-4 py-6 gap-6">
            <div className="text-right max-w-5xl">
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold">
                رسالتنا
              </h1>
              <p
                className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] "
                dir="rtl"
              >
                تتمثل رسالتنا في تيسير أداء مناسك الحج والعمرة لعملائنا الكرام،
                وتقديم تجربة روحانية متكاملة في أجواء يسودها الاطمئنان والسكينة،
                وذلك عبر تنظيم دقيق، وخدمات مدروسة، وفريق عمل متخصص يرافق
                المعتمرين والحجاج في جميع مراحل الرحلة.
              </p>
            </div>
            <img
              src={img2}
              alt="home2"
              className="w-full max-w-[546px] h-auto"
            />
          </div>

          {/* تخصصنا */}
          <div className="flex flex-col lg:flex-row justify-between items-center shadow-2xl px-4 py-6 gap-6">
            <img
              src={img3}
              alt="home3"
              className="w-full max-w-[546px] h-auto"
            />
            <div className="text-right max-w-5xl">
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold mb-6">
                تخصصنا
              </h1>
              <p
                className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px]"
                dir="rtl"
              >
                نحن متخصصون في تنظيم برامج الحج والعمرة بمختلف فئاتها، مع توفير
                باقات متنوعة تناسب احتياجات العملاء المختلفة، تشمل:
                <ul className="list-disc list-inside space-y-2 text-right">
                  <li> برامج إقامة مميزة في مكة المكرمة والمدينة المنورة</li>
                  <li> تنظيم كامل لإجراءات السفر والتأشيرات</li>
                  <li> إشراف ومتابعة مستمرة طوال مدة الرحلة</li>
                </ul>
              </p>
            </div>
          </div>

          {/* خدماتنا */}
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center shadow-2xl px-4 py-6 gap-6">
            <div className="text-right max-w-5xl">
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold mb-6">
                خدماتنا
              </h1>
              <ul
                className="list-disc list-inside space-y-2 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px]"
                dir="rtl"
              >
                <li>
                  {" "}
                  الإقامة في فنادق مميزة بمكة المكرمة على مقربة من الحرم الشريف
                </li>
                <li> فنادق شريكة في المدينة المنورة توفر الراحة والهدوء</li>
                <li>
                  {" "}
                  خدمات فندقية متكاملة تشمل مطاعم تقدم المأكولات العربية
                  والدولية
                </li>
                <li> مركز اتصالات حديث لمتابعة احتياجات العملاء</li>
                <li> تجهيزات خاصة لخدمة ذوي الاحتياجات الخاصة لضمان راحتهم </li>
                <li> مميزات التعاقد معنا</li>
              </ul>
            </div>
            <img
              src={img4}
              alt="home4"
              className="w-full max-w-[546px] h-auto"
            />
          </div>

          {/* مميزات التعاقد معنا */}
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center shadow-2xl px-4 py-6 gap-6">
            <div>
              {" "}
              <img src={img4} alt="home1"  className="w-full max-w-[546px] h-auto"/>{" "}
            </div>{" "}
            <div className="text-right max-w-5xl">
              {" "}
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold mb-6">
                {" "}
                مميزات التعاقد معنا{" "}
              </h1>{" "}
             
                {" "}
                <ul
                   className="list-disc list-inside space-y-2 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px]"
                dir="rtl"
                >
                  {" "}
                  <li> استخراج تأشيرة العمرة من خلال مكاتب الشركة</li>{" "}
                  <li>
                    {" "}
                    نقل من وإلى المطار داخل المملكة العربية السعودية عند إصدار
                    التأشيرة من خلال الشركة{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    أسعار مخفضة وخصومات على وسائل النقل الداخلي داخل المملكة{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    المساعدة في حجز تذاكر الطيران وإعادة تأكيد مواعيد العودة{" "}
                  </li>{" "}
                  <li>دعم ومتابعة مستمرة قبل وأثناء الرحلة</li>{" "}
                </ul>{" "}
             
            </div>
          </div>

          {/* الكروت */}
          <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center px-4">
            {/* برنامج العائلة */}
            <div className="bg-white w-full max-w-[490px] h-full flex flex-col space-y-6 text-center shadow-md rounded-xl p-10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src={col1}
                alt="motion"
                className="w-full max-w-[332px] mx-auto"
              />
              <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold font-sansita mb-10">
                برنامج العائلة
              </h3>

              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> مناسبة للعائلات
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> غرف عائلية واسعة
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> برنامج ترفيهي للأطفال
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> وجبات متنوعة
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> نقل مريح
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> خصومات الأطفال
              </p>

              <button className="bg-[#35840D] px-10 sm:px-16 lg:px-20 py-2 rounded-2xl text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] mt-auto transition-all duration-300 hover:shadow-[0_0_25px_rgba(53,132,13,0.8)] cursor-pointer">
                تفاصيل البرنامج
              </button>
            </div>

            {/* عمرة VIP */}
            <div className="bg-white w-full max-w-[490px] h-full flex flex-col space-y-6 text-center shadow-md rounded-xl p-10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src={col1}
                alt="motion"
                className="w-full max-w-[332px] mx-auto"
              />
              <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold font-sansita mb-10">
                عمرة VIP
              </h3>

              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> تذاكر طيران درجة أولي
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> فنادق 5 نجوم بإطلالة
                علي الحرم
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> وجبات فاخرة 3 مرات
                يومياً
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> نقل خاص فاخر
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> مرشد خاص
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> زيارة المعالم
                التاريخية
              </p>

              <button className="bg-[#35840D] px-10 sm:px-16 lg:px-20 py-2 rounded-2xl text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] mt-auto transition-all duration-300 hover:shadow-[0_0_25px_rgba(53,132,13,0.8)] cursor-pointer">
                تفاصيل البرنامج
              </button>
            </div>

            {/* عمرة اقتصادية */}
            <div className="bg-white w-full max-w-[490px] h-full flex flex-col space-y-6 text-center shadow-md rounded-xl p-10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src={col1}
                alt="motion"
                className="w-full max-w-[332px] mx-auto"
              />
              <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold font-sansita mb-10">
                عمرة اقتصادية
              </h3>

              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> تذاكر طيران ذهاب
                وعودة
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> إقامة 3 نجوم قريبة من
                الحرم
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> وجبتي إفطار وعشاء
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> نقل جماعي مكيف
              </p>
              <p
                className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-4  justify-start"
                dir="rtl"
              >
                <CheckCircle className="text-green-500" /> إرشاد ديني
              </p>

              <button className="bg-[#35840D] px-10 sm:px-16 lg:px-20 py-2 rounded-2xl text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] mt-auto transition-all duration-300 hover:shadow-[0_0_25px_rgba(53,132,13,0.8)] cursor-pointer">
                تفاصيل البرنامج
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
