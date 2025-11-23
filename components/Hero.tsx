import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000" 
          alt="Coffee Roasting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-start text-white z-10">
        <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6 inline-block">
             <span className="text-xs font-bold tracking-wider uppercase text-white">
                جودة عالمية • تحميص محلي
            </span>
        </div>
       
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-tight">
          VØID ROASTERY
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed font-light">
          نقدم لك تجربة قهوة استثنائية، نختار أجود المحاصيل بعناية ونحمصها بشغف لتناسب ذائقتك الرفيعة.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-xl font-bold text-lg transition-transform transform hover:scale-105 shadow-lg shadow-primary/30">
            تسوق المحاصيل
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg transition-transform transform hover:scale-105 shadow-lg">
            تصفح العروض
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;