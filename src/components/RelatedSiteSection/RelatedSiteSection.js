import ikapiLogo from '../../assets/img/ikapi.png';
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
                        <a href="http://google.com" target="_blank" rel="noreferrer">
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
                        <a href="http://google.com" target="_blank" rel="noreferrer">
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
                        <a href="http://google.com" target="_blank" rel="noreferrer">
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
                        <a href="http://google.com" target="_blank" rel="noreferrer">
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
                        <a href="http://google.com" target="_blank" rel="noreferrer">
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
                </div>
            </div>
        </section>
    )
}

export default RelatedSiteSection
