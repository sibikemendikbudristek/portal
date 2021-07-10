import ikapiLogo from '../../assets/img/ikapi.png';
import perpusnasLogo from '../../assets/img/perpusnas.png';
import rumahbelajarLogo from '../../assets/img/rumah-belajar.png';
import belajaridLogo from '../../assets/img/belajar-id.png';
import bukunesiaLogo from '../../assets/img/bukunesia.png';
import './RelatedSiteSection.scss';

const RelatedSiteSection = () => {
    return (
        <section id="RelatedSiteSection">
            <div className="container py-5 mt-5">
                <div className="row text-center my-5">
                    <div className="col">
                        <h3>Laman Terkait</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8 col-md-3 col-lg-2 my-2">
                        <a href="https://ikapi.org" target="_blank" rel="noreferrer">
                            <div className="card">
                                <div className="card-body">
                                    <img 
                                        className="img-fluid d-block mx-auto"
                                        src={ikapiLogo}
                                        alt="IKAPI"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-8 col-md-3 col-lg-2 my-2">
                        <a href="https://belajar.kemdikbud.go.id" target="_blank" rel="noreferrer">
                            <div className="card">
                                <div className="card-body">
                                    <img 
                                        className="img-fluid d-block mx-auto"
                                        src={rumahbelajarLogo}
                                        alt="Rumah Belajar"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-8 col-md-3 col-lg-2 my-2">
                        <a href="https://www.perpusnas.go.id/" target="_blank" rel="noreferrer">
                            <div className="card">
                                <div className="card-body">
                                    <img 
                                        className="img-fluid d-block mx-auto"
                                        src={perpusnasLogo}
                                        alt="Perpustakaan Nasional Indonesia"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-8 col-md-3 col-lg-2 my-2">
                        <a href="https://www.belajar.id/" target="_blank" rel="noreferrer">
                            <div className="card">
                                <div className="card-body">
                                    <img 
                                        className="img-fluid d-block mx-auto"
                                        src={belajaridLogo}
                                        alt="Belajar.id"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-8 col-md-3 col-lg-2 my-2">
                        <a href="http://google.com" target="_blank" rel="noreferrer">
                            <div className="card">
                                <div className="card-body">
                                    <img 
                                        className="img-fluid d-block mx-auto"
                                        src={bukunesiaLogo}
                                        alt="Bukunesia"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelatedSiteSection
