import Banner from '../../components/Banner/Banner';
import bukuPelajaranImgBanner from '../../assets/img/buku-pelajaran-img.png';
import BookItem from '../../components/BookItem/BookItem';

const BukuPelajaran = () => {
    return (
        <main style={{minHeight: '100vh'}}>
            <Banner
                bannerTitle="Buku Pelajaran"
                bannerDescription="Temukan buku-buku pelajaran terbaru sesuai kebutuhanmu"
                bannerImg={bukuPelajaranImgBanner}
            />
            <section className="container my-5">
                <div className="row justify-content-between">
                    <aside className="col-lg-3">
                        {/* Sidebar */}
                        <div className="card shadow">
                            <div className="card-body">
                                <h5>Tipe Buku</h5>
                                <input type="checkbox" name="pdf" id="pdf" /> PDF
                                <input type="checkbox" name="interaktif" id="interaktif" /> Interaktif
                                <input type="checkbox" name="audio" id="audio" /> Audio
                            </div>
                        </div>
                    </aside>
                    <div className="col-lg-9">
                        {/* Main Content */}
                        <div className="row">
                            <div className="col">
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <BookItem />
                            </div>
                            <div className="col">
                                <BookItem />
                            </div>
                            <div className="col">
                                <BookItem />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BukuPelajaran;
