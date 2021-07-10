import Banner from '../../components/Banner/Banner';
import bukuUmumImgBanner from '../../assets/img/buku-umum-img.png';
import BookItem from '../../components/BookItem/BookItem';
import data from '../../assets/data/dummy';

const BukuUmum = () => {
    const pdfBooks = data[0].pdfBooks;
    const interaktifBooks = data[0].interaktifBooks;
    const audioBooks = data[0].audioBooks;
    
    return (
        <main style={{minHeight: '100vh'}}>
            <Banner
                bannerTitle="Buku Umum"
                bannerDescription="Temukan berbagai buku yang kamu inginkan untuk memperluas wawasanmu"
                bannerImg={bukuUmumImgBanner}
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

export default BukuUmum;
