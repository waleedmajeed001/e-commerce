'use client';

import Image from 'next/image';

// Array of products with their details
const products = [
  {
    name: 'Women Golf Surf',
    category: "Men's Shoes",
    price: 14.99,
    image: '/trending.png',
  },
  {
    name: 'TEKFUN LCD',
    category: "Men's Shoes",
    price: 19.99,
    image: '/trending1.png',
  },
  {
    name: 'SAMSUNG Smart LED TV',
    category: "Men's Shoes",
    price: 217,
    image: '/trending2.png',
  },
  {
    name: 'Keep Life Simple T-shirt',
    category: "Men's Shoes",
    price: 2.83,
    image: '/trending3.png',
  },
  {
    name: 'YOOLIFE Gifts for Girls',
    category: "Men's Shoes",
    price: 17,
    image: '/trending4.png',
  },
  {
    name: '',
    category: "Under Armour Men's",
    price: 33.99,
    image: '/trending5.png',
  },
  {
    name: 'Crocs Adult Classic Clog',
    category: "Men's Shoes",
    price: 64.95,
    image: '/trending6.png',
  },
  {
    name: 'TACVASEN Men Jacket',
    category: "Men's Shoes",
    price: 39.85,
    image: '/trending7.png',
  },
  {
    name: 'Feethit Mens Slip',
    category: "Men's Shoes",
    price: 35.99,
    image: '/trending8.png',
  },
  {
    name: 'Men Bomber Jacket',
    category: "Men's Shoes",
    price: 28.79,
    image: '/trending9.png',
  },
  {
    name: 'Kasa Smart Security Camera',
    category: "Men's Shoes",
    price: 19.91,
    image: '/trending10.png',
  },
  {
    name: 'Hooded Active Jacket',
    category: "Men's Shoes",
    price: 64.79,
    image: '/trending11.png',
  },
  {
    name: 'The Children Place Girls',
    category: "Men's Shoes",
    price: 23.98,
    image: '/trending12.png',
  },
  {
    name: 'TP-Link WiFi Router',
    category: "Men's Shoes",
    price: 44.99,
    image: '/trending13.png',
  },
  {
    name: 'HP 67 Black Cartridges ',
    category: "Men's Shoes",
    price: 64.95,
    image: '/trending14.png',
  },
];

export default function TrendingAll() {
  // Handle "View All" button click and navigate to the next page

  return (
    <div className="bg-black w-full p-6 sm:p-12 dark:bg-gray-900 relative">
      {/* Title & View All Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-center text-gray-100 w-full">Trending</h1>
      </div>

      {/* Product Grid */}
      <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
        {/* Map through the products and display each product in a block */}
        {products.map((product, index) => (
          <div
            key={index} // Unique key for each product block
            className="relative group bg-gray-950 hover:bg-gray-950 h-[300px] shadow-md rounded-xl overflow-hidden"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name} // Alt text for accessibility
              width={400}
              height={400}
              className="w-full h-full group-hover:h-48 object-cover rounded-xl transition-all delay-150 duration-300 ease"
            />
            {/* Product Details (Title, Category, Price) */}
            <div className="bg-gray-100 dark:bg-gray-700 w-full h-32 absolute left-0 bottom-0 -mb-32 group-hover:mb-0 rounded-b-xl transition-all delay-150 duration-300 ease">
              <div className="p-4">
                <div className="capitalize flex items-center justify-between gap-2">
                  {/* Product Name and Category */}
                  <div>
                    <h2 className="text-red-600 text-base font-semibold">{product.name}</h2>
                  </div>
                  {/* Product Price */}
                  <div>
                    <p className="text-2xl font-semibold text-black">${product.price}</p>
                  </div>
                </div>
                {/* Add to Cart Button */}
                <div className="block mt-3">
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
