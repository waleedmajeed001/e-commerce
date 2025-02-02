import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-black py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
              <Link href="/" className="block w-56 mb-10">
                <img
                  src="/logofooter.png"
                  alt="Tailwindow Logo"
                  className="w-full"
                />
              </Link>
              <p className="text-justify">
                Over company is new-order now for coupons.
              </p>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Company</h2>
              <ul className="leading-8">
                <li><Link href="#" className="hover:text-blue-400">About Us</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Contact Us</Link></li>
              </ul>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Blog</h2>
              <ul className="leading-8">
                <li><Link href="#" className="hover:text-blue-400">How To order?</Link></li>
                <li><Link href="#" className="hover:text-blue-400">How you get Whatsapp Number?</Link></li>
                <li><Link href="#" className="hover:text-blue-400">How you can get membership?</Link></li>
                <li><Link href="#" className="hover:text-blue-400">How to rate our app?</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Shopping Cart</Link></li>
              </ul>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Us</h2>
              <p className="hover:text-blue-400">0334 7905592</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 w-full sm:w-auto sm:text-left">
              Copyright © {currentYear} . All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
