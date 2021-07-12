import './RelatedBooksSection.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import BookItem from '../BookItem/BookItem';

const RelatedBooksSection = () => {
    return (
        <section id="RelatedBooksSection">
            <div className="container my-5">
                <div className="row my-4">
                    <div className="col">
                        <h5><strong>Rekomendasi Buku Lainnya</strong></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col px-3">
                        <Swiper
                            spaceBetween={20}
                            grabCursor={true}
                            slidesPerView={1}
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
                            style={{paddingBottom: '40px'}}
                        >
                            <SwiperSlide key='1'>
                                <BookItem
                                    bookImg=''
                                    category=''
                                    title=''
                                    readUrl=''
                                    detailUrl=''
                                />
                            </SwiperSlide>
                            <SwiperSlide key='2'>
                                <BookItem
                                    bookImg=''
                                    category=''
                                    title=''
                                    readUrl=''
                                    detailUrl=''
                                />
                            </SwiperSlide>
                            <SwiperSlide key='3'>
                                <BookItem
                                    bookImg=''
                                    category=''
                                    title=''
                                    readUrl=''
                                    detailUrl=''
                                />
                            </SwiperSlide>
                            <SwiperSlide key='4'>
                                <BookItem
                                    bookImg=''
                                    category=''
                                    title=''
                                    readUrl=''
                                    detailUrl=''
                                />
                            </SwiperSlide>
                            <SwiperSlide key='5'>
                                <BookItem
                                    bookImg=''
                                    category=''
                                    title=''
                                    readUrl=''
                                    detailUrl=''
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RelatedBooksSection;
