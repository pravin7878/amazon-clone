import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './swiperSlide/styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { ProductCard } from './ProductCard';

export default function CustomSlider({ data }) {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data?.map((content, ind) => {
                    return <SwiperSlide className='rounded-lg' key={ind}>
                        <ProductCard {...content}/>
                    </SwiperSlide>
                })}

            </Swiper>
        </>
    );
}
