import React from 'react';
import { CATEGORIES } from '../constants';

const CategorySection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
             <h2 className="text-xl md:text-2xl font-bold text-gray-900">تسوق حسب الفئة</h2>
        </div>
        
        <div className="flex justify-start md:justify-center overflow-x-auto space-x-reverse space-x-4 md:space-x-12 pb-4 no-scrollbar scroll-smooth">
          {CATEGORIES.map((category) => (
            <div key={category.id} className="flex flex-col items-center min-w-[90px] group cursor-pointer">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 mb-4 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <div className="transform group-hover:scale-110 transition duration-300">
                    {category.icon}
                </div>
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover:text-primary transition">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
