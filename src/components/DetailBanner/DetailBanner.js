import placeholderImg from '../../assets/img/book-placeholder.jpg';
import './DetailBanner.scss';

const DetailBanner = ({bookImg, title, writer, description, attachment, btnType, readModal, reportModal}) => {
    return (
        <section id="DetailBanner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3 mb-5 mb-md-0">
                        <img className="img-fluid shadow d-block mx-auto" loading="lazy" src={bookImg || placeholderImg} alt="" style={{borderRadius: '20px'}} />    
                    </div>
                    <div className="col-md-8 col-lg-9 ps-md-5">
                        <h1><strong>{title || 'Unknown'}</strong></h1>
                        <h6>Oleh: {writer || 'Unknown'}</h6>
                        <h5 className="mt-5"><strong>Deskripsi</strong></h5>
                        <p className="mb-4">{description || 'Belum ada deskripsi untuk buku ini'}</p>
                        <div className="d-grid gap-2 d-md-block">
                        {btnType === 'pdf' ? <button className="btn btn-light btn-md px-4 mx-2 mx-lg-0 me-lg-2" data-bs-toggle="modal" data-bs-target={readModal}><i className="fab fa-fw fa-readme" /> Baca</button> : <button className="btn btn-light btn-md px-4 mx-2"><i className="fas fa-fw fa-play" /> Putar</button>}
                            <a className="btn btn-light btn-md px-4 mx-2" href={attachment} target="_blank" rel="noopener noreferrer"><i className="fas fa-fw fa-download" /> Unduh</a>
                            <button className="btn btn-danger btn-md px-4 mx-2" data-bs-toggle="modal" data-bs-target={reportModal}><i className="fas fa-fw fa-exclamation-triangle" /> Lapor</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailBanner;
