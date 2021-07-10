import Banner from '../../components/Banner/Banner';
import bukuPelajaranImgBanner from '../../assets/img/buku-pelajaran-img.png';
import BookItem from '../../components/BookItem/BookItem';
import data from '../../assets/data/dummy';

const BukuPelajaran = () => {
    const pdfBooks = data[0].pdfBooks;
    const interaktifBooks = data[0].interaktifBooks;
    const audioBooks = data[0].audioBooks;
    
    return (
        <main style={{minHeight: '100vh'}}>
            <Banner
                bannerTitle="Buku Pelajaran"
                bannerDescription="Temukan buku-buku pelajaran terbaru sesuai kebutuhanmu"
                bannerImg={bukuPelajaranImgBanner}
            />
            <section className="container my-5">
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
                                <div className="nav nav-pills d-grid d-md-block gap-2 mb-3 px-5 px-md-0" id="pills-tab" role="tablist">
                                    <button
                                        className="btn btn-outline-primary btn-lg mx-2 active"
                                        id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-pdf"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-pdf"
                                        aria-selected="true">
                                        Buku PDF
                                    </button>
                                    <button
                                        className="btn btn-outline-primary btn-lg mx-2"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-audio"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-audio"
                                        aria-selected="false">
                                        Buku Audio
                                    </button>
                                    <button
                                        className="btn btn-outline-primary btn-lg mx-2"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-interaktif"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-interaktif"
                                        aria-selected="false">
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
                        <div className="row justify-content-center px-5 px-md-0">
                            <div className="col">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-pdf" role="tabpanel" aria-labelledby="pills-pdf-tab">
                                        <div className="row justify-content-start">
                                            {pdfBooks.map((pdfBook, index) => {
                                                return(
                                                    <div className="col-md-4 my-3" key={index}>
                                                        <BookItem 
                                                            bookImg={pdfBook.bookImg} 
                                                            category={pdfBook.category}
                                                            title={pdfBook.title}
                                                            readUrl={pdfBook.readUrl}
                                                            detailUrl={pdfBook.detailUrl}
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="row my-5">
                                            <div className="col text-center">
                                                <button className="btn btn-primary btn-lg rounded-pill">Load More</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="tab-pane fade" id="pills-audio" role="tabpanel" aria-labelledby="pills-audio-tab">
                                        <div className="row justify-content-start">
                                            {audioBooks.map((audioBook, index) => {
                                                return(
                                                    <div className="col-md-4 my-3" key={index}>
                                                        <BookItem 
                                                            bookImg={audioBook.bookImg} 
                                                            category={audioBook.category}
                                                            title={audioBook.title}
                                                            readUrl={audioBook.readUrl}
                                                            detailUrl={audioBook.detailUrl}
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="row my-5">
                                            <div className="col text-center">
                                                <button className="btn btn-primary btn-lg rounded-pill">Load More</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="pills-interaktif" role="tabpanel" aria-labelledby="pills-interaktif-tab">
                                        <div className="row justify-content-start">
                                            {interaktifBooks.map((interaktifBook, index) => {
                                                return(
                                                    <div className="col-md-4 my-3" key={index}>
                                                        <BookItem 
                                                            bookImg={interaktifBook.bookImg} 
                                                            category={interaktifBook.category}
                                                            title={interaktifBook.title}
                                                            readUrl={interaktifBook.readUrl}
                                                            detailUrl={interaktifBook.detailUrl}
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="row my-5">
                                            <div className="col text-center">
                                                <button className="btn btn-primary btn-lg rounded-pill">Load More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Main Content */}
                </div>
            </section>
        </main>
    );
};

export default BukuPelajaran;
