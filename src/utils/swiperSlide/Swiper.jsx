import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function MySlider({ data }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]} 
                className="mySwiper"
            >
                {data?.map((content, ind) => (
                    <SwiperSlide key={ind}>
                        <img className="w-[100%] h-full" src={content} alt={`Slide ${ind + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
