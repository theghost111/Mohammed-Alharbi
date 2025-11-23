import React from 'react';
import { ShoppingCart, Star, Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out"
        />
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
            {product.salePercentage && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                خصم {product.salePercentage}%
            </span>
            )}
            {product.isNew && !product.salePercentage && (
            <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                جديد
            </span>
            )}
        </div>
        
        {/* Quick Add Overlay (Mobile/Desktop Hover) */}
        <button className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg text-gray-800 hover:text-primary hover:bg-white transition-all transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
             <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
            <div className="text-xs text-gray-400 font-medium">{product.category}</div>
            <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-gray-500 font-medium">{product.rating}</span>
            </div>
        </div>
        
        <h3 className="font-bold text-gray-800 text-base mb-2 line-clamp-1 group-hover:text-primary transition">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        
        <div className="mt-auto flex items-end justify-between border-t border-dashed border-gray-100 pt-3">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through decoration-red-400 decoration-1">
                {product.oldPrice.toFixed(0)} ر.س
              </span>
            )}
            <span className="font-bold text-lg text-gray-900 font-sans">
              {product.price.toFixed(0)} <span className="text-xs font-normal text-gray-500">ر.س</span>
            </span>
          </div>
          
          <button className="bg-gray-50 text-primary border border-gray-200 p-2 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
             <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
