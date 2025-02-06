'use client';

import Image from 'next/image';

const products = [
  { name: 'Jordan Spizike Low', category: "Men's Shoes", price: 160, image: '/jordan-spizike-low.png' },
  { name: 'Air Jordan 6 Retro', category: "Men's Shoes", price: 200, image: '/air-jordan-6-retro.png' },
  { name: 'Jumpman MVP', category: "Men's Shoes", price: 165, image: '/jumpman-mvp.png' },
  { name: 'Nike Air Max Plus', category: "Men's Shoes", price: 180, image: '/nike-air-max-plus.png' },
  { name: 'Nike Dunk Low', category: "Men's Shoes", price: 140, image: '/nike-dunk-low.png' },
  { name: 'Air Jordan 1 Retro', category: "Men's Shoes", price: 190, image: '/air-jordan-1-retro.png' },
  { name: 'Adidas Ultra Boost', category: "Men's Shoes", price: 220, image: '/adidas-ultra-boost.png' },
  { name: 'Nike Air Force 1', category: "Men's Shoes", price: 130, image: '/nike-air-force-1.png' },
  { name: 'Converse Chuck Taylor', category: "Men's Shoes", price: 75, image: '/converse-chuck-taylor.png' },
  { name: 'Puma Suede Classic', category: "Men's Shoes", price: 85, image: '/puma-suede-classic.png' },
  { name: 'Reebok Club C', category: "Men's Shoes", price: 90, image: '/reebok-club-c.png' },
  { name: 'New Balance 550', category: "Men's Shoes", price: 110, image: '/new-balance-550.png' },
  { name: 'Asics Gel-Kayano 14', category: "Men's Shoes", price: 150, image: '/asics-gel-kayano-14.png' },
  { name: 'Vans Old Skool', category: "Men's Shoes", price: 80, image: '/vans-old-skool.png' },
  { name: 'Nike Pegasus 40', category: "Running Shoes", price: 130, image: '/nike-pegasus-40.png' },
  { name: 'Nike ZoomX Vaporfly', category: "Running Shoes", price: 250, image: '/nike-zoomx-vaporfly.png' },
  { name: 'Nike SB Dunk Low', category: "Skateboarding Shoes", price: 110, image: '/nike-sb-dunk-low.png' },
  { name: 'Salomon XT-6', category: "Trail Running Shoes", price: 200, image: '/salomon-xt-6.png' },
];

export default function Trending() {
  const handleViewAll = () => {
    window.location.href = '/Viewall/trendingall';
  };

  return (
    <div className="bg-black w-full p-6 sm:p-12 dark:bg-gray-900 relative">
      {/* Title & View All Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-center text-gray-100 w-full">Trending</h1>
        <button
          onClick={handleViewAll}
          className="bg-black text-white font-medium py-2 px-4 rounded-lg text-sm hover:bg-red-700 transition-all"
        >
          View All
        </button>
      </div>

      <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group bg-gray-950 hover:bg-gray-950 h-[300px] shadow-md rounded-xl overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-full group-hover:h-48 object-cover rounded-xl transition-all delay-150 duration-300 ease"
            />
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
