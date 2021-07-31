import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rating } from "react-simple-star-rating";
import BookInfoSection from "../../components/BookInfoSection/BookInfoSection";
import DetailBanner from "../../components/DetailBanner/DetailBanner";
import RelatedBooksSection from "../../components/RelatedBooksSection/RelatedBooksSection";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import Modal from "../../components/Modal/Modal";
import PlaylistSection from "../../components/PlaylistSection/PlaylistSection";

// Base Url
const base_url = "https://sibi.sc.cloudapp.web.id";

// Validation
const isLoggin = JSON.parse(localStorage.getItem("user-info"));

const DetailBukuTeks = () => {
  const [book, setBook] = useState([]);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [limit, setLimit] = useState(5);
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState("");
  const [type, setType] = useState("type_pdf");

  // Review
  const [feedback_star, setFeedbackStar] = useState(0);
  const [reviewMessage, setReviewMessage] = useState("");

  // Report
  const [category, setCategory] = useState("");
  const [reportMessage, setReportMessage] = useState("");

  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `${base_url}/api/catalogue/getDetails?slug=${slug}`
        );
        setBook(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        return err.message;
      }
    };
    getBook();

    const getRelatedBooks = async () => {
      setLoading(true);
      try {
        if(book.type === 'pdf') {
          setType('type_pdf');
        } else {
          setType('type_audio');
        }

        let response = await axios.get(
          `${base_url}/api/catalogue/getTextBooks?${type}&limit=5`
        );
        setRelatedBooks(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        return err.message;
      }
    };
    getRelatedBooks();

    const getReviews = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `${base_url}/api/review/getReviews?slug=${slug}&limit=${limit}`
        );
        setReviews(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        return err.message;
      }
    };
    getReviews();
  }, [book.type, type, slug, limit]);

  // Post Read History
  const postRead = async () => {
    setIsSubmitting(true);

    let data = { slug };
    let response = await axios({
      method: "post",
      url: `${base_url}/api/statistic/push`,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: isLoggin.data.token,
      },
      data: JSON.stringify({
        activity: 'read',
        slug: data.slug,
      }),
    });

    if (response.data.status === "success") {
      setIsSubmitting(false);
    } else {
      setIsSubmitting(false);
      console.log(response.data);
    }
  };

   // Post Read History
   const postDownload = async () => {
    setIsSubmitting(true);

    let data = { slug };
    let response = await axios({
      method: "post",
      url: `${base_url}/api/statistic/push`,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: isLoggin.data.token,
      },
      data: JSON.stringify({
        activity: 'download',
        slug: data.slug,
      }),
    });

    if (response.data.status === "success") {
      setIsSubmitting(false);
    } else {
      setIsSubmitting(false);
      console.log(response.data);
    }
  };

  // Posting Review
  const postReview = async () => {
    setIsSubmitting(true);

    let data = { slug, feedback_star, reviewMessage };
    let response = await axios({
      method: "post",
      url: `${base_url}/api/review/addReview`,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: isLoggin.data.token,
      },
      data: JSON.stringify({
        feedback_star: data.feedback_star,
        message: data.reviewMessage,
        slug: data.slug,
      }),
    });

    if (response.data.status === "success") {
      setIsSubmitting(false);
      setFeedbackStar(0);
      setReviewMessage("");
      window.location.reload();
    } else {
      setIsSubmitting(false);
      console.log(response.data);
    }
  };

  // Posting Report
  const postReport = async () => {
    setIsSubmitting(true);

    let data = { slug, category, reportMessage };
    let response = await axios({
      method: "post",
      url: `${base_url}/api/report/addReport`,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: isLoggin.data.token,
      },
      data: JSON.stringify({
        slug: data.slug,
        category: data.category,
        message: data.reportMessage,
      }),
    });

    if (response.data.status === "success") {
      setIsSubmitting(false);
      setCategory("");
      setReportMessage("");
      setAlert(response.data.message);
      console.log(response.data);
    } else {
      setIsSubmitting(false);
      console.log(response.data);
    }
  };

  return (
    <main style={{ minHeight: "100vh" }}>
      {loading ? (
        <Loader
          className="d-flex justify-content-center align-items-center vh-100"
          type="TailSpin"
          color="#00BFFF"
          height={80}
          width={80}
        />
      ) : (
        <>
          <DetailBanner
            bookImg={book.image}
            title={book.title}
            writer={book.writer}
            description={book.description}
            attachment={book.type !== 'audio' ? book.attachment : '#PlaylistSection'}
            btnType={book.type}
            readModal="#readModal"
            reportModal="#reportPdfModal"
            onClickRead={isLoggin && postRead}
            onClickDownload={isLoggin && postDownload}
          />
          <BookInfoSection data={book} />
          {book.type === 'audio' && <PlaylistSection data={book.audio_attachment} />}
          <RelatedBooksSection data={relatedBooks} />
          <section className="bg-light">
            <div className="container py-5">
              <div className="row mt-5">
                <div className="col">
                  <h5>
                    <strong>Ulasan Pembaca</strong>
                  </h5>
                </div>
              </div>
              {isLoggin && (
                <>
                  <div className="row my-3">
                    <div className="col-auto">
                      <label className="col-form-label">Beri ulasan</label>
                    </div>
                    <div className="col-auto py-1">
                      <Rating
                        onClick={(star) => setFeedbackStar(star)}
                        ratingValue={feedback_star}
                        stars={5}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-floating">
                        <textarea
                          onChange={(e) => setReviewMessage(e.target.value)}
                          value={reviewMessage}
                          className="form-control border-2"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style={{ height: "200px", borderRadius: "20px" }}
                        ></textarea>
                        <label>Tulis Ulasan...</label>
                      </div>
                    </div>
                  </div>
                  <div className="row my-5">
                    <div className="col text-center">
                      {isSubmitting ? (
                        <button
                          onClick={postReview}
                          className="btn btn-primary btn-lg px-4 rounded-pill"
                          disabled
                        >
                          Kirim
                        </button>
                      ) : (
                        <button
                          onClick={postReview}
                          className="btn btn-primary btn-lg px-4 rounded-pill"
                        >
                          Kirim
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
          <section className="bg-light">
            <div className="container pb-5">
              <div className="row">
                {reviews.length < 1 ? (
                  <p className="text-center">Belum ada review untuk buku ini</p>
                ) : (
                  reviews
                    .map((review, index) => {
                      return (
                        <div className="col-12 my-2" key={index}>
                          <ReviewItem
                            profileImg={review.avatar}
                            name={review.name}
                            feedbackStar={review.feedback_star}
                            message={review.message}
                          />
                        </div>
                      );
                    })
                    .reverse()
                )}
              </div>
              {reviews.length > 5 ? (
                <div className="row mt-3">
                  <div className="col text-center">
                    <button
                      onClick={() => setLimit(limit + 3)}
                      className="btn btn-primary btn-lg"
                    >
                      Load more
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </section>
          <Modal id="readModal" title={book.title}>
            <embed
              type="application/pdf"
              src={book.attachment}
              width="100%"
              height="800"
            />
          </Modal>
          <Modal id="reportPdfModal" title="Lapor">
            {isLoggin ? (
              <>
                {alert !== "" && (
                  <div
                    className="alert alert-info alert-dismissible fade show"
                    role="alert"
                  >
                    {alert}
                  </div>
                )}
                <label htmlFor="">Kategori</label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-select mb-3"
                >
                  <option value="Sara">Sara</option>
                  <option value="Salah Cetak">Salah Cetak</option>
                  <option value="Plagiasi">Plagiasi</option>
                </select>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    onChange={(e) => setReportMessage(e.target.value)}
                    value={reportMessage}
                    id="floatingTextarea"
                    style={{ height: "100px" }}
                  />
                  <label htmlFor="floatingTextarea">Pesan</label>
                </div>
                {isSubmitting ? (
                  <button className="btn btn-primary" disabled>
                    Kirim
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={postReport}
                    className="btn btn-primary"
                  >
                    Kirim
                  </button>
                )}
              </>
            ) : (
              <div className="row my-5">
                <div className="col text-center">
                  <i
                    className="fas fa-exclamation-triangle text-warning"
                    style={{ fontSize: "40px" }}
                  />
                  <p className="mt-3">Maaf kamu harus login terlebih dahulu</p>
                  <a className="btn btn-primary" href="/login">
                    Login
                  </a>
                </div>
              </div>
            )}
          </Modal>
        </>
      )}
    </main>
  );
};

export default DetailBukuTeks;
