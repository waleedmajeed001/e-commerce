'use client';

import Image from 'next/image';

// Array of products, each with a name, category, price, and image.
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
  {
    name: 'Adidas Ultraboost',
    category: "Men's Shoes",
    price: 180,
    image: '/adidas-ultraboost.png',
  },
  {
    name: 'Puma RS-X',
    category: "Men's Shoes",
    price: 150,
    image: '/puma-rsx.png',
  },
  {
    name: 'Converse Chuck Taylor',
    category: "Men's Shoes",
    price: 50,
    image: '/converse-chuck-taylor.png',
  },
  {
    name: 'Reebok Classic Leather',
    category: "Men's Shoes",
    price: 75,
    image: '/reebok-classic-leather.png',
  },
  {
    name: 'Vans Old Skool',
    category: "Men's Shoes",
    price: 65,
    image: '/vans-old-skool.png',
  },
  {
    name: 'Nike Air Force 1',
    category: "Men's Shoes",
    price: 90,
    image: '/nike-air-force-1.png',
  },
  {
    name: 'New Balance 990v5',
    category: "Men's Shoes",
    price: 175,
    image: '/new-balance-990v5.png',
  },
  {
    name: 'Under Armour Curry One',
    category: "Men's Shoes",
    price: 130,
    image: '/under-armour-curry-one.png',
  },
];

export default function Trending() {
  // Function to handle the "View All" button click, redirects to the View All page.
  return (
    <div className="bg-black w-full p-6 sm:p-12 dark:bg-gray-900 relative">
      {/* Title & View All Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-center text-gray-100 w-full">Favorate</h1>
      </div>

      {/* Grid Layout for Products */}
      <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
        {/* Mapping over the products array to render each product block */}
        {products.map((product, index) => (
          <div
            key={index} // Unique key for each block
            className="relative group bg-gray-950 hover:bg-gray-950 h-[300px] shadow-md rounded-xl overflow-hidden"
          >
            {/* Product Image */}
            <Image
              src={product.image} // Image path
              alt={product.name} // Image alt text
              width={400} // Image width
              height={400} // Image height
              className="w-full h-full group-hover:h-48 object-cover rounded-xl transition-all delay-150 duration-300 ease"
            />
            
            {/* Product Info Section (hidden initially, shown on hover) */}
            <div className="bg-gray-100 dark:bg-gray-700 w-full h-32 absolute left-0 bottom-0 -mb-32 group-hover:mb-0 rounded-b-xl transition-all delay-150 duration-300 ease">
              <div className="p-4">
                <div className="capitalize flex items-center justify-between gap-2">
                  <div>
                    {/* Product Name and Category */}
                    <h2 className="text-red-600 text-base font-semibold">{product.name}</h2>
                    <p className="dark:text-gray-100 text-sm">{product.category}</p>
                  </div>
                  <div>
                    {/* Product Price */}
                    <p className="text-2xl font-semibold dark:text-gray-100">${product.price}</p>
                  </div>
                </div>
                <div className="block mt-3">
                  {/* Add to Cart Button */}
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
