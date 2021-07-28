import { Link } from "react-router-dom";
import bookImgPlaceholder from "../../assets/img/book-placeholder.jpg";
import "./BookItem.scss";

const BookItem = ({
  bookImg,
  category,
  title,
  bookType,
  detailUrl,
  readModal,
}) => {
  return (
    <div id="BookItem">
      <div className="card shadow">
        <img
          className="book-item-img"
          loading="lazy"
          src={bookImg || bookImgPlaceholder}
          alt={title || "Undefined"}
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
              {bookType !== "interactive" ? (
                <Link className="card-link" to={detailUrl || null}>
                  <p className="card-text text-warning">
                    Baca Selengkapnya <i className="fas fa-fw fa-arrow-right" />
                  </p>
                </Link>
              ) : (
                <a className="card-link" href={detailUrl || null}>
                  <p className="card-text text-warning">
                    Baca Selengkapnya <i className="fas fa-fw fa-arrow-right" />
                  </p>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
