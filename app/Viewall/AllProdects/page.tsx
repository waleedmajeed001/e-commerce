'use client';

import Image from 'next/image';

// Array holding all product details (name, category, price, image)
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
    name: 'Air Jordan 1 High OG',
    category: "Men's Shoes",
    price: 170,
    image: '/air-jordan-1-high-og.png',
  },
  {
    name: 'Nike Air Force 1',
    category: "Men's Shoes",
    price: 120,
    image: '/nike-air-force-1.png',
  },
  {
    name: 'Adidas Ultraboost 22',
    category: "Men's Shoes",
    price: 180,
    image: '/adidas-ultraboost-22.png',
  },
  {
    name: 'Reebok Classic Leather',
    category: "Men's Shoes",
    price: 100,
    image: '/reebok-classic-leather.png',
  },
  {
    name: 'Converse Chuck Taylor',
    category: "Men's Shoes",
    price: 65,
    image: '/converse-chuck-taylor.png',
  },
  {
    name: 'Puma Suede Classic',
    category: "Men's Shoes",
    price: 90,
    image: '/puma-suede-classic.png',
  },
  {
    name: 'New Balance 990v5',
    category: "Men's Shoes",
    price: 175,
    image: '/new-balance-990v5.png',
  },
  {
    name: 'Asics Gel-Lyte III',
    category: "Men's Shoes",
    price: 130,
    image: '/asics-gel-lyte-iii.png',
  },
  {
    name: 'Vans Old Skool',
    category: "Men's Shoes",
    price: 60,
    image: '/vans-old-skool.png',
  },
  {
    name: 'Under Armour Curry 8',
    category: "Men's Shoes",
    price: 160,
    image: '/under-armour-curry-8.png',
  },
  {
    name: 'Skechers Go Walk',
    category: "Men's Shoes",
    price: 75,
    image: '/skechers-go-walk.png',
  },
  {
    name: 'Fila Disruptor II',
    category: "Men's Shoes",
    price: 85,
    image: '/fila-disruptor-ii.png',
  },
  {
    name: 'Nike Air Zoom Pegasus',
    category: "Men's Shoes",
    price: 120,
    image: '/nike-air-zoom-pegasus.png',
  },
];

// Main component rendering the trending products
export default function AllProdects() {


  return (
    <div className="bg-black w-full p-6 sm:p-12 dark:bg-gray-900 relative">
      {/* Title and View All Button Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-center text-gray-100 w-full">All Prodects</h1>
      </div>

      {/* Grid layout for displaying products */}
      <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
        {products.map((product, index) => (
          <div
            key={index} // Unique key for each product block
            className="relative group bg-gray-950 hover:bg-gray-950 h-[300px] shadow-md rounded-xl overflow-hidden"
          >
            {/* Product image */}
            <Image
              src={product.image} // Dynamic image source
              alt={product.name}  // Alt text for image
              width={400}
              height={400}
              className="w-full h-full group-hover:h-48 object-cover rounded-xl transition-all delay-150 duration-300 ease"
            />

            {/* Product info box that appears on hover */}
            <div className="bg-gray-100 dark:bg-gray-700 w-full h-32 absolute left-0 bottom-0 -mb-32 group-hover:mb-0 rounded-b-xl transition-all delay-150 duration-300 ease">
              <div className="p-4">
                {/* Product name, category, and price */}
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
