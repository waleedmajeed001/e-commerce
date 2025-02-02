import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-black py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
              <a href="/" className="block w-56 mb-10">
                <img
                  src="/logofooter.png"  // Change this to the correct path to your image
                  alt="Tailwindow Logo"
                  className="w-full"  // You can adjust the size as needed
                />
              </a>
              <p className="text-justify">
                Over compnay is new-oder now for copens.
              </p>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Company</h2>
              <ul className="leading-8">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              </ul>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Blog</h2>
              <ul className="leading-8">
                <li><a href="#" className="hover:text-blue-400 ">How To oder?</a></li>
                <li><a href="#" className="hover:text-blue-400">How you get Whatsapp Number?</a></li>
                <li><a href="#" className="hover:text-blue-400">How you can get mumbership?</a></li>
                <li><a href="#" className="hover:text-blue-400">How to rate over app?</a></li>
                <li><a href="#" className="hover:text-blue-400">Shopping Cart</a></li>
              </ul>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Us</h2>
              <p className="hover:text-blue-400">0334 7905592</p>
              {/* Add other social media links here */}
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
