import { Link } from "react-router-dom";
import Placeholder from "../../assets/img/placeholder.png";
import bookImgPlaceholder from "../../assets/img/book-placeholder.jpg";
import "./BookItem.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BookItem = ({
  bookImg,
  category,
  title,
  bookType,
  detailUrl,
  readModal,
  onClickRead
}) => {
  return (
    <div id="BookItem">
      <div className="card shadow">
        <LazyLoadImage
          className="book-item-img"
          height={'100%'}
          placeholderSrc={Placeholder}
          src={bookImg || bookImgPlaceholder}
          alt={title || "Undefined"}
          style={{borderRadius: '25px'}}
        />
        <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
          <div className="row">
            <div className="col">
              <span className="badge bg-warning my-3">
                {category || "Undefined"}
              </span>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              {bookType !== "pdf" ? (
                <h5
                  className="card-title text-white"
                  style={{ pointerEvents: "none" }}
                >
                  {title || "Undefined"}
                </h5>
              ) : (
                <a
                  onClick={onClickRead}
                  className="link"
                  href="!#"
                  data-bs-toggle="modal"
                  data-bs-target={readModal}
                >
                  <h5 className="card-title text-white">
                    {title || "Undefined"}
                  </h5>
                </a>
              )}
              {bookType === "interactive" ? (
                <a className="card-link" href={detailUrl || null}>
                  <p className="card-text text-warning">
                    Baca Selengkapnya <i className="fas fa-fw fa-arrow-right" />
                  </p>
                </a>
              ) : (
                <Link className="card-link" to={detailUrl || null}>
                  <p className="card-text text-warning">
                    Baca Selengkapnya <i className="fas fa-fw fa-arrow-right" />
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
