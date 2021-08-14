import { Link } from 'react-router-dom';
import './Hero.scss';
import heroImg from '../../assets/img/hero-img.webp';

const Hero = () => {
    return (
        <section id="Hero">
            <div className="container">
                <div className="row justify-content-between text-center text-md-start">
                    <div className="col-lg-5 mt-5 pt-3">
                        <h1 className="hero-title">Layanan Buku Daring</h1>
                        <p>Belajar mandiri dengan buku pelajaran resmi yang diterbitkan oleh Kemendikbud. 
                        Dipersembahkan untuk para peserta didik, pendidik, dan tenaga kependidikan dalam
                        pembelajaran berbasis elektronik. <strong>Merdeka Belajar!</strong></p>
                        <a className="btn btn-primary rounded-pill py-3 px-4" href="#PanduanSection">Pelajari Sekarang</a>
                        <p className="my-4">Masuk sebagai:</p>
                        <div className="d-grid gap-2 d-md-block">
                            <Link className="btn btn-outline-primary rounded mx-5 mx-md-0 me-md-2" to="/login">
                               <i className="fas fa-fw fa-user" /> Siswa
                            </Link>
                            <Link className="btn btn-outline-primary rounded mx-5 mx-md-2" to="/login">
                                <i className="fas fa-fw fa-user-graduate" /> Guru
                            </Link>
                            <a className="btn btn-outline-primary rounded mx-5 mx-md-2" href="https://sibi.sc.cloudapp.web.id/" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-fw fa-book-reader" /> Pelaku Perbukuan
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5">
                        <img className="img-fluid float-end" src={heroImg} loading="lazy" alt="Selamat datang di SIBI" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
