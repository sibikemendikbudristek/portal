import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Banner from "../../components/Banner/Banner";
import bukuUmumImgBanner from "../../assets/img/nonteks-img.png";
import BookItem from "../../components/BookItem/BookItem";
import Modal from "../../components/Modal/Modal";

const base_url = "https://sibi.sc.cloudapp.web.id/api/catalogue";

const BukuNonteks = () => {
  const [filterToggle, setFilterToggle] = useState(false);

  const [nontextbooks, setNonTextBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [limit, setLimit] = useState(6);
  const [type, setType] = useState("type_pdf");
  const [loading, setLoading] = useState(false);

  // Check Filter
  const [fiksiisChecked, setFiksiisChecked] = useState(false);
  const [nonFiksiisChecked, setNonFiksiisChecked] = useState(false);

  const [praMembacaisChecked, setPraMembacaisChecked] = useState(false);
  const [pembacaDiniDanAwalisChecked, setPembacaDiniDanAwalisChecked] =
    useState(false);
  const [pembacaLancarisChecked, setPembacaLancarisChecked] = useState(false);
  const [pembacaLanjutisChecked, setPembacaLanjutisChecked] = useState(false);
  const [pembacaMahirisChecked, setPembacaMahirisChecked] = useState(false);
  const [pembacaKritisisChecked, setPembacaKritisisChecked] = useState(false);

  // Filter
  const [fiksi, setFiksi] = useState("");
  const [nonFiksi, setNonFiksi] = useState("");

  const [praMembaca, setPraMembaca] = useState("");
  const [pembacaDiniDanAwal, setPembacaDiniDanAwal] = useState("");
  const [pembacaLancar, setPembacaLancar] = useState("");
  const [pembacaLanjut, setPembacaLanjut] = useState("");
  const [pembacaMahir, setPembacaMahir] = useState("");
  const [pembacaKritis, setPembacaKritis] = useState("");

  const [tags, setTags] = useState("");
  const [submittedTags, setSubmittedTags] = useState("");

  useEffect(() => {
    const getNonTextBooks = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `${base_url}/getNonTextBooks?limit=${limit}&offset=0&title=${searchTitle}&${type}&${fiksi}&${nonFiksi}&${praMembaca}&${pembacaDiniDanAwal}&${pembacaLancar}&${pembacaLanjut}&${pembacaMahir}&${pembacaKritis}&tag=${submittedTags}`
        );
        setNonTextBooks(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        return err.message;
      }
    };
    getNonTextBooks();
  }, [
    type,
    limit,
    searchTitle,
    fiksi,
    nonFiksi,
    praMembaca,
    pembacaDiniDanAwal,
    pembacaLancar,
    pembacaLanjut,
    pembacaMahir,
    pembacaKritis,
    submittedTags,
  ]);

  const typePdfHandler = () => {
    setType("type_pdf");
    setLimit(6);
  };

  const typeAudioHandler = () => {
    setType("type_audio");
    setLimit(6);
  };

  const typeInteractiveHandler = () => {
    setType("type_interactive");
    setLimit(6);
  };

  const submitFilter = (e) => {
    e.preventDefault();

    // Tipe Buku
    if (fiksiisChecked === true) {
      setFiksi("fiksi");
    } else {
      setFiksi("");
    }

    if (nonFiksiisChecked === true) {
      setNonFiksi("non_fiksi");
    } else {
      setNonFiksi("");
    }

    // Perjenjangan
    if (praMembacaisChecked === true) {
      setPraMembaca("level_pra=true");
    } else {
      setPraMembaca("");
    }

    if (pembacaDiniDanAwalisChecked === true) {
      setPembacaDiniDanAwal("level_dini=true");
    } else {
      setPembacaDiniDanAwal("");
    }

    if (pembacaLancarisChecked === true) {
      setPembacaLancar("level_lancar=true");
    } else {
      setPembacaLancar("");
    }

    if (pembacaLanjutisChecked === true) {
      setPembacaLanjut("level_lanjut=true");
    } else {
      setPembacaLanjut("");
    }

    if (pembacaMahirisChecked === true) {
      setPembacaMahir("level_mahir=true");
    } else {
      setPembacaMahir("");
    }

    if (pembacaKritisisChecked === true) {
      setPembacaKritis("level_kritis=true");
    } else {
      setPembacaKritis("");
    }

    // Filter by tag
    setSubmittedTags(tags);
  };

  return (
    <main style={{ minHeight: "100vh" }}>
      <Banner
        bannerTitle="Buku Nonteks"
        bannerDescription="Buku Nonteks adalah buku pengayaan, referensi, atau panduan yang memuat materi untuk pengembangan sikap, pengetahuan, dan keterampilan peserta didik, pendidik, dan tenaga kependidikan."
        bannerImg={bukuUmumImgBanner}
      />
      <section className="container my-5" style={{ minHeight: "100vh" }}>
        <div className="row my-4 d-block d-lg-none">
          <div className="col text-center">
            <button
              onClick={() => setFilterToggle((filterToggle) => !filterToggle)}
              className="btn"
              type="button"
            >
              {filterToggle ? (
                filterToggle && <i className="fas fa-times" />
              ) : (
                <i className="fas fa-filter" />
              )}{" "}
              Filter
            </button>
          </div>
        </div>
        <div className="row justify-content-between">
          <aside
            className={
              filterToggle
                ? filterToggle && "col-lg-3"
                : "col-lg-3 d-none d-lg-block"
            }
          >
            {/* Sidebar */}
            <div
              className="card border-0 shadow mb-5"
              style={{ borderRadius: "20px" }}
            >
              <div className="card-body" style={{ borderRadius: "20px" }}>
                <form onSubmit={submitFilter}>
                  <div className="mb-3">
                    <h6>
                      <strong>Tipe Buku</strong>
                    </h6>
                    <div className="form-check">
                      <input
                        onChange={(e) => setFiksiisChecked(e.target.checked)}
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label">Fiksi</label>
                    </div>
                    <div className="form-check">
                      <input
                        onChange={(e) => setNonFiksiisChecked(e.target.checked)}
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label">Non Fiksi</label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6>
                      <strong>Perjenjangan</strong>
                    </h6>
                    <div className="form-check">
                      <input
                        onChange={(e) =>
                          setPraMembacaisChecked(e.target.checked)
                        }
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Pra Membaca{" "}
                        <i
                          className="fas fa-fw fa-question-circle"
                          data-bs-toggle="tooltip"
                          title="PAUD"
                        />
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        onChange={(e) =>
                          setPembacaDiniDanAwalisChecked(e.target.checked)
                        }
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Pembaca dini & awal{" "}
                        <i
                          className="fas fa-fw fa-question-circle"
                          data-bs-toggle="tooltip"
                          title="SD/MI Kelas I sampai dengan kelas III"
                        />
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        onChange={(e) =>
                          setPembacaLancarisChecked(e.target.checked)
                        }
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Pembaca lancar{" "}
                        <i
                          className="fas fa-fw fa-question-circle"
                          data-bs-toggle="tooltip"
                          title="SD/MI Kelas IV sampai dengan kelas VI"
                        />
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        onChange={(e) =>
                          setPembacaLanjutisChecked(e.target.checked)
                        }
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Pembaca lanjut{" "}
                        <i
                          className="fas fa-fw fa-question-circle"
                          data-bs-toggle="tooltip"
                          title="SMP/MTS"
                        />
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        onChange={(e) =>
                          setPembacaMahirisChecked(e.target.checked)
                        }
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Pembaca mahir{" "}
                        <i
                          className="fas fa-fw fa-question-circle"
                          data-bs-toggle="tooltip"
                          title="SMA/MA/SMK"
                        />
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        onChange={(e) =>
                          setPembacaKritisisChecked(e.target.checked)
                        }
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Pembaca kritis{" "}
                        <i
                          className="fas fa-fw fa-question-circle"
                          data-bs-toggle="tooltip"
                          title="PT dan Pendidik"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6>
                      <strong>Filter Tag</strong>
                    </h6>
                    <div className="form">
                      <textarea
                        className="form-control"
                        placeholder="Contoh: Sejarah, Komputer, dst."
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        id="floatingTextarea"
                        style={{ height: "80px" }}
                      />
                    </div>
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-primary rounded-pill"
                      type="submit"
                    >
                      Terapkan
                    </button>
                    <button
                      onClick={() => window.location.reload()}
                      className="btn btn-light rounded-pill"
                      type="reset"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="card-footer border-0 bg-white"
                style={{ borderRadius: "20px" }}
              ></div>
            </div>
            {/* End of sidebar */}
          </aside>
          <div className="col-lg-9">
            {/* Main Content */}
            <div className="row d-none">
              <div className="col text-center">
                <div
                  className="nav d-grid d-md-block gap-2 mb-3 px-5 px-md-0"
                  role="tablist"
                >
                  <button
                    type="button"
                    className="btn btn-outline-primary active btn-lg mx-2"
                    data-bs-toggle="pill"
                    onClick={typePdfHandler}
                  >
                    Buku PDF
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-lg mx-2"
                    data-bs-toggle="pill"
                    onClick={typeAudioHandler}
                  >
                    Buku Audio
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-lg mx-2"
                    data-bs-toggle="pill"
                    onClick={typeInteractiveHandler}
                  >
                    Buku Interaktif
                  </button>
                </div>
              </div>
            </div>
            <div className="row justify-content-center my-3">
              <div className="col-9 col-md-7">
                <div className="input-group mb-3">
                  <span className="input-group-text bg-white border-end-0 border-2">
                    <i className="fas fa-search text-muted" />
                  </span>
                  <input
                    type="text"
                    onChange={(event) => {
                      setSearchTitle(event.target.value);
                    }}
                    className="form-control border-start-0 border-2 shadow-none"
                    placeholder="Cari buku..."
                  />
                </div>
              </div>
            </div>
            {loading ? (
              <Loader
                className="text-center my-3"
                type="TailSpin"
                color="#00BFFF"
                height={80}
                width={80}
              />
            ) : (
              <>
                <div className="row justify-content-start">
                  {nontextbooks.length < 1 ? (
                    <div className="col text-center my-5">
                      <i
                        className="fas fa-times text-warning my-3"
                        style={{ fontSize: "60px" }}
                      />
                      <p className="lead">
                        Buku tidak ditemukan di kategori ini,
                        <br />
                        cari dengan kata kunci lain.
                      </p>
                    </div>
                  ) : (
                    nontextbooks.map((book, index) => {
                      return (
                        <div
                          className="col-sm-6 col-md-4 my-3 px-5 px-sm-3"
                          key={index}
                        >
                          <BookItem
                            readModal={"#" + book.slug}
                            bookImg={book.image}
                            category={book.book_type}
                            title={book.title}
                            bookType={book.type}
                            detailUrl={
                              book.code === "BEI"
                                ? book.attachment
                                : `/book/detail/${book.slug}`
                            }
                          />
                          <Modal id={book.slug} title={book.title}>
                            <object
                              type="application/pdf"
                              data={book.attachment}
                              width="100%"
                              height="800"
                              aria-label={book.title}
                            >
                              <p>
                                Ops, perangkat kamu tidak bisa membuka file ini
                              </p>
                              <a href={book.attachment}>Download</a>
                            </object>
                          </Modal>
                        </div>
                      );
                    })
                  )}
                </div>
                {nontextbooks.length < limit - 1 ? (
                  ""
                ) : (
                  <div className="row my-5">
                    <div className="col text-center">
                      <button
                        onClick={() => setLimit(limit + 3)}
                        className="btn btn-primary btn-lg rounded-pill"
                      >
                        Load More
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        {/* End of Main Content */}
      </section>
    </main>
  );
};

export default BukuNonteks;
