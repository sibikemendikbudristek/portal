import "./RelatedBooksSection.scss";
import BookItem from "../BookItem/BookItem";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const RelatedBooksSection = ({ data }) => {
  const relatedBooks = data;

  return (
    <section id="RelatedBooksSection">
      <div className="container my-5">
        <div className="row my-4">
          <div className="col">
            <h5>
              <strong>Rekomendasi Buku Lainnya</strong>
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col px-3">
            <Swiper
              spaceBetween={20}
              grabCursor={true}
              slidesPerView={1}
              pagination={true}
              navigation={true}
              breakpoints={{
                // when window width is >= 414px
                500: {
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
              style={{ paddingBottom: "40px" }}
            >
              {relatedBooks?.map((relatedBook, index) => {
                return (
                  <SwiperSlide key={index}>
                    <BookItem
                      bookImg={relatedBook.image}
                      category={relatedBook.book_type}
                      title={relatedBook.title}
                      bookType={relatedBook.type}
                      detailUrl={
                        relatedBook.code === "BEI"
                          ? relatedBook.attachment
                          : `/book/detail/${relatedBook.slug}`
                      }
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

export default RelatedBooksSection;
