import TestimonyItem from '../TestimonyItem/TestimonyItem';
import './TestimonySection.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';
  
// install Swiper modules
SwiperCore.use([Pagination]);

const TestimonySection = ({testimonyData}) => {
    let testimonyItems = testimonyData[0].testimony;
    
    return (
        <section id="TestimonySection">
            <div className="container pt-5">
                <div className="row text-center text-white py-5">
                    <div className="col">
                        <h2 className="section-title-white">Apa Kata Mereka?</h2>
                    </div>
                </div>
                <div className="row justify-content-center pb-5">
                    <div className="col">
                        <Swiper
                            spaceBetween={20}
                            grabCursor={true}
                            slidesPerView={1}
                            pagination={true}
                            loop={true}
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                slidesPerView: 2,
                                },
                                // when window width is >= 768px
                                768: {
                                slidesPerView: 3,
                                },
                                1024: {
                                slidesPerView: 4,
                                },
                            }}
                            style={{paddingBottom: '60px'}}
                        >
                            {testimonyItems.map((item) => {
                                return(
                                    <SwiperSlide key={item.id}>
                                        <TestimonyItem 
                                                name={item.name}
                                                institution={item.institution}
                                                text={item.text}
                                                picture={item.picture}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonySection;
