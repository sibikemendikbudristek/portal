import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Banner from "../../components/Banner/Banner";
import bukuPelajaranImgBanner from "../../assets/img/buku-tekss.png";
import BookItem from "../../components/BookItem/BookItem";
import Modal from "../../components/Modal/Modal";

const base_url = "https://sibi.sc.cloudapp.web.id/api/catalogue";

const BukuSekolahPenggerak = () => {
  const [textbooks, setTextBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [limit, setLimit] = useState(6);
  const [type, setType] = useState("type_pdf");
  const [loading, setLoading] = useState(false);

  // Check Filter
  const [levelSDisChecked, setlevelSDisChecked] = useState(false);
  const [levelSMPisChecked, setLevelSMPisChecked] = useState(false);
  const [levelSMAisChecked, setLevelSMAisChecked] = useState(false);
  const [class1isChecked, setClass1isChecked] = useState(false);
  const [class2isChecked, setClass2isChecked] = useState(false);
  const [class3isChecked, setClass3isChecked] = useState(false);
  const [class4isChecked, setClass4isChecked] = useState(false);
  const [class5isChecked, setClass5isChecked] = useState(false);
  const [class6isChecked, setClass6isChecked] = useState(false);
  const [class7isChecked, setClass7isChecked] = useState(false);
  const [class8isChecked, setClass8isChecked] = useState(false);
  const [class9isChecked, setClass9isChecked] = useState(false);
  const [class10isChecked, setClass10isChecked] = useState(false);
  const [class11isChecked, setClass11isChecked] = useState(false);
  const [class12isChecked, setClass12isChecked] = useState(false);
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
  const [subjectSBudayaisChecked, setSubjectSBudayaisChecked] = useState(false);
  const [subjectSRupaisChecked, setSubjectSRupaisChecked] = useState(false);
  const [subjectSTariisChecked, setSubjectSTariisChecked] = useState(false);
  const [subjectSMusikisChecked, setSubjectSMusikisChecked] = useState(false);
  const [subjectSTeaterisChecked, setSubjectSTeaterisChecked] = useState(false);
  const [subjectAgamaisChecked, setSubjectAgamaisChecked] = useState(false);
  const [subjectSejarahisChecked, setSubjectSejarahisChecked] = useState(false);
  const [subjectInformatikaisChecked, setSubjectInformatikaisChecked] = useState(false);
  const [subjectKepercayaanisChecked, setSubjectKepercayaanisChecked] = useState(false);
  const [subjectIPASisChecked, setSubjectIPASisChecked] = useState(false);

  // Filter
  const [levelSD, setLevelSD] = useState("");
  const [levelSMP, setLevelSMP] = useState("");
  const [levelSMA, setLevelSMA] = useState("");
  const [class1, setClass1] = useState("");
  const [class2, setClass2] = useState("");
  const [class3, setClass3] = useState("");
  const [class4, setClass4] = useState("");
  const [class5, setClass5] = useState("");
  const [class6, setClass6] = useState("");
  const [class7, setClass7] = useState("");
  const [class8, setClass8] = useState("");
  const [class9, setClass9] = useState("");
  const [class10, setClass10] = useState("");
  const [class11, setClass11] = useState("");
  const [class12, setClass12] = useState("");
  const [subjectIPA, setSubjectIPA] = useState("");
  const [subjectIPS, setSubjectIPS] = useState("");
  const [subjectBIndonesia, setSubjectBIndonesia] = useState("");
  const [subjectBInggris, setSubjectBInggris] = useState("");
  const [subjectPJOK, setSubjectPJOK] = useState("");
  const [subjectPKN, setSubjectPKN] = useState("");
  const [subjectMatematika, setSubjectMatematika] = useState("");
  const [subjectSBudaya, setSubjectSBudaya] = useState("");
  const [subjectSMusik, setSubjectSMusik] = useState("");
  const [subjectSRupa, setSubjectSRupa] = useState("");
  const [subjectSTari, setSubjectSTari] = useState("");
  const [subjectSTeater, setSubjectSTeater] = useState("");
  const [subjectAgama, setSubjectAgama] = useState("");
  const [subjectSejarah, setSubjectSejarah] = useState("");
  const [subjectInformatika, setSubjectInformatika] = useState("");
  const [subjectKepercayaan, setSubjectKepercayaan] = useState("");
  const [subjectIPAS, setSubjectIPAS] = useState("");

  useEffect(() => {
    const getTextBooks = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `${base_url}/getTextBooks?category_buku_sekolah_penggerak=true&limit=${limit}&offset=0&title=${searchTitle}&${type}&${levelSD}&${levelSMP}&${levelSMA}&${class1}&${class2}&${class3}&${class4}&${class5}&${class6}&${class7}&${class8}&${class9}&${class10}&${class11}&${class12}&${subjectIPA}&${subjectIPS}&${subjectBIndonesia}&${subjectBInggris}&${subjectPJOK}&${subjectPKN}&${subjectMatematika}&${subjectSBudaya}&${subjectAgama}&${subjectSejarah}&${subjectSRupa}&${subjectSMusik}&${subjectSTari}&${subjectSTeater}&${subjectInformatika}&${subjectIPAS}&${subjectKepercayaan}`
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
    levelSD,
    levelSMP,
    levelSMA,
    class1,
    class2,
    class3,
    class4,
    class5,
    class6,
    class7,
    class8,
    class9,
    class10,
    class11,
    class12,
    subjectIPA,
    subjectIPS,
    subjectBIndonesia,
    subjectBInggris,
    subjectPJOK,
    subjectPKN,
    subjectMatematika,
    subjectSBudaya,
    subjectAgama,
    subjectSejarah,
    subjectSRupa,
    subjectSMusik,
    subjectSTari,
    subjectSTeater,
    subjectInformatika,
    subjectIPAS,
    subjectKepercayaan
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

    if (class2isChecked === true) {
      setClass2("class_2");
    } else {
      setClass2("");
    }

    if (class3isChecked === true) {
      setClass3("class_3");
    } else {
      setClass3("");
    }

    if (class4isChecked === true) {
      setClass4("class_4");
    } else {
      setClass4("");
    }

    if (class5isChecked === true) {
      setClass5("class_5");
    } else {
      setClass5("");
    }

    if (class6isChecked === true) {
      setClass6("class_6");
    } else {
      setClass6("");
    }

    if (class7isChecked === true) {
      setClass7("class_7");
    } else {
      setClass7("");
    }

    if (class8isChecked === true) {
      setClass8("class_8");
    } else {
      setClass8("");
    }

    if (class9isChecked === true) {
      setClass9("class_9");
    } else {
      setClass9("");
    }

    if (class10isChecked === true) {
      setClass10("class_10");
    } else {
      setClass10("");
    }

    if (class11isChecked === true) {
      setClass11("class_11");
    } else {
      setClass11("");
    }

    if (class12isChecked === true) {
      setClass12("class_12");
    } else {
      setClass12("");
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
      setSubjectPKN("subject_pkn");
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

    if (subjectSBudayaisChecked === true) {
      setSubjectSBudaya("subject_seni");
    } else {
      setSubjectSBudaya("");
    }

    if (subjectSRupaisChecked === true) {
      setSubjectSRupa("subject_seni_rupa");
    } else {
      setSubjectSRupa("");
    }

    if (subjectSTariisChecked === true) {
      setSubjectSTari("subject_seni_rupa");
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

    if (subjectAgamaisChecked === true) {
      setSubjectAgama("subject_agama");
    } else {
      setSubjectAgama("");
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
        bannerDescription="Buku-buku eksklusif dari sekolah penggerak"
        bannerImg={bukuPelajaranImgBanner}
      />
      <section className="container my-5" style={{ minHeight: "100vh" }}>
        <div className="row justify-content-between">
          <aside className="col-lg-3 d-none d-lg-block">
            {/* Sidebar */}
            <div
              className="card border-0 shadow"
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
                      <label className="form-check-label">SMA/MA/SMK</label>
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
                              setClass2isChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="2"
                          />
                          <label className="form-check-label">II</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setClass3isChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="3"
                          />
                          <label className="form-check-label">III</label>
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
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setClass5isChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="5"
                          />
                          <label className="form-check-label">V</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setClass6isChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="6"
                          />
                          <label className="form-check-label">VI</label>
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
                              setClass8isChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="8"
                          />
                          <label className="form-check-label">VIII</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setClass9isChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="9"
                          />
                          <label className="form-check-label">IX</label>
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
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setClass11isChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="11"
                          />
                          <label className="form-check-label">XI</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setClass12isChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="12"
                          />
                          <label className="form-check-label">XII</label>
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
                          <label className="form-check-label">Informatika</label>
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
                          <label className="form-check-label">Kepercayaan</label>
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
                          <label className="form-check-label">Seni Teater</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectSBudayaisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="seni"
                          />
                          <label className="form-check-label">Seni Budaya</label>
                        </div>
                        <div className="form-check">
                          <input
                            onChange={(e) =>
                              setSubjectAgamaisChecked(e.target.checked)
                            }
                            className="form-check-input"
                            type="checkbox"
                            value="agama"
                          />
                          <label className="form-check-label">Agama</label>
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
                        <div className="col-sm-6 col-md-4 my-3 px-5 px-sm-3" key={index}>
                          <BookItem
                            readModal={"#" + book.slug}
                            bookImg={book.image}
                            category={book.type}
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
