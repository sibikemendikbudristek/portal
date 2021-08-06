import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Banner from '../../components/Banner/Banner';
import bukuUmumImgBanner from '../../assets/img/nonteks-img.png';
import BookItem from '../../components/BookItem/BookItem';
import Modal from '../../components/Modal/Modal';

const base_url = 'https://sibi.sc.cloudapp.web.id/api/catalogue';

const BukuNonteks = () => {
    const [nontextbooks, setNonTextBooks] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    const [limit, setLimit] = useState(6);
    const [type, setType] = useState('type_pdf');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getNonTextBooks = async () => {
            setLoading(true);
            try {
                let response = await axios.get(`${base_url}/getNonTextBooks?limit=${limit}&offset=0&title=${searchTitle}&${type}`);
                setNonTextBooks(response.data.results);
                setLoading(false);
            } catch(err) {
                setLoading(true);
                return err.message;
            }
        }
        getNonTextBooks();
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
                bannerTitle="Buku Nonteks"
                bannerDescription="Temukan buku-buku terbaru untuk update pengetahuanmu"
                bannerImg={bukuUmumImgBanner}
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
                                    <input className="form-check-input" type="checkbox" value="fiksi" disabled />
                                    <label className="form-check-label">
                                        Fiksi
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="non-fiksi" disabled />
                                    <label className="form-check-label">
                                        Non Fiksi
                                    </label>
                                </div>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary rounded-pill" type="submit" disabled>Terapkan</button>
                                <button className="btn btn-light rounded-pill" type="button" disabled>Reset</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer border-0 bg-white" style={{borderRadius: '20px'}}>
                        <div className="alert alert-info">
                            <p>Belum ada kategorisasi dalam tipe buku ini, tombol filter sementara dimatikan</p>
                        </div>
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
                                    {nontextbooks.length < 1 ?
                                        <div className="col text-center my-5">
                                            <i className="fas fa-times text-warning my-3" style={{fontSize: '60px'}} />
                                            <p className="lead">Buku tidak ditemukan di kategori ini,<br />cari dengan kata kunci lain.</p> 
                                        </div>
                                        : 
                                        nontextbooks.map((book, index) => {
                                        return(
                                            <div className="col-sm-6 col-md-4 my-3 px-5 px-sm-3" key={index}>
                                                <BookItem
                                                    readModal={'#'+book.slug}
                                                    bookImg={book.image}
                                                    category={book.name}
                                                    title={book.title}
                                                    bookType={book.type}
                                                    detailUrl={book.code === 'BEI' ? book.attachment : `/buku-nonteks/detail/${book.slug}`}
                                                />
                                                <Modal id={book.slug} title={book.title}>
                                                    <embed type="application/pdf" src={book.attachment} width="100%" height="800" />
                                                </Modal>
                                            </div>
                                        );
                                    })}
                                </div>
                                {nontextbooks.length < limit - 1 ? '' : 
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

export default BukuNonteks;