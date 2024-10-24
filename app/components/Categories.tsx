// components/Categories.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface Category {
  color: string;
  icon: string;
  title: string;
  desc: string;
  image: string;
}

const categories: Category[] = [
  {
    color: "bg-blue-600",
    icon: "/music-icon.png",
    title: "Music",
    desc: "Music makes everything better, and these games will grove to it!",
    image: "/hiphop-panda.png"
  },
  {
    color: "bg-green-700",
    icon: "/table-game-icon.png",
    title: "Table Games",
    desc: "The classic table games for the gentlemen and ladies.",
    image: "/european-blackjack.png"
  },
];

const HottestCategory: React.FC = () => {
  return (
    <section className='mt-10'>
      <div className='flex justify-between'>
        <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center md:text-left">Hottest Category</h2>
        <div className='hidden md:flex'>
          <img className="w-6 h-6 cursor-pointer" src="/previous-icon.png" alt="Previous" />
          <img className="w-6 h-6 cursor-pointer" src="/next-icon.png" alt="Next" />
        </div>
      </div>
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-white shadow-lg rounded-3xl overflow-hidden p-6 bg-gray-200">
            <div className="flex flex-row gap-6 h-full">
              {/* Left Section */}
              <div className='flex flex-col h-full flex-1'>
                <div className={`p-4 text-white rounded-2xl ${category.color} flex-grow`}>
                  <img className="w-8 h-8 object-cover mb-4" src={category.icon} alt="Category Icon" />
                  <h3 className='text-2xl font-semibold'>{category.title}</h3>
                  <p className='my-6 text-gray-300'>{category.desc}</p>
                </div>
                {/* Small images */}
                <div className='flex gap-4 mt-4'>
                  <img className="w-full h-auto rounded" src="/avatar-1.png" alt="Avatar 1" />
                  <img className="w-full h-auto rounded" src="/avatar-2.png" alt="Avatar 2" />
                </div>
              </div>

              {/* Right Section */}
              <div className='flex flex-col h-full flex-1'>
                {/* Small images */}
                <div className='flex gap-4 mb-4'>
                  <img className="w-1/2 h-auto rounded" src="/avatar-3.png" alt="Avatar 3" />
                  <img className="w-1/2 h-auto rounded" src="/avatar-4.png" alt="Avatar 4" />
                </div>
                {/* Large image */}
                <div className="flex-grow">
                  <img className="w-full h-auto max-h-60 object-cover rounded-2xl" src={category.image} alt="Category Image" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          loop
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="shadow-lg rounded-3xl overflow-hidden p-6 bg-gray-200">
                <div className="flex flex-row gap-6 h-full">
                  {/* Left Section */}
                  <div className='flex flex-col h-full flex-1'>
                    <div className={`p-4 text-white rounded-2xl ${category.color} flex-grow`}>
                      <img className="!w-8 !h-8 object-cover mb-4" src={category.icon} alt="Category Icon" />
                      <h3 className='text-2xl font-semibold'>{category.title}</h3>
                      <p className='my-6 text-gray-300'>{category.desc}</p>
                    </div>
                    {/* Small images */}
                    <div className='flex gap-4 mt-4'>
                      <img className="w-1/2 h-auto rounded" src="/avatar-1.png" alt="Avatar 1" />
                      <img className="w-1/2 h-auto rounded" src="/avatar-2.png" alt="Avatar 2" />
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className='flex flex-col h-full flex-1'>
                    {/* Small images */}
                    <div className='flex gap-4 mb-4'>
                      <img className="w-1/2 h-auto rounded" src="/avatar-3.png" alt="Avatar 3" />
                      <img className="w-1/2 h-auto rounded" src="/avatar-4.png" alt="Avatar 4" />
                    </div>
                    {/* Large image */}
                    <div className="flex-grow">
                      <img className="w-full h-auto max-h-60 object-cover rounded-2xl" src={category.image} alt="Category Image" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className='md:hidden my-8'>
        <button className="border w-full rounded-lg bg-gray-100 text-black p-4 flex justify-center">
          Load More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HottestCategory;
