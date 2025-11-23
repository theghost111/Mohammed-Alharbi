import React from 'react';
import { Coffee, Droplet, Package, Filter, Zap } from 'lucide-react';
import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'جميع المحاصيل', icon: <Package className="w-6 h-6" /> },
  { id: '2', name: 'إسبريسو', icon: <Coffee className="w-6 h-6" /> },
  { id: '3', name: 'مقطرة V60', icon: <Filter className="w-6 h-6" /> },
  { id: '4', name: 'كولد برو', icon: <Droplet className="w-6 h-6" /> },
  { id: '5', name: 'عروض حصرية', icon: <Zap className="w-6 h-6" /> },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'إثيوبيا همبيلا',
    description: 'قهوة مختصة بمعالجة مجففة، إيحاءات فاكهية وتوت أزرق.',
    price: 68.00,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    category: 'مقطرة',
    rating: 5,
    isNew: true
  },
  {
    id: '2',
    name: 'كولومبيا سوبريمو',
    description: 'توازن مثالي بين الحموضة والمرارة، مثالية للإسبريسو.',
    price: 54.00,
    oldPrice: 65.00,
    salePercentage: 17,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2ae9638707?auto=format&fit=crop&q=80&w=800',
    category: 'إسبريسو',
    rating: 4.8
  },
  {
    id: '3',
    name: 'برازيل سيرادو',
    description: 'إيحاءات المكسرات والشوكولاتة، قوام ممتلئ ومناسب للحليب.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    category: 'إسبريسو',
    rating: 4.6
  },
  {
    id: '4',
    name: 'محصول اليوم (بليند)',
    description: 'خلطة خاصة للإسبريسو ومشروبات الحليب.',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1587049633312-d6289532eb0e?auto=format&fit=crop&q=80&w=800',
    category: 'إسبريسو',
    rating: 4.7
  },
  {
    id: '5',
    name: 'رواندا كارونجي',
    description: 'قهوة معقدة مع نغمات من الشاي الأسود والحمضيات.',
    price: 72.00,
    image: 'https://images.unsplash.com/photo-1552346989-e069318e2035?auto=format&fit=crop&q=80&w=800',
    category: 'مقطرة',
    rating: 4.9,
    isNew: true
  },
  {
    id: '6',
    name: 'اليمن حراز',
    description: 'محصول فاخر، قوام ثقيل مع حلاوة التمر والبهارات.',
    price: 115.00,
    oldPrice: 130.00,
    salePercentage: 12,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
    category: 'مقطرة',
    rating: 5.0
  },
];