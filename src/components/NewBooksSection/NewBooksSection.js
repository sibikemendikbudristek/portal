import BookItem from '../BookItem/BookItem';
import './NewBooksSection.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';

const NewBooksSection = ({bookData}) => {
    let newBookItems = bookData[0].newbooks;
    
    return (
        <section id="NewBooksSection">
            <div className="container py-5 px-5 px-md-0">
                <div className="row my-5">
                    <div className="col">
                        <h2 className="section-title text-center">Buku Terbaru</h2>
                        <p className="text-center w-75 mx-auto">Pelajari buku yang kamu mau</p>
                        <span className="section-line" />
                    </div>
                </div>
                <div className="row justify-content-center my-5">
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
                        {newBookItems.map((bookItem, index) => {
                            return(
                                <div className="col-md-3 my-3" key={index}>
                                <SwiperSlide key={bookItem.id}>
                                    <BookItem
                                        bookImg={bookItem.bookImg}
                                        category={bookItem.category}
                                        title={bookItem.title}
                                        readUrl={bookItem.readUrl}
                                        detailUrl={bookItem.detailUrl}
                                    />
                                </SwiperSlide>
                            </div>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="row my-5">
                    <div className="col text-center">
                        <a className="btn btn-outline-primary py-3 px-4 rounded-pill" href="!#">Lihat Semua</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewBooksSection;
