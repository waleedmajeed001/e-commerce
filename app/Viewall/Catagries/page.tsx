'use client';

import Image from 'next/image';

const categories = [
  { name: 'Men\'s Shoes', products: [
    { name: 'Jordan Spizike Low', price: 160, image: '/jordan-spizike-low.png' },
    { name: 'Air Jordan 6 Retro', price: 200, image: '/air-jordan-6-retro.png' },
    { name: 'Jumpman MVP', price: 165, image: '/jumpman-mvp.png' },
    { name: 'Nike Air Max Plus', price: 180, image: '/nike-air-max-plus.png' },
    { name: 'Nike Dunk Low', price: 140, image: '/nike-dunk-low.png' },
  ]},
  { name: 'Women\'s Shoes', products: [
    { name: 'Nike Air Max 97', price: 170, image: '/nike-air-max-97.png' },
    { name: 'Adidas Superstar', price: 120, image: '/adidas-superstar.png' },
    { name: 'Converse All Star', price: 100, image: '/converse-all-star.png' },
    { name: 'Puma Cali', price: 130, image: '/puma-cali.png' },
    { name: 'Reebok Classic', price: 110, image: '/reebok-classic.png' },
  ]},
  { name: 'Jewelries', products: [
    { name: 'Gold Necklace', price: 500, image: '/gold-necklace.png' },
    { name: 'Silver Earrings', price: 150, image: '/silver-earrings.png' },
    { name: 'Platinum Ring', price: 1000, image: '/platinum-ring.png' },
    { name: 'Diamond Bracelet', price: 2000, image: '/diamond-bracelet.png' },
    { name: 'Sapphire Pendant', price: 750, image: '/sapphire-pendant.png' },
  ]},
  { name: 'Perfumes', products: [
    { name: 'Chanel No.5', price: 120, image: '/chanel-no5.png' },
    { name: 'Dior Sauvage', price: 150, image: '/dior-sauvage.png' },
    { name: 'Gucci Bloom', price: 130, image: '/gucci-bloom.png' },
    { name: 'Tom Ford Black Orchid', price: 200, image: '/tom-ford-black-orchid.png' },
    { name: 'Yves Saint Laurent', price: 140, image: '/ysl-perfume.png' },
  ]},
  { name: 'Watches', products: [
    { name: 'Rolex Submariner', price: 8500, image: '/rolex-submariner.png' },
    { name: 'Omega Seamaster', price: 5000, image: '/omega-seamaster.png' },
    { name: 'Tag Heuer Monaco', price: 3500, image: '/tag-heuer-monaco.png' },
    { name: 'Patek Philippe Calatrava', price: 25000, image: '/patek-philippe-calatrava.png' },
    { name: 'Audemars Piguet Royal Oak', price: 22000, image: '/audemars-piguet-royal-oak.png' },
  ]},
  { name: 'Bags', products: [
    { name: 'Louis Vuitton Monogram', price: 2500, image: '/lv-monogram-bag.png' },
    { name: 'Gucci GG Marmont', price: 2000, image: '/gucci-gg-marmont.png' },
    { name: 'Chanel Classic Flap', price: 5000, image: '/chanel-classic-flap.png' },
    { name: 'Prada Saffiano', price: 1500, image: '/prada-saffiano.png' },
    { name: 'Fendi Peekaboo', price: 3000, image: '/fendi-peekaboo.png' },
  ]},
  { name: 'Hats', products: [
    { name: 'Nike Cap', price: 25, image: '/nike-cap.png' },
    { name: 'Adidas Snapback', price: 30, image: '/adidas-snapback.png' },
    { name: 'Puma Beanie', price: 20, image: '/puma-beanie.png' },
    { name: 'Under Armour Hat', price: 28, image: '/under-armour-hat.png' },
    { name: 'New Era Cap', price: 35, image: '/new-era-cap.png' },
  ]},
  { name: 'Sunglasses', products: [
    { name: 'Ray-Ban Aviator', price: 150, image: '/rayban-aviator.png' },
    { name: 'Oakley Frogskins', price: 120, image: '/oakley-frogskins.png' },
    { name: 'Maui Jim', price: 180, image: '/maui-jim.png' },
    { name: 'Prada Sport', price: 250, image: '/prada-sport.png' },
    { name: 'Gucci GG0061S', price: 350, image: '/gucci-gg0061s.png' },
  ]},
  { name: 'Laptops', products: [
    { name: 'MacBook Pro 16"', price: 2399, image: '/macbook-pro-16.png' },
    { name: 'Dell XPS 13', price: 1299, image: '/dell-xps-13.png' },
    { name: 'HP Spectre x360', price: 1499, image: '/hp-spectre-x360.png' },
    { name: 'Lenovo ThinkPad X1', price: 1600, image: '/lenovo-thinkpad-x1.png' },
    { name: 'Microsoft Surface Laptop', price: 1300, image: '/surface-laptop.png' },
  ]},
  { name: 'Tablets', products: [
    { name: 'iPad Pro 12.9"', price: 1099, image: '/ipad-pro-12-9.png' },
    { name: 'Samsung Galaxy Tab S7', price: 649, image: '/samsung-galaxy-tab-s7.png' },
    { name: 'Microsoft Surface Pro 7', price: 749, image: '/surface-pro-7.png' },
    { name: 'Amazon Fire HD 10', price: 150, image: '/amazon-fire-hd10.png' },
    { name: 'Lenovo Tab P11', price: 349, image: '/lenovo-tab-p11.png' },
  ]},
];

export default function Categories() {
  return (
    <div className="bg-black w-full p-6 sm:p-12 dark:bg-gray-900">
      {/* Loop through categories */}
      {categories.map((category, index) => (
        <div key={index} className="mb-16">
          {/* Category Title */}
          <h2 className="text-3xl font-semibold text-center text-gray-100 mb-8">{category.name}</h2>

          {/* Product Grid for each category */}
          <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
            {category.products.map((product, productIndex) => (
              <div
                key={productIndex}
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
                        <p className="dark:text-gray-100 text-sm">Category: {category.name}</p>
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
      ))}
    </div>
  );
}
