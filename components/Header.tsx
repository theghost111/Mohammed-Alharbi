import React, { useState } from 'react';
import { Search, Heart, User, ShoppingCart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 h-24 flex items-center justify-between gap-8">
        
        {/* Logo */}
        <a href="#" className="flex flex-col items-center justify-center leading-none group shrink-0">
          <div className="text-4xl md:text-5xl font-black tracking-tight font-serif text-gray-900 group-hover:text-gray-800 transition-colors">
            V<span className="text-primary">Ø</span>ID
          </div>
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] text-gray-500 uppercase mt-1 group-hover:text-primary transition-colors">
            ROASTERY
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-reverse space-x-8 text-sm font-bold text-gray-600">
          <a href="#" className="text-primary hover:text-primary-hover transition">الرئيسية</a>
          <a href="#" className="hover:text-primary transition">جميع المحاصيل</a>
          <a href="#" className="hover:text-primary transition text-red-500">العروض</a>
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex flex-1 max-w-sm items-center bg-gray-50 border border-transparent focus-within:border-gray-200 focus-within:bg-white rounded-full px-4 py-2.5 transition-all duration-300">
          <Search className="w-5 h-5 text-gray-400 ml-2" />
          <input 
            type="text" 
            placeholder="ابحث عن محصول..." 
            className="bg-transparent border-none outline-none w-full text-sm text-right placeholder-gray-400"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-reverse space-x-2 md:space-x-4 shrink-0">
          <button className="hidden sm:flex p-2.5 hover:bg-gray-100 rounded-full transition text-gray-600 hover:text-primary">
            <User className="w-5 h-5" />
          </button>
          <button className="hidden sm:flex p-2.5 hover:bg-gray-100 rounded-full transition text-gray-600 hover:text-primary relative">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2.5 hover:bg-gray-100 rounded-full transition text-gray-900 relative group">
            <ShoppingCart className="w-5 h-5 group-hover:text-primary transition" />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center ring-2 ring-white">2</span>
          </button>
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 space-y-1">
             <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3 mb-4">
              <Search className="w-5 h-5 text-gray-400 ml-2" />
              <input 
                type="text" 
                placeholder="بحث..." 
                className="bg-transparent border-none outline-none w-full text-sm text-right"
              />
            </div>
            <a href="#" className="text-gray-800 font-bold text-sm py-3 px-2 rounded-lg hover:bg-gray-50">الرئيسية</a>
            <a href="#" className="text-gray-800 font-bold text-sm py-3 px-2 rounded-lg hover:bg-gray-50">جميع المحاصيل</a>
            <a href="#" className="text-gray-800 font-bold text-sm py-3 px-2 rounded-lg hover:bg-gray-50">العروض</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;