import {Link} from 'react-router-dom';
import kemendikbudLogo from '../../assets/img/kemendikbud.webp';
import './Footer.scss';
import sitemap from '../Navbar/NavbarItems';

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
                        <a className="footer-social-icon" href="!#" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram" />
                        </a>
                        <a className="footer-social-icon" href="!#" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook" />
                        </a>
                        <a className="footer-social-icon" href="!#" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter" />
                        </a>
                        <a className="footer-social-icon" href="!#" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin" />
                        </a>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-between my-5">
                    <div className="col-md-4 pe-md-5">
                        <p className="text-white"><small><strong>Pusat Kurikulum dan Perbukuan</strong><br />Badan Penelitian dan Pengembangan dan Perbukuan. Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi</small></p>
                    </div>
                    <div className="col-md-3 mt-4 mt-md-0">
                        <h5 className="footer-section-title">Peta Situs</h5>
                        <ul className="nav flex-column">
                            {sitemap.map((link, index) => {
                                return(
                                    <Link key={index} className="nav-link" to={link.url}>{link.name}</Link>        
                                );
                            })}
                        </ul>
                    </div>
                    <div className="col-md-5 mt-4 mt-md-0">
                        <h5 className="footer-section-title">Kontak Kami</h5>
                        <p>Jalan Gunung Sahari Raya No.4 Jakarta Pusat DKI Jakarta 10002 Indonesia.</p>
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
