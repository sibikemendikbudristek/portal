import { Link } from 'react-router-dom';
import './CTASection.scss';

const CTASection = ({ctaImg}) => {
    return (
        <section id="CTASection">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-none d-lg-block">
                        <img className="img-fluid d-block mx-auto" src={ctaImg} alt="" />
                    </div>
                    <div className="col-md-6 px-md-5 py-md-5 text-center text-md-start">
                        <h2 className="section-title-white mb-5">Tunggu Apa Lagi?<br />Ayo Coba Sekarang!</h2>
                        <Link className="btn btn-warning rounded-pill px-4 btn-lg me-3" to="/register"><strong>Daftar</strong></Link>
                        <Link className="btn btn-light rounded-pill btn-lg px-3" to="/buku-teks"><strong>Cari Buku</strong></Link>
                    </div>
                    <div className="col-md-6 d-block d-lg-none mt-4">
                        <img className="img-fluid d-block mx-auto" src={ctaImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
