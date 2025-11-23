import React from 'react';
import { Instagram, Twitter, Facebook, ShieldCheck, Truck, CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 border-b border-gray-200 pb-16">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">جودة مضمونة</h3>
            <p className="text-gray-500 text-sm">محاصيل مختارة بعناية من أفضل المزارع العالمية.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">شحن سريع ومبرد</h3>
            <p className="text-gray-500 text-sm">توصيل لباب بيتك لجميع مناطق المملكة.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
             <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">طرق دفع آمنة</h3>
            <p className="text-gray-500 text-sm">مدى، فيزا، ماستركارد، وApple Pay.</p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex flex-col items-start leading-none mb-6">
              <div className="text-4xl font-black font-serif text-gray-900">
                V<span className="text-primary">Ø</span>ID
              </div>
              <span className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase mt-1">
                ROASTERY
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              محمصة فويد المختصة. علامة تجارية سعودية مسجلة. نقدم القهوة بشغف لكل محبي القهوة في المملكة.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition duration-300"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition duration-300"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition duration-300"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">روابط مهمة</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-primary transition">من نحن</a></li>
              <li><a href="#" className="hover:text-primary transition">اتصل بنا</a></li>
              <li><a href="#" className="hover:text-primary transition">الشحن والتوصيل</a></li>
              <li><a href="#" className="hover:text-primary transition">الاستبدال والاسترجاع</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">التصنيفات</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-primary transition">جميع المحاصيل</a></li>
              <li><a href="#" className="hover:text-primary transition">محاصيل الإسبريسو</a></li>
              <li><a href="#" className="hover:text-primary transition">محاصيل الفلتر</a></li>
              <li><a href="#" className="hover:text-primary transition">العروض الحصرية</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">كن على تواصل</h4>
            <p className="text-sm text-gray-500 mb-4">اشترك في نشرتنا البريدية للحصول على آخر العروض.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary transition"
              />
              <button className="bg-primary text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-primary-hover transition shadow-lg shadow-primary/20">
                اشتراك
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2024 Void Roastery. صنع بحب في السعودية.</p>
          <div className="flex items-center gap-2 opacity-70 grayscale hover:grayscale-0 transition duration-300">
             <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">MADA</div>
             <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">VISA</div>
             <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">Apple</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;