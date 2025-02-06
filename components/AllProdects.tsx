'use client';

import Image from 'next/image';

// Array of product objects, containing details like name, category, price, and image
const products = [
  {
    name: 'Jordan Spizike Low',
    category: "Men's Shoes",
    price: 160,
    image: '/jordan-spizike-low.png',
  },
  {
    name: 'Air Jordan 6 Retro',
    category: "Men's Shoes",
    price: 200,
    image: '/air-jordan-6-retro.png',
  },
  {
    name: 'Jumpman MVP',
    category: "Men's Shoes",
    price: 165,
    image: '/jumpman-mvp.png',
  },
  {
    name: 'Nike Air Max Plus',
    category: "Men's Shoes",
    price: 180,
    image: '/nike-air-max-plus.png',
  },
  {
    name: 'Nike Dunk Low',
    category: "Men's Shoes",
    price: 140,
    image: '/nike-dunk-low.png',
  },
];

export default function AllProdects() {

  // Function to handle "View All" button click and navigate to the "ViewAll" page
  const handleViewAll = () => {
    window.location.href = '/Viewall/AllProdects'; // Forces a refresh before navigating
  };

  return (
    <div className="bg-black w-screen p-6 sm:p-12 dark:bg-gray-900 relative">
      {/* View All Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-center text-gray-100 w-full">All Prodects</h1>
        <button
          onClick={handleViewAll} // Corrected to use the handleViewAll function
          className="bg-black text-white font-medium py-2 px-4 rounded-lg text-sm hover:bg-red-700 transition-all"
        >
          ViewAll
        </button>
      </div>
      
      {/* Product grid layout */}
      <div className="mx-auto w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group bg-gray-950 hover:bg-gray-950 h-[300px] shadow-md rounded-xl overflow-hidden"
          >
            {/* Product image */}
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-full group-hover:h-48 object-cover rounded-xl transition-all delay-150 duration-300 ease"
            />
            {/* Product info section */}
            <div className="bg-gray-100 dark:bg-gray-700 w-full h-32 absolute left-0 bottom-0 -mb-32 group-hover:mb-0 rounded-b-xl transition-all delay-150 duration-300 ease">
              <div className="p-4">
                <div className="capitalize flex items-center justify-between gap-2">
                  <div>
                    <h2 className="text-red-600 text-base font-semibold">{product.name}</h2>
                    <p className="dark:text-gray-100 text-sm">{product.category}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold dark:text-gray-100">${product.price}</p>
                  </div>
                </div>
                <div className="block mt-3">
                  {/* Add to cart button */}
                  <div className="absolute bottom-2 left-3">
                    <button className="bg-red-600 text-gray-100 font-medium py-2 px-3 rounded-lg opacity-90 hover:opacity-100 text-sm">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
