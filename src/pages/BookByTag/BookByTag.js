import { useEffect, useState } from "react";
import axios from "axios";
import BookItem from "../../components/BookItem/BookItem";
import Modal from "../../components/Modal/Modal";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

const base_url = "https://sibi.sc.cloudapp.web.id/api/catalogue";

const BookByTag = () => {
  const { tag } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNonTextBooks = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `${base_url}/getBooksByTag?tag=${tag}&offset=0`
        );
        setBooks(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        return err.message;
      }
    };
    getNonTextBooks();
  }, [tag]);

  return (
    <main style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col">
            <h1 className="section-title">
              Menampilkan buku-buku dengan tag: {tag}
            </h1>
          </div>
        </div>
        <div className="row my-4">
          {loading ? <Loader
            className="d-flex justify-content-center align-items-center mt-5"
            type="TailSpin"
            color="#00BFFF"
            height={80}
            width={80}
          /> : books?.map((book, index) => {
            return (
              <div className="col-md-4 col-lg-3" key={index}>
                <BookItem
                  readModal={"#" + book.slug}
                  bookImg={book.image}
                  category={book.name}
                  title={book.title}
                  bookType={book.type}
                  detailUrl={
                    book.code === "BEI"
                      ? book.attachment
                      : `/book/detail/${book.slug}`
                  }
                />
                <Modal id={book.slug} title={book.title}>
                  <embed
                    type="application/pdf"
                    src={book.attachment}
                    width="100%"
                    height="800"
                  />
                </Modal>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default BookByTag;
