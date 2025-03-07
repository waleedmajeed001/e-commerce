'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b shadow-sm bg-black text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center text-center px-6 py-2 text-sm bg-gray-950">
        <div className="flex space-x-3">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="text-gray-400 font-semibold">FREE SHIPPING THIS WEEK ORDER OVER - $55</p>
        <div className="flex justify-center">
          <span className="text-gray-400">USD $ ▼</span>
          <span className="text-gray-400">English ▼</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <Image src="/logo.png" alt="Rehman Store Logo" width={120} height={50} />
        </div>
        <div className="flex-1 max-w-xl mx-6 relative">
          <input
            type="text"
            placeholder="Enter any product name..."
            className="w-full p-2 pl-4 border rounded-full bg-gray-800 text-white placeholder-gray-400"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="flex items-center space-x-6">
          <User className="text-gray-400" size={24} />
          <div className="relative">
            <Heart className="text-gray-400" size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">0</span>
          </div>
          <div className="relative">
            <ShoppingBag className="text-gray-400" size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">0</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="border-t border-gray-700">
        <ul className="flex justify-center space-x-9 items-center py-3 font-semibold text-white">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/Viewall/trendingall">TRENDING</Link></li>
          <li><Link href="/Viewall/favorate">FAVORITE</Link></li>
          <li><Link href="/Viewall/Catagries">CATEGORIES</Link></li>
          <li><Link href="/Viewall/jewely">JEWELRY</Link></li>
          <li><Link href="/Viewall/Profum">PERFUME</Link></li>
          <li><Link href="/Viewall/Watchs">WATCHES</Link></li>
          <li><Link href="/Viewall/AllProdects">ALL PRODUCTS</Link></li>
        </ul>
      </nav>
    </header>
  );
}
