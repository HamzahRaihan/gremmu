import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    imageUrl: 'https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/news1.jpeg?updatedAt=1700557487550',
    description: 'Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.',
  },
  {
    id: 2,
    imageUrl: "https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/image-002.png?updatedAt=1697094991271",
    description: "Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.",
  },
  {
    id: 3,
    imageUrl: "https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/Image-001.png?updatedAt=1697094974897",
    description: "Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.",
  },
  {
    id: 4,
    imageUrl: "https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/image-002.png?updatedAt=1697094991271",
    description: "Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.",
  },
  {
    id: 5,
    imageUrl: 'https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/news1.jpeg?updatedAt=1700557487550',
    description: 'Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.',
  },
  {
    id: 6,
    imageUrl: 'https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/news1.jpeg?updatedAt=1700557487550',
    description: 'Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.',
  },
  {
    id: 7,
    imageUrl: "https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/news1.jpeg?updatedAt=1700557487550",
    description: "Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.",
  },
  {
    id: 8,
    imageUrl: "https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/news1.jpeg?updatedAt=1700557487550",
    description: "Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.",
  },
];

const formatDate = () => {
  const currentDate = new Date();
  return currentDate.toDateString();
};

const NewsCarousel = () => {
  return (
    <div className="w-full p-4 sm:p-20">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl mb-6">Berita Terkini</h2>
        <div className="w-[454px] h-[15px] bg-[#000000] rounded-[50px] mb-6" />
        <div className="relative p-4 sm:p-12">
          <FaArrowRightLong className="text-2xl text-[#000000] cursor-pointer swiper-button-next" />
          <FaArrowLeftLong className="text-2xl text-[#000000] cursor-pointer swiper-button-prev" />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          // when window width is >= 375px
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="">
            <div className="flex items-end h-64">
              <img src={item.imageUrl} alt={formatDate()} className="object-cover w-full h-full rounded" />
            </div>
            <div className="py-4 text-black mb-10">
              <h2 className="text-lg font-bold">{formatDate()}</h2>
              <p className="text-sm mb-4">{item.description}</p>
              <button className="font-bold py-2 rounded hover:text-green-600">Baca Selengkapnya</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsCarousel;
