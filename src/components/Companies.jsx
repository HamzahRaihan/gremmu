import { Swiper, SwiperSlide } from 'swiper/react';

const Companies = () => {
  return (
    <div className="flex items-center h-full bg-white">
      <Swiper spaceBetween={50} slidesPerView={4} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <img src="https://ik.imagekit.io/irfantonov111/Rexel%20logo.png?updatedAt=1700466528533" alt="rexel logo" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://ik.imagekit.io/irfantonov111/Greenpeace%20logo.png?updatedAt=1700466528378" alt="greenpeace logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://ik.imagekit.io/irfantonov111/BBC%20logo.png?updatedAt=1700466528243" alt="bbc logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://ik.imagekit.io/irfantonov111/aiden_adn%20logo.png?updatedAt=1700466528354" alt="aiden logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://ik.imagekit.io/irfantonov111/BBC%20logo.png?updatedAt=1700466528243" alt="bbc logo" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Companies;
