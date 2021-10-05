import BookItem from "../BookItem/BookItem";
import "./LatestBooksSection.scss";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

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

const LatestBooksSection = ({ data, seeMoreUrl, onClickRead }) => {
  return (
    <section id="LatestBooksSection">
      <div className="container py-5 px-5 px-md-0">
        <div className="row my-5">
          <div className="col">
            <h2 className="section-title text-center">Buku Terpopuler</h2>
            <p className="text-center w-75 mx-auto">
              Pelajari buku yang kamu mau
            </p>
            <span className="section-line" />
          </div>
        </div>
        <div className="row justify-content-center my-5">
          <Swiper
            spaceBetween={20}
            grabCursor={true}
            slidesPerView={1}
            pagination={true}
            navigation={true}
            breakpoints={{
              // when window width is >= 414px
              414: {
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
            style={{ paddingBottom: "60px" }}
          >
            {data?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <BookItem
                    onClickRead={onClickRead}
                    readModal={"#" + item.slug}
                    bookImg={item.image}
                    category={item.book_type}
                    title={item.title}
                    bookType={item.type}
                    detailUrl={
                      item.type === "interactive"
                        ? item.attachment
                        : `/book/detail/${item.slug}`
                    }
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="row my-5">
          <div className="col text-center">
            <Link
              className="btn btn-outline-primary py-3 px-4 rounded-pill"
              to={seeMoreUrl}
            >
              Lihat Semua
            </Link>
          </div>
        </div>
        {data?.map((book, index) => {
          return (
            <Modal id={book.slug} title={book.title} key={index}>
              <object
                type="application/pdf"
                data={book.attachment}
                width="100%"
                height="800"
                aria-label={book.title}
              >
              <p>
              Silahkan klik tombol unduh untuk membaca
            </p>
            <a className="btn btn-light" href={book.attachment}>
              <i className="fas fa-fw fa-download" /> Unduh
            </a>
              </object>
            </Modal>
          );
        })}
      </div>
    </section>
  );
};

export default LatestBooksSection;
