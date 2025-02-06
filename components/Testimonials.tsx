import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="p-8 bg-black text-white">
      <h2 className="text-xl font-bold text-blue-600 mb-6 text-center">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6 justify-center">
        {/* Testimonial Card */}
        <div className="bg-black shadow-lg rounded-xl p-6 flex flex-col items-center text-center h-[350px] border-2 border-gray-500">
          <Image
            src="/logo.png"
            alt="Rehman Ismail"
            width={100}  
            height={100}  
            className="rounded-full mb-4"
          />
          <h3 className="font-bold text-gray-200">Waleed Majeed</h3>
          <p className="text-sm text-gray-400">CEO & Founder Invision</p>
          <p className="text-pink-500 text-8xl mt-2">&ldquo;</p>
          <p className="text-gray-300 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, ligula non odio.
          </p>
        </div>

        {/* Promotional Banner - Takes More Space */}
        <div className="relative rounded-xl overflow-hidden md:col-span-2 h-[350px] border-2 border-gray-500">
          <Image
            src="/banner1.png"
            alt="Summer Collection"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-6 rounded-xl">
            <div className="text-center">
              <span className="bg-black text-white text-xs px-3 py-1 rounded-full">25% Discount</span>
              <h3 className="text-lg font-bold text-gray-200 mt-2">Summer Collection</h3>
              <p className="text-sm text-gray-300">
                Starting @ <span className="font-bold">$20</span>{" "}
                <a href="#" className="text-blue-600 font-bold">Shop Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
