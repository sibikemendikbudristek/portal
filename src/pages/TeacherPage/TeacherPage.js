import { useState, useEffect } from 'react';
import axios from 'axios';
import CounterSection from '../../components/CounterSection/CounterSection';
import Hero from '../../components/Hero/Hero';
import JenisBukuSection from '../../components/JenisBukuSection/JenisBukuSection';
import JenjangSection from '../../components/JenjangSection/JenjangSection';
import Loader from "react-loader-spinner";
import LatestBooksSection from '../../components/LatestBooksSection/LatestBooksSection';
import PanduanSection from '../../components/PanduanSection/PanduanSection';
import RelatedSiteSection from '../../components/RelatedSiteSection/RelatedSiteSection';
import TestimonySection from '../../components/TestimonySection/TestimonySection';
import data from '../../assets/data/dummy';
import heroImg from '../../assets/img/hero-guru.png';
import PenilaianSection from '../../components/PenilaianSection/PenilaianSection';
import panduanImg from '../../assets/img/panduan-guru.png';
import { base_url } from '../../utils';

const TeacherPage = () => {

  const [latestbooks, setLatestBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLatestBooks = async () => {
      setLoading(true);
      try {
        let response = await axios.get(`${base_url}/api/statistic/getPopularCatalogue?qty=10`);
        setLatestBooks(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        return err.message;
      }
    }
    getLatestBooks();

  }, []);

  return (
    <main style={{ minHeight: '100vh' }}>
      <Hero>
        <div className="row justify-content-between text-center text-md-start">
          <div className="col-lg-5 pt-5 pt-lg-0 my-auto">
            <h1 className="hero-title">Selamat Datang<br />Sahabat Guru</h1>
            <p className="mb-5">
              Sahabat guru dapat mengakses berbagai referensi buku untuk digunakan dalam proses belajar mengajar.
            </p>
            <a
              className="btn btn-primary rounded-pill py-3 px-4"
              href="#PanduanSection"
            >
              Pelajari Sekarang
            </a>
          </div>
          <div className="col-lg-7 mt-5">
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
      <PenilaianSection />
      <JenjangSection />
      <JenisBukuSection />
      {loading ?
        <Loader
          className="d-flex justify-content-center align-items-center vh-100"
          type="TailSpin"
          color="#00BFFF"
          height={80}
          width={80}
        /> :
        <LatestBooksSection
          data={latestbooks}
          seeMoreUrl="/buku-teks"
        />
      }
      <TestimonySection testimonyData={data} />
      <RelatedSiteSection />
      <CounterSection counterData={data} />
    </main>
  );
};

export default TeacherPage;
