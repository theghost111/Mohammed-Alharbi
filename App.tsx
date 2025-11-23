import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import { PRODUCTS } from './constants';
import { ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-right bg-white" dir="rtl">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        
        {/* Featured Products Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-10">
               <div>
                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-serif">وصل حديثاً</h2>
                 <p className="text-gray-500 text-sm md:text-base">اكتشف أحدث محاصيل القهوة المضافة للمتجر</p>
               </div>
               <a href="#" className="group flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition text-sm">
                 <span>عرض الكل</span>
                 <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
               </a>
            </div>
            
            {/* Carousel for mobile, Grid for desktop */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0 no-scrollbar">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-[280px] max-w-[85vw] snap-center md:w-auto md:flex-shrink-1 h-full">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Offers Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-[#111] rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-2xl">
               {/* Pattern Overlay */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
               
               <div className="w-full md:w-1/2 z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    عرض لفترة محدودة
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-serif">
                    بوكس التذوق الملكي
                  </h2>
                  
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
                    تشكيلة فاخرة تضم 3 محاصيل ربع كيلو من أفضل مزارع العالم (أثيوبيا، كولومبيا، برازيل). اكتشف إيحاءات مختلفة تناسب ذائقتك الرفيعة.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 pt-4">
                    <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-primary/25">
                      أضف للسلة - 149 ر.س
                    </button>
                    <div className="flex flex-col">
                        <span className="text-gray-500 line-through text-sm">كان 199 ر.س</span>
                        <span className="text-green-400 font-bold text-sm">وفر 50 ر.س</span>
                    </div>
                  </div>
               </div>
               
               <div className="w-full md:w-1/2 z-10 flex justify-center md:justify-end">
                  <div className="relative">
                      <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full transform translate-x-10 translate-y-10"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1559525839-b184a4d6c5c7?auto=format&fit=crop&q=80&w=800" 
                        alt="Coffee Bundle" 
                        className="relative rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition duration-700 max-w-sm w-full object-cover border border-white/10"
                      />
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default App;