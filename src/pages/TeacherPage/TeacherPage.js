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
import heroImg from '../../assets/img/hero-img.webp';
import readingBookVectorImg from "../../assets/img/reading-book-vector.png";

const base_url = 'https://sibi.sc.cloudapp.web.id/api/catalogue';

const TeacherPage = () => {

    const [latestbooks, setLatestBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getLatestBooks = async () => {
            setLoading(true);
            try {
                let response = await axios.get(`${base_url}/getLatest?qty=10`);
                setLatestBooks(response.data.results);
                setLoading(false);
            } catch(err) {
                setLoading(true);
                return err.message;
            }
        }
        getLatestBooks();

    }, []);

    return (
        <main style={{minHeight: '100vh'}}>
        <Hero>
        <div className="row justify-content-between text-center text-md-start">
          <div className="col-lg-5 mt-5 pt-3">
            <h1 className="hero-title">Layanan Buku Daring</h1>
            <p>
              Belajar mandiri dengan buku pelajaran resmi yang diterbitkan oleh
              Kemendikbud ristek. Dipersembahkan untuk para peserta didik,
              pendidik, dan tenaga kependidikan dalam pembelajaran berbasis
              elektronik. <strong>Merdeka Belajar!</strong>
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
      <PanduanSection>
      <div className="row justify-content-between">
        <div className="col-md-6">
          <img
            className="img-fluid d-block mx-auto mb-3"
            src={readingBookVectorImg}
            alt="Panduan Sibi"
          />
        </div>
        <div className="col-md-6">
          <h2 className="section-title text-center text-md-start">
            Sering Ditanyakan
          </h2>
          <div className="accordion mt-4" id="accordionExample">
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Apa itu Buku Kemendikbud ristek?
                </button>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go
                  within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Bagaimana cara mendaftar di situs ini?
                </button>
              </h3>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong>{" "}
                  It is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go
                  within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Apakah itu Pelaku Perbukuan?
                </button>
              </h3>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go
                  within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Mengapa saya tidak menerima email konfirmasi?
                </button>
              </h3>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go
                  within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Apakah boleh mencetak buku dari situs ini?
                </button>
              </h3>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go
                  within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PanduanSection>
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
