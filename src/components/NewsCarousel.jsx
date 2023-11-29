import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    imageUrl: 'https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/news1.jpeg?updatedAt=1700557487550',
    description: 'Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.',
  },
  {
    id: 3,
    imageUrl: 'https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/news1.jpeg?updatedAt=1700557487550',
    description: 'Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.',
  },
  {
    id: 4,
    imageUrl: 'https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/news1.jpeg?updatedAt=1700557487550',
    description: 'Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.',
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
];

const formatDate = () => {
  const currentDate = new Date();
  return currentDate.toDateString();
};

const NewsCarousel = () => {
  return (
    <div className="max-w-7xl px-5 m-auto flex justify-between items-center mb-10 ">
      <div className="w-full ">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl mb-6">Berita Terkini</h2>
          <div className="flex w-96 h-[16px] bg-[#000000] rounded-[50px] mb-6 max-[980px]:hidden" />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{ clickable: true }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="relative">
              <div className="flex items-end h-64">
                <img src={item.imageUrl} alt={formatDate()} className="object-cover w-full h-full rounded" />
              </div>
              <div className="p-4 text-black mb-10">
                <h2 className="text-lg font-bold">{formatDate()}</h2>
                <p className="text-sm mb-4">{item.description}</p>
                <button className="font-bold py-2 rounded">Baca Selengkapnya</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsCarousel;
