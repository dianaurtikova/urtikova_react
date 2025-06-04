import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';

const MySlider: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation]}
      loop={true}
      slidesPerView={4}
      slidesPerGroup={1}
      navigation
      className="mySwiper"
      spaceBetween={10} // по желанию, отступы между слайдами
    >
      {/* Пример слайдов */}
      <SwiperSlide><div style={{background: '#ddd', height: '150px'}}>Slide 1</div></SwiperSlide>
      <SwiperSlide><div style={{background: '#bbb', height: '150px'}}>Slide 2</div></SwiperSlide>
      <SwiperSlide><div style={{background: '#999', height: '150px'}}>Slide 3</div></SwiperSlide>
      <SwiperSlide><div style={{background: '#777', height: '150px'}}>Slide 4</div></SwiperSlide>
      <SwiperSlide><div style={{background: '#555', height: '150px'}}>Slide 5</div></SwiperSlide>

      {/* Навигационные кнопки создаются автоматически */}
    </Swiper>
  );
};

export default MySlider;
