import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Banner from '../../components/Banner/Banner';
import bukuPelajaranImgBanner from '../../assets/img/buku-teks.png';
import BookItem from '../../components/BookItem/BookItem';
import Modal from '../../components/Modal/Modal';

const base_url = 'https://sibi.sc.cloudapp.web.id/api/catalogue';

const BukuTeks = () => {
    const [textbooks, setTextBooks] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    const [limit, setLimit] = useState(6);
    const [type, setType] = useState('type_pdf');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getTextBooks = async () => {
            setLoading(true);
            try {
                let response = await axios.get(`${base_url}/getTextBooks?limit=${limit}&offset=0&title=${searchTitle}&${type}`);
                setTextBooks(response.data.results);
                setLoading(false);
            } catch(err) {
                setLoading(true);
                return err.message;
            }
        }
        getTextBooks();
    }, [type, limit, searchTitle]);

    const typePdfHandler = () => {
       setType('type_pdf');
       setLimit(6);
    }

    const typeAudioHandler = () => {
        setType('type_audio');
        setLimit(6);
    }
  
    const typeInteractiveHandler = () => {
        setType('type_interactive');
        setLimit(6);
    }
    
    return (
        <main style={{minHeight: '100vh'}}>
            <Banner
                bannerTitle="Buku Teks"
                bannerDescription="Temukan buku-buku teks terbaru sesuai kebutuhanmu"
                bannerImg={bukuPelajaranImgBanner}
            />
            <section className="container my-5" style={{minHeight: '100vh'}}>
                <div className="row justify-content-between">
                    <aside className="col-lg-3 d-none d-lg-block">
                        {/* Sidebar */}
                        <div className="card border-0 shadow" style={{borderRadius: '20px'}}>
                            <div className="card-body" style={{borderRadius: '20px'}}>
                                <form>
                                    <div className="mb-3">
                                        <h6><strong>Tipe Buku</strong></h6>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="type_pdf" />
                                            <label className="form-check-label">
                                                PDF
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="type_audio" />
                                            <label className="form-check-label">
                                                Audio
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="type_interactive" />
                                            <label className="form-check-label">
                                                Interaktif
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h6><strong>Jenjang</strong></h6>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="SD" />
                                            <label className="form-check-label">
                                                SD/MI
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="SMP" />
                                            <label className="form-check-label">
                                                SMP/MTS
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="SMA" />
                                            <label className="form-check-label">
                                                SMA/MA
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h6><strong>Kelas</strong></h6>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="1" />
                                                    <label className="form-check-label">
                                                        I
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="2" />
                                                    <label className="form-check-label">
                                                        II
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="3" />
                                                    <label className="form-check-label">
                                                        III
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="4" />
                                                    <label className="form-check-label">
                                                        IV
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="5" />
                                                    <label className="form-check-label">
                                                        V
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="6" />
                                                    <label className="form-check-label">
                                                        VI
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="7" />
                                                    <label className="form-check-label">
                                                        VII
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="8" />
                                                    <label className="form-check-label">
                                                        VIII
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="9" />
                                                    <label className="form-check-label">
                                                        IX
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="10" />
                                                    <label className="form-check-label">
                                                        X
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="11" />
                                                    <label className="form-check-label">
                                                        XI
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="12" />
                                                    <label className="form-check-label">
                                                        XII
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h6><strong>Mata Pelajaran</strong></h6>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="Ilmu%20Pengetahuan%20Alam" />
                                                    <label className="form-check-label">
                                                        IPA
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="Ilmu%20Pengetahuan%20Sosial" />
                                                    <label className="form-check-label">
                                                        IPS
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="Bahasa%20Indonesia" />
                                                    <label className="form-check-label">
                                                        B.Indonesia
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="Bahasa%20Inggris" />
                                                    <label className="form-check-label">
                                                        B.Inggris
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="PJOK" />
                                                    <label className="form-check-label">
                                                        PJOK
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="kewarganegaraan" />
                                                    <label className="form-check-label">
                                                        PKN
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="matematika" />
                                                    <label className="form-check-label">
                                                        Matematika
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="prakarya" />
                                                    <label className="form-check-label">
                                                        Prakarya
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="seni" />
                                                    <label className="form-check-label">
                                                        S.Budaya
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="agama" />
                                                    <label className="form-check-label">
                                                        Agama
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="sejarah" />
                                                    <label className="form-check-label">
                                                        Sejarah
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="tematik" />
                                                    <label className="form-check-label">
                                                        Tematik
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary rounded-pill" type="submit">Terapkan</button>
                                        <button className="btn btn-light rounded-pill" type="reset">Reset</button>
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
                                <div className="nav d-grid d-md-block gap-2 mb-3 px-5 px-md-0" role="tablist">
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
                                        <input type="text" onChange={event => {setSearchTitle(event.target.value)}} className="form-control border-start-0 border-2 shadow-none" placeholder="Cari buku..." />
                                    </div>
                            </div>
                        </div>
                        {loading ? 
                            <Loader
                                className="text-center my-3"
                                type="TailSpin"
                                color="#00BFFF"
                                height={80}
                                width={80}
                            /> : 
                            <>
                                <div className="row justify-content-start">
                                    {textbooks.length < 1 ?
                                        <div className="col text-center my-5">
                                            <i className="fas fa-times text-warning my-3" style={{fontSize: '60px'}} />
                                            <p className="lead">Buku tidak ditemukan di kategori ini,<br />cari dengan kata kunci lain.</p> 
                                        </div>
                                        : 
                                        textbooks.map((book, index) => {
                                        return(
                                            <div className="col-md-4 my-3 px-5 px-md-3" key={index}>
                                                <BookItem
                                                    readModal={'#'+book.slug}
                                                    bookImg={book.image}
                                                    category={book.name}
                                                    title={book.title}
                                                    bookType={book.type}
                                                    detailUrl={book.code === 'BEI' ? book.attachment : `/buku-teks/${book.code}/${book.slug}`}
                                                />
                                                <Modal id={book.slug} title={book.title}>
                                                    <embed type="application/pdf" src={book.attachment} width="100%" height="800" />
                                                </Modal>
                                            </div>
                                        );
                                    })}
                                </div>
                                {textbooks.length < limit - 1 ? '' : 
                                    <div className="row my-5">
                                        <div className="col text-center">
                                            <button onClick={(() => setLimit(limit + 3))} className="btn btn-primary btn-lg rounded-pill">Load More</button>
                                        </div>
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            {/* End of Main Content */}
            </section>
        </main>
    );
};

export default BukuTeks;
