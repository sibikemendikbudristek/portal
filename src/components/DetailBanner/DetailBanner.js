import placeholderImg from '../../assets/img/placeholder.jpg';
import './DetailBanner.scss';

const DetailBanner = () => {
    return (
        <section id="DetailBanner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3 mb-5 mb-md-0">
                        <img className="img-fluid shadow d-block mx-auto" src={placeholderImg} alt="" style={{borderRadius: '20px'}} />    
                    </div>
                    <div className="col-md-8 col-lg-9 ps-md-5">
                        <h1><strong>Buku Interaktif Seni Budaya kelas VII</strong></h1>
                        <h6>Oleh: Penulis</h6>
                        <h5 className="mt-5"><strong>Deskripsi</strong></h5>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus veniam impedit nostrum minus amet ipsa blanditiis corrupti nulla quod accusantium. Odit doloremque fugit repellat quos ea magni natus quod mollitia?</p>
                        <div className="d-grid gap-2 d-md-block">
                            <button className="btn btn-light btn-md px-4 mx-2 mx-lg-0 me-lg-2"><i className="fab fa-fw fa-readme" /> Baca</button>
                            <button className="btn btn-light btn-md px-4 mx-2"><i className="fas fa-fw fa-download" /> Unduh</button>
                            <button className="btn btn-danger btn-md px-4 mx-2"><i className="fas fa-fw fa-exclamation-triangle" /> Lapor</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailBanner;
