import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Banner from "../../components/Banner/Banner";
import bukuPelajaranImgBanner from "../../assets/img/buku-tekss.png";
import BookItem from "../../components/BookItem/BookItem";
import Modal from "../../components/Modal/Modal";
import { base_url } from "../../utils";

const BukuSekolahPenggerak = () => {
  const [filterToggle, setFilterToggle] = useState(false);

  const [textbooks, setTextBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [limit, setLimit] = useState(6);
  const [type, setType] = useState("type_pdf");
  const [loading, setLoading] = useState(false);

  // Check Filter
  const [levelPaudisChecked, setlevelPaudisChecked] = useState(false);
  const [levelSDisChecked, setlevelSDisChecked] = useState(false);
  const [levelSMPisChecked, setLevelSMPisChecked] = useState(false);
  const [levelSMAisChecked, setLevelSMAisChecked] = useState(false);
  const [class1isChecked, setClass1isChecked] = useState(false);
  const [class4isChecked, setClass4isChecked] = useState(false);
  const [class7isChecked, setClass7isChecked] = useState(false);
  const [class10isChecked, setClass10isChecked] = useState(false);
  const [subjectIPAisChecked, setSubjectIPAisChecked] = useState(false);
  const [subjectIPSisChecked, setSubjectIPSisChecked] = useState(false);
  const [subjectBIndonesiaisChecked, setSubjectBIndonesiaisChecked] =
    useState(false);
  const [subjectBInggrisisChecked, setSubjectBInggrisisChecked] =
    useState(false);
  const [subjectPJOKisChecked, setSubjectPJOKisChecked] = useState(false);
  const [subjectPKNisChecked, setSubjectPKNisChecked] = useState(false);
  const [subjectMatematikaisChecked, setSubjectMatematikaisChecked] =
    useState(false);
  // const [subjectSBudayaisChecked, setSubjectSBudayaisChecked] = useState(false);
  const [subjectSRupaisChecked, setSubjectSRupaisChecked] = useState(false);
  const [subjectSTariisChecked, setSubjectSTariisChecked] = useState(false);
  const [subjectSMusikisChecked, setSubjectSMusikisChecked] = useState(false);
  const [subjectSTeaterisChecked, setSubjectSTeaterisChecked] = useState(false);
  const [subjectAgamaIslamisChecked, setSubjectAgamaIslamisChecked] =
    useState(false);
  const [subjectAgamaKristenisChecked, setSubjectAgamaKristenisChecked] =
    useState(false);
  const [subjectAgamaKatolikisChecked, setSubjectAgamaKatolikisChecked] =
    useState(false);
  const [subjectAgamaHinduisChecked, setSubjectAgamaHinduisChecked] =
    useState(false);
  const [subjectAgamaBudhaisChecked, setSubjectAgamaBudhaisChecked] =
    useState(false);
  const [subjectAgamaKhonghucuisChecked, setSubjectAgamaKhonghucuisChecked] =
    useState(false);
  const [subjectSejarahisChecked, setSubjectSejarahisChecked] = useState(false);
  const [subjectInformatikaisChecked, setSubjectInformatikaisChecked] =
    useState(false);
  const [subjectKepercayaanisChecked, setSubjectKepercayaanisChecked] =
    useState(false);
  const [subjectIPASisChecked, setSubjectIPASisChecked] = useState(false);

  // Filter
  const [levelPaud, setLevelPaud] = useState("");
  const [levelSD, setLevelSD] = useState("");
  const [levelSMP, setLevelSMP] = useState("");
  const [levelSMA, setLevelSMA] = useState("");
  const [class1, setClass1] = useState("");
  const [class4, setClass4] = useState("");
  const [class7, setClass7] = useState("");
  const [class10, setClass10] = useState("");
  const [subjectIPA, setSubjectIPA] = useState("");
  const [subjectIPS, setSubjectIPS] = useState("");
  const [subjectBIndonesia, setSubjectBIndonesia] = useState("");
  const [subjectBInggris, setSubjectBInggris] = useState("");
  const [subjectPJOK, setSubjectPJOK] = useState("");
  const [subjectPKN, setSubjectPKN] = useState("");
  const [subjectMatematika, setSubjectMatematika] = useState("");
  // const [subjectSBudaya, setSubjectSBudaya] = useState("");
  const [subjectSMusik, setSubjectSMusik] = useState("");
  const [subjectSRupa, setSubjectSRupa] = useState("");
  const [subjectSTari, setSubjectSTari] = useState("");
  const [subjectSTeater, setSubjectSTeater] = useState("");
  const [subjectAgamaIslam, setSubjectAgamaIslam] = useState("");
  const [subjectAgamaKristen, setSubjectAgamaKristen] = useState("");
  const [subjectAgamaKatolik, setSubjectAgamaKatolik] = useState("");
  const [subjectAgamaHindu, setSubjectAgamaHindu] = useState("");
  const [subjectAgamaBudha, setSubjectAgamaBudha] = useState("");
  const [subjectAgamaKhonghucu, setSubjectAgamaKhonghucu] = useState("");
  const [subjectSejarah, setSubjectSejarah] = useState("");
  const [subjectInformatika, setSubjectInformatika] = useState("");
  const [subjectKepercayaan, setSubjectKepercayaan] = useState("");
  const [subjectIPAS, setSubjectIPAS] = useState("");

  useEffect(() => {
    const getTextBooks = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `${base_url}/api/catalogue/getPenggerakTextBooks?limit=${limit}&offset=0&title=${searchTitle}&${type}&${levelPaud}&${levelSD}&${levelSMP}&${levelSMA}&${class1}&${class4}&${class7}&${class10}&${subjectIPA}&${subjectIPS}&${subjectBIndonesia}&${subjectBInggris}&${subjectPJOK}&${subjectPKN}&${subjectMatematika}&${subjectAgamaIslam}&${subjectAgamaKristen}&${subjectAgamaKatolik}&${subjectAgamaHindu}&${subjectAgamaBudha}&${subjectAgamaKhonghucu}&${subjectSejarah}&${subjectSRupa}&${subjectSMusik}&${subjectSTari}&${subjectSTeater}&${subjectInformatika}&${subjectIPAS}&${subjectKepercayaan}`
        );
        setTextBooks(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        return err.message;
      }
    };
    getTextBooks();
  }, [
    type,
    limit,
    searchTitle,
    levelPaud,
    levelSD,
    levelSMP,
    levelSMA,
    class1,
    class4,
    class7,
    class10,
    subjectIPA,
    subjectIPS,
    subjectBIndonesia,
    subjectBInggris,
    subjectPJOK,
    subjectPKN,
    subjectMatematika,
    subjectAgamaIslam,
    subjectAgamaKristen,
    subjectAgamaKatolik,
    subjectAgamaHindu,
    subjectAgamaBudha,
    subjectAgamaKhonghucu,
    subjectSejarah,
    subjectSRupa,
    subjectSMusik,
    subjectSTari,
    subjectSTeater,
    subjectInformatika,
    subjectIPAS,
    subjectKepercayaan,
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

    // Level
    if (levelPaudisChecked === true) {
      setLevelPaud("level_paud");
    } else {
      setLevelPaud("");
    }

    if (levelSDisChecked === true) {
      setLevelSD("level_sd");
    } else {
      setLevelSD("");
    }

    if (levelSMPisChecked === true) {
      setLevelSMP("level_smp");
    } else {
      setLevelSMP("");
    }

    if (levelSMAisChecked === true) {
      setLevelSMA("level_sma");
    } else {
      setLevelSMA("");
    }

    // Class
    if (class1isChecked === true) {
      setClass1("class_1");
    } else {
      setClass1("");
    }

    if (class4isChecked === true) {
      setClass4("class_4");
    } else {
      setClass4("");
    }

    if (class7isChecked === true) {
      setClass7("class_7");
    } else {
      setClass7("");
    }

    if (class10isChecked === true) {
      setClass10("class_10");
    } else {
      setClass10("");
    }

    // Subject
    if (subjectIPAisChecked === true) {
      setSubjectIPA("subject_ipa");
    } else {
      setSubjectIPA("");
    }

    if (subjectIPSisChecked === true) {
      setSubjectIPS("subject_ips");
    } else {
      setSubjectIPS("");
    }

    if (subjectBIndonesiaisChecked === true) {
      setSubjectBIndonesia("subject_indonesia");
    } else {
      setSubjectBIndonesia("");
    }

    if (subjectBInggrisisChecked === true) {
      setSubjectBInggris("subject_inggris");
    } else {
      setSubjectBInggris("");
    }

    if (subjectPJOKisChecked === true) {
      setSubjectPJOK("subject_pjok");
    } else {
      setSubjectPJOK("");
    }

    if (subjectPKNisChecked === true) {
      setSubjectPKN("subject_ppkn");
    } else {
      setSubjectPKN("");
    }

    if (subjectMatematikaisChecked === true) {
      setSubjectMatematika("subject_matematika");
    } else {
      setSubjectMatematika("");
    }

    if (subjectInformatikaisChecked === true) {
      setSubjectInformatika("subject_informatika");
    } else {
      setSubjectInformatika("");
    }

    if (subjectIPASisChecked === true) {
      setSubjectIPAS("subject_ipas");
    } else {
      setSubjectIPAS("");
    }

    if (subjectKepercayaanisChecked === true) {
      setSubjectKepercayaan("subject_kepercayaan");
    } else {
      setSubjectKepercayaan("");
    }

    // if (subjectSBudayaisChecked === true) {
    //   setSubjectSBudaya("subject_seni_budaya");
    // } else {
    //   setSubjectSBudaya("");
    // }

    if (subjectSRupaisChecked === true) {
      setSubjectSRupa("subject_seni_rupa");
    } else {
      setSubjectSRupa("");
    }

    if (subjectSTariisChecked === true) {
      setSubjectSTari("subject_seni_tari");
    } else {
      setSubjectSTari("");
    }

    if (subjectSMusikisChecked === true) {
      setSubjectSMusik("subject_seni_musik");
    } else {
      setSubjectSMusik("");
    }

    if (subjectSTeaterisChecked === true) {
      setSubjectSTeater("subject_seni_teater");
    } else {
      setSubjectSTeater("");
    }

    if (subjectAgamaIslamisChecked === true) {
      setSubjectAgamaIslam("subject_agama_islam");
    } else {
      setSubjectAgamaIslam("");
    }

    if (subjectAgamaKristenisChecked === true) {
      setSubjectAgamaKristen("subject_agama_kristen");
    } else {
      setSubjectAgamaKristen("");
    }

    if (subjectAgamaKatolikisChecked === true) {
      setSubjectAgamaKatolik("subject_agama_katolik");
    } else {
      setSubjectAgamaKatolik("");
    }

    if (subjectAgamaHinduisChecked === true) {
      setSubjectAgamaHindu("subject_agama_hindu");
    } else {
      setSubjectAgamaHindu("");
    }

    if (subjectAgamaBudhaisChecked === true) {
      setSubjectAgamaBudha("subject_agama_budha");
    } else {
      setSubjectAgamaBudha("");
    }

    if (subjectAgamaKhonghucuisChecked === true) {
      setSubjectAgamaKhonghucu("subject_agama_khonghucu");
    } else {
      setSubjectAgamaKhonghucu("");
    }

    if (subjectSejarahisChecked === true) {
      setSubjectSejarah("subject_sejarah");
    } else {
      setSubjectSejarah("");
    }
  };
  return (
    <main style={{ minHeight: "100vh" }}>
      <Banner
        bannerTitle="Buku Sekolah Penggerak"
        bannerDescription="Buku Sekolah Penggerak adalah buku yang disusun berdasarkan Capaian Pembelajaran dengan mengusung semangat merdeka belajar. Buku sekolah penggerak diimplementasikan secara terbatas di Sekolah Penggerak dan SMK Pusat Keunggulan."
        bannerImg={bukuPelajaranImgBanner}
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
                      <strong>Jenjang</strong>
                    </h6>
                    <div className="form-check">
                      <input
                        onChange={(e) =>
                          setlevelPaudisChecked(e.target.checked)
                        }
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label">PAUD</label>
                    </div>
                    <div className="form-check">
                      <input
                        onChange={(e) => setlevelSDisChecked(e.target.checked)}
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label">SD/MI</label>
                    </div>
                    <div className="form-check">
                      <input
                        onChange={(e) => setLevelSMPisChecked(e.target.checked)}
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label">SMP/MTS</label>
                    </div>
                    <div className="form-check">
                      <input
                        onChange={(e) => setLevelSMAisChecked(e.target.checked)}
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label">SMA/MA/SMK/MAK</label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6>
                      <strong>Kelas</strong>
                    </h6>
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setClass1isChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                          />
                          <label className="form-check-label">I</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setClass4isChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="4"
                          />
                          <label className="form-check-label">IV</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setClass7isChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="7"
                          />
                          <label className="form-check-label">VII</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setClass10isChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="10"
                          />
                          <label className="form-check-label">X</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6>
                      <strong>Mata Pelajaran</strong>
                    </h6>
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectIPAisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="Ilmu%20Pengetahuan%20Alam"
                          />
                          <label className="form-check-label">IPA</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectIPSisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="Ilmu%20Pengetahuan%20Sosial"
                          />
                          <label className="form-check-label">IPS</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectIPASisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="seni"
                          />
                          <label className="form-check-label">IPAS</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectBIndonesiaisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="Bahasa%20Indonesia"
                          />
                          <label className="form-check-label">
                            B.Indonesia
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectBInggrisisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="Bahasa%20Inggris"
                          />
                          <label className="form-check-label">B.Inggris</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectPJOKisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="PJOK"
                          />
                          <label className="form-check-label">PJOK</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectPKNisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="kewarganegaraan"
                          />
                          <label className="form-check-label">PPKN</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectMatematikaisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="matematika"
                          />
                          <label className="form-check-label">Matematika</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectInformatikaisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="seni"
                          />
                          <label className="form-check-label">
                            Informatika
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectKepercayaanisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="seni"
                          />
                          <label className="form-check-label">
                            Kepercayaan
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectSTariisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="seni"
                          />
                          <label className="form-check-label">Seni Tari</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectSRupaisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="seni"
                          />
                          <label className="form-check-label">Seni Rupa</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectSMusikisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="seni"
                          />
                          <label className="form-check-label">Seni Musik</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectSTeaterisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="seni"
                          />
                          <label className="form-check-label">
                            Seni Teater
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectAgamaIslamisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="agama"
                          />
                          <label className="form-check-label">
                            Agama Islam
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectAgamaKristenisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="agama"
                          />
                          <label className="form-check-label">
                            Agama Kristen
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectAgamaKatolikisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="agama"
                          />
                          <label className="form-check-label">
                            Agama Katolik
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectAgamaHinduisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="agama"
                          />
                          <label className="form-check-label">
                            Agama Hindu
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectAgamaBudhaisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="agama"
                          />
                          <label className="form-check-label">
                            Agama Budha
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectAgamaKhonghucuisChecked(
                                e.target.checked
                              )
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="agama"
                          />
                          <label className="form-check-label">
                            Agama Khonghucu
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectSejarahisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="sejarah"
                          />
                          <label className="form-check-label">Sejarah</label>
                        </div>
                      </div>
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
            </div>
            {/* End of sidebar */}
          </aside>
          <div className="col-lg-9">
            {/* Main Content */}
            <div className="row">
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
                    className="btn btn-outline-primary btn-lg mx-2 d-none"
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
                  {textbooks.length < 1 ? (
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
                    textbooks.map((book, index) => {
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
                              book.type === "interactive"
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
                            Silahkan klik tombol unduh untuk membaca
                          </p>
                          <a className="btn btn-light" href={book.attachment}>
                            <i className="fas fa-fw fa-download" /> Unduh
                          </a>
                            </object>
                          </Modal>
                        </div>
                      );
                    })
                  )}
                </div>
                {textbooks.length < limit - 1 ? (
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

export default BukuSekolahPenggerak;
