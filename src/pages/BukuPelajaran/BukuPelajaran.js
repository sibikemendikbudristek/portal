import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Banner from '../../components/Banner/Banner';
import bukuPelajaranImgBanner from '../../assets/img/buku-pelajaran-img.png';
import BookItem from '../../components/BookItem/BookItem';
import Modal from '../../components/Modal/Modal';

const base_url = 'https://sibi.sc.cloudapp.web.id/api/catalogue';

const BukuPelajaran = () => {
    const [books, setBooks] = useState([]);
    const [limit, setLimit] = useState(6);
    const [type, setType] = useState('type_pdf');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getBooks = async () => {
            setLoading(true);
            console.log(type)
            try {
                let response = await axios.get(`${base_url}/getTextBooks?${type}&limit=${limit}&offset=0&title=buku`);
                setBooks(response.data.results);
                setLoading(false);
            } catch(err) {
                setLoading(true);
                return err.message;
            }
        }
        getBooks();
    }, [type, limit]);
    
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
                                <form action="">
                                    <div className="mb-3">
                                        <h6><strong>Tipe Buku</strong></h6>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <label className="form-check-label">
                                                PDF
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <label className="form-check-label">
                                                Audio
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <label className="form-check-label">
                                                Interaktif
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h6><strong>Jenjang</strong></h6>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <label className="form-check-label">
                                                SD/MI
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <label className="form-check-label">
                                                SMP/MTS
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
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
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        I
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        II
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        III
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        IV
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        V
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        VI
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        VII
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        VIII
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        IX
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        X
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        XI
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
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
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        IPA
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        IPS
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        B.Indonesia
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        B.Inggris
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        PJOK
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        PKN
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        Matematika
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        Prakarya
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        S.Budaya
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        Agama
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        Sejarah
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <label className="form-check-label">
                                                        Tematik
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary rounded-pill" type="submit">Terapkan</button>
                                        <button className="btn btn-light rounded-pill" type="button">Reset</button>
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
                                <div className="d-grid d-md-block gap-2 mb-3 px-5 px-md-0">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary btn-lg mx-2"
                                        onClick={(() => setType('type_pdf'))}
                                    >
                                        Buku PDF
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary btn-lg mx-2"
                                        onClick={(() => setType('type_audio'))}
                                    >
                                        Buku Audio
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary btn-lg mx-2"
                                        onClick={(() => setType('type_interactive'))}
                                    >
                                        Buku Interaktif
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center my-3">
                            <div className="col-9 col-md-7">
                                <form action="">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bg-white border-end-0 border-2">
                                            <i className="fas fa-search text-muted" />
                                        </span>
                                        <input type="text" className="form-control border-start-0 border-2 shadow-none" placeholder="Cari buku..." />
                                    </div>
                                </form>
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
                                    {books.map((book, index) => {
                                        return(
                                            <div className="col-md-4 my-3 px-5 px-md-3" key={index}>
                                                <BookItem 
                                                    bookImg={book.image}
                                                    category={book.name}
                                                    title={book.title}
                                                    detailUrl={book.code === 'BEI' ? book.attachment : `/buku-teks/${book.code}/${book.slug}`}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="row my-5">
                                    <div className="col text-center">
                                        <button onClick={(() => setLimit(limit + 3))} className="btn btn-primary btn-lg rounded-pill">Load More</button>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            {/* End of Main Content */}
            </section>
            <Modal title="Test">
                <p>Hello World</p>
            </Modal>
        </main>
    );
};

export default BukuPelajaran;
