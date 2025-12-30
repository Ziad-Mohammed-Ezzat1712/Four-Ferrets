// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white rtl px-20 py-16 max-md:px-6">
      {/* Top */}
      <div className="grid grid-cols-4 gap-10 border-b border-white/20 pb-10 max-md:grid-cols-2 max-sm:grid-cols-1">
        
        {/* About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#008236] text-white p-2 rounded-lg">🕌</span>
            <span className="text-lg font-bold">Four Ferrets</span>
          </div>
          <p className="text-gray-300 leading-7">
            نساعدك على أداء العمرة والحج بكل راحة
            <br />
            وثقة منذ 2008
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg mb-5">روابط سريعة</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-[#008236] cursor-pointer">الرئيسية</li>
            <li className="hover:text-[#008236] cursor-pointer">البرامج</li>
            <li className="hover:text-[#008236] cursor-pointer">من نحن</li>
            <li className="hover:text-[#008236] cursor-pointer">التقييمات</li>
            <li className="hover:text-[#008236] cursor-pointer">اتصل بنا</li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-lg mb-5">برامجنا</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-[#008236] cursor-pointer">عمرة اقتصادية</li>
            <li className="hover:text-[#008236] cursor-pointer">عمرة VIP</li>
            <li className="hover:text-[#008236] cursor-pointer">برنامج العائلة</li>
            <li className="hover:text-[#008236] cursor-pointer">عمرة رمضان</li>
            <li className="hover:text-[#008236] cursor-pointer">حج</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg mb-5">تواصل معنا</h4>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#008236]" />
              +966 50 123 4567
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#008236]" />
              info@fourferrets.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#008236]" />
              الرياض، السعودية
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
        <div className="flex gap-4">
          {[FaYoutube, FaInstagram, FaXTwitter, FaFacebookF].map(
            (Icon, i) => (
              <div
                key={i}
                className="bg-neutral-800 p-3 rounded-lg cursor-pointer hover:bg-[#008236] hover:text-black transition"
              >
                <Icon />
              </div>
            )
          )}
        </div>

        <p className="text-gray-400 text-sm">
          © 2024 Four Ferrets Travel. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
