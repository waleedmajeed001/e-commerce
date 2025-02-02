"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, 
  FaRegUser, FaShoppingBag, FaSearch 
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdGlobe } from "react-icons/io";

const Header = () => {
  const handleClick = (platform: string) => {
    console.log(`${platform} icon clicked`);
    // You can also open links, trigger modals, or handle other events
  };

  return (
    <header className="w-full border-b border-black bg-black">
      {/* Top Icons Row */}
      <div className="flex justify-between items-center py-2 px-4 md:px-10">
        {/* Left Side Icons */}
        <div className="flex gap-3 text-gray-300 text-lg">
          <button onClick={() => handleClick("Facebook")} className="hover:text-blue-400 hover:scale-125"><FaFacebookF /></button>
          <button onClick={() => handleClick("Instagram")} className="hover:text-blue-400 hover:scale-125"><FaInstagram /></button>
          <button onClick={() => handleClick("YouTube")} className="hover:text-blue-400 hover:scale-125"><FaYoutube /></button>
        </div>

        {/* Center Logo */}
        <Image src="/logo.png" alt="Simonetta Logo" width={140} height={40} className="mx-auto" />

        {/* Right Side Icons */}
        <div className="flex gap-3 text-gray-300 text-lg">
          <button onClick={() => handleClick("Location")} className="hover:text-blue-400 hover:scale-125"><IoLocationOutline /></button>
          <button onClick={() => handleClick("Language")} className="hover:text-blue-400 hover:scale-125"><IoMdGlobe /></button>
          <button onClick={() => handleClick("Search")} className="hover:text-blue-400 hover:scale-125"><FaSearch /></button>
          <button onClick={() => handleClick("Email")} className="hover:text-blue-400 hover:scale-125"><FaEnvelope /></button>
          <button onClick={() => handleClick("User Profile")} className="hover:text-blue-400 hover:scale-125"><FaRegUser /></button>
          <button onClick={() => handleClick("Shopping Bag")} className="hover:text-blue-400 hover:scale-125"><FaShoppingBag /></button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="text-center border-t border-gray-300">
        <ul className="flex justify-center gap-5 text-sm text-gray-300 py-2 uppercase">
          <Link href="/girl" className="hover:text-blue-400 hover:scale-105">Girl</Link>
          <Link href="/baby-girl" className="hover:text-blue-400 hover:scale-105">Baby Girl</Link>
          <Link href="/accessories" className="hover:text-blue-400 hover:scale-105">Accessories</Link>
          <Link href="/caffe-dorzo" className="hover:text-blue-400 hover:scale-105">Caffè D'Orzo</Link>
          <Link href="/capsule-luisa" className="hover:text-blue-400 hover:scale-105">Capsule Luisa Beccaria</Link>
          <Link href="/gift-card" className="hover:text-blue-400 hover:scale-105">Gift Card</Link>
          <Link href="/special-price" className="hover:text-blue-400 hover:scale-105">Special Price</Link>
          <Link href="/simonetta-world" className="hover:text-blue-400 hover:scale-105">Simonetta World</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
