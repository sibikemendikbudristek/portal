import { Link } from 'react-router-dom';
import kemendikbudLogo from '../../assets/img/kemendikbud.webp';
import './Footer.scss';

const Footer = () => {
    return (
        <footer id="Footer">
            <div className="container">
                <div className="row justify-content-center text-white">
                    <div className="col-md-8 col-lg-9">
                        <img className="footer-img" src={kemendikbudLogo} alt="Sistem Informasi Perbukuan Indonesia" />
                        <h5 className="footer-title">Sistem Informasi<br /><strong>Perbukuan Indonesia</strong></h5>
                    </div>
                    <div className="col-md-4 col-lg-3 text-center text-md-end">
                        <a href="https://www.instagram.com/sibi_kemdikbud/" target="_blank" className="footer-social-icon">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="https://www.facebook.com/SIBIpusbuk/" target="_blank" className="footer-social-icon">
                            <i className="fab fa-facebook" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCLm7X0R-hLHArgF88Z6OPQw" target="_blank" className="footer-social-icon">
                            <i className="fab fa-youtube" />
                        </a>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-between my-5">
                    <div className="col-md-4 pe-md-5">
                        <p className="text-white"><strong>Pusat Perbukuan</strong><br /><small>Badan Standar, Kurikulum, dan Asesmen Pendidikan. Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.</small></p>
                    </div>
                    <div className="col-md-3 mt-4 mt-md-0">
                        <h5 className="footer-section-title">Peta Situs</h5>
                        <ul className="nav flex-column">
                            <Link className="nav-link" to="/">Beranda</Link>
                            {/* <Link className="nav-link" to="/artikel">Berita Terbaru</Link> */}
                            <Link className="nav-link" to="/buku-teks">Buku Teks K13</Link>
                            <Link className="nav-link" to="/buku-nonteks">Buku Nonteks</Link>
                            <Link className="nav-link" to="/buku-kurikulum-merdeka">Buku Kurikulum Merdeka</Link>
                            <a className="nav-link" href="https://app.buku.kemdikbud.go.id/penilaian">Penilaian</a>
                            <a className="nav-link" href="https://app.buku.kemdikbud.go.id/kebijakan">Kebijakan</a>
                            <Link className="nav-link" to="/panduan">Panduan</Link>
                            <Link className="nav-link" to="/tentang-kami">Tentang Kami</Link>
                        </ul>
                    </div>
                    <div className="col-md-5 mt-4 mt-md-0">
                        <h5 className="footer-section-title">Kontak Kami</h5>
                        <p>Jalan RS. Fatmawati Gd D Komplek Kemendikbudristek Cipete, Jakarta 12410</p>
                        <a className="nav-link" href="phoneto:021-3804248"><i className="fas fa-fw fa-phone-alt me-3" />021-3804248</a>
                        <a className="nav-link" href="mailto:buku@kemdikbud.go.id"><i className="fas fa-fw fa-envelope me-3" />buku@kemdikbud.go.id</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <p>&copy; Copyrights 2021 Sistem Informasi Perbukuan Indonesia. All rights reserved. </p>
                    </div>
                    <div className="col text-end">
                        <a className="btn btn-warning rounded" href="#top">
                            <i className="fas fa-arrow-circle-up" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
