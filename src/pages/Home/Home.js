import { useState, useEffect } from "react";
import axios from "axios";
import CounterSection from "../../components/CounterSection/CounterSection";
import Hero from "../../components/Hero/Hero";
import Loader from "react-loader-spinner";
import LatestBooksSection from "../../components/LatestBooksSection/LatestBooksSection";
import PanduanSection from "../../components/PanduanSection/PanduanSection";
import RelatedSiteSection from "../../components/RelatedSiteSection/RelatedSiteSection";
import TestimonySection from "../../components/TestimonySection/TestimonySection";
import data from "../../assets/data/dummy";
import heroImg from "../../assets/img/landing-page-img.webp";
import panduanImg from "../../assets/img/panduan-guru.webp";
import ArticleSection from "../../components/ArticleSection/ArticleSection";

const base_url = "https://sibi.sc.cloudapp.web.id/api/catalogue";

const Home = () => {
  const [latestbooks, setLatestBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLatestBooks = async () => {
      setLoading(true);
      try {
        let response = await axios.get(`${base_url}/getLatest?qty=10`);
        setLatestBooks(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        return err.message;
      }
    };
    getLatestBooks();
  }, []);

  return (
    <main style={{ minHeight: "100vh" }}>
      <Hero>
        <div className="row justify-content-between text-center text-md-start">
          <div className="col-lg-6 mt-5">
            <h1 className="hero-title pt-5">
              Buku untuk Semua, Akses
              <br />
              di manapun dan kapanpun
            </h1>
            <p>Ayo baca buku sekarang!</p>
            <p className="mt-5 pt-3">Masuk sebagai:</p>
            <div className="d-grid gap-2 d-md-block">
              <div className="row">
                <div className="col">
                  <a
                    className="btn btn-primary rounded me-2 mb-2"
                    href="/siswa?role=siswa"
                  >
                    <small>
                      <i className="fas fa-fw me-1 fa-user" />
                      Siswa
                    </small>
                  </a>
                  <a
                    className="btn btn-primary rounded me-2 mb-2"
                    href="/guru?role=guru"
                  >
                    <small>
                      <i className="fas fa-fw me-1 fa-user-graduate" />
                      Guru
                    </small>
                  </a>
                  <a
                    className="btn btn-primary rounded me-2 mb-2"
                    href="/umum?role=umum"
                  >
                    <small>
                      <i className="fas fa-fw me-1 fa-users" />
                      Umum
                    </small>
                  </a>
                  <a
                    className="btn btn-primary rounded mb-2"
                    href="https://sibi.sc.cloudapp.web.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <small>
                      <i className="fas fa-fw me-1 fa-book-reader" />
                      Pelaku Perbukuan
                    </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-lg-5 pt-lg-5">
            <img
              className="img-fluid float-end"
              src={heroImg}
              loading="lazy"
              alt="Selamat datang di SIBI"
            />
          </div>
        </div>
      </Hero>
      <PanduanSection image={panduanImg} />
      <ArticleSection />
      {loading ? (
        <Loader
          className="d-flex justify-content-center align-items-center vh-100"
          type="TailSpin"
          color="#00BFFF"
          height={80}
          width={80}
        />
      ) : (
        <LatestBooksSection data={latestbooks} seeMoreUrl="/buku-teks" />
      )}
      <TestimonySection testimonyData={data} />
      <RelatedSiteSection />
      <CounterSection counterData={data} />
    </main>
  );
};

export default Home;
