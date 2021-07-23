import React, {Suspense, useState, useEffect} from 'react';
import axios  from 'axios';
import { useParams } from 'react-router-dom';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rating } from 'react-simple-star-rating';
import BookInfoSection from "../../components/BookInfoSection/BookInfoSection";
import DetailBanner from "../../components/DetailBanner/DetailBanner";
import RelatedBooksSection from "../../components/RelatedBooksSection/RelatedBooksSection";
import ReviewItem from '../../components/ReviewItem/ReviewItem';
import Modal from '../../components/Modal/Modal';
const PlaylistSection = React.lazy(() => import('../../components/PlaylistSection/PlaylistSection'));

const base_url = 'https://sibi.sc.cloudapp.web.id';


const DetailBukuTeksAudio = () => {
    const [book, setBook] = useState([]);
    const [relatedBooks, setRelatedBooks] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [limit, setLimit] = useState(5);
    const { slug } = useParams();
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState(0);

    const isLoggin = JSON.parse(localStorage.getItem('user-info'));

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);
    }

    useEffect(() => {
        const getBook = async () => {
            setLoading(true);
            try {
                let response = await axios.get(`${base_url}/api/catalogue/getDetails?slug=${slug}`);
                setBook(response.data.results);
                setLoading(false);
            } catch(err) {
                setLoading(true);
                return err.message;
            }
        }
        getBook();

        const getRelatedBooks = async () => {
            setLoading(true);
            try {
                let response = await axios.get(`${base_url}/api/catalogue/getTextBooks?type_audio&limit=5`);
                setRelatedBooks(response.data.results);
                setLoading(false);
            } catch(err) {
                setLoading(true);
                return err.message;
            }
        }
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
    }, [slug, limit]);
    return(
        <main style={{minHeight: '100vh'}}>
        {loading ? 
            <Loader
                className="d-flex justify-content-center align-items-center vh-100"
                type="TailSpin"
                color="#00BFFF"
                height={80}
                width={80}
            /> : 
            <>
            <DetailBanner
                bookImg={book.image}
                title={book.title}
                writer={book.writer}
                description={book.description}
                btnType={book.type}
                reportModal="#reportAudioModal"
            />
            <BookInfoSection data={book} />
            <Suspense fallback={<div>Loading...</div>}>
                <PlaylistSection data={book.audio_attachment} />
            </Suspense>
            <RelatedBooksSection
                data={relatedBooks}
            />
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row mt-5">
                        <div className="col">
                            <h5><strong>Ulasan Pembaca</strong></h5>
                        </div>
                    </div>
                    {isLoggin && <form action="">
                    <div className="row my-3">
                        <div className="col-auto">
                            <label className="col-form-label">Beri ulasan</label>
                        </div>
                        <div className="col-auto py-1">
                            <Rating onClick={handleRating} ratingValue={rating} stars={5} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating">
                                <textarea className="form-control border-2" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '200px', borderRadius: '20px'}}></textarea>
                                <label>Tulis Ulasan...</label>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col text-center">
                            <button className="btn btn-primary btn-lg px-4 rounded-pill">Kirim</button>
                        </div>
                    </div>
                </form>}
                </div>
            </section>
            <section className="bg-light">
            <div className="container py-5">
              <div className="row">
                {reviews.length < 1 ? (
                  <p className="text-center">Belum ada review untuk buku ini</p>
                ) : (
                  reviews.map((review, index) => {
                    return (
                      <div className="col my-2" key={index}>
                        <ReviewItem
                          profileImg={review.avatar}
                          name={review.name}
                          feedbackStar={review.feedback_star}
                          message={review.message}
                        />
                      </div>
                    );
                  })
                )}
              </div>
              {console.log(reviews)}
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
                <embed type="application/pdf" src={book.attachment} width="100%" height="800" />
            </Modal>
            <Modal id="reportAudioModal" title="Lapor">
                <p>It's a form</p>
            </Modal>
            </>
        }
        </main>
    );
};

export default DetailBukuTeksAudio;
