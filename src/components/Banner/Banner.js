import './Banner.scss';

const Banner = ({bannerTitle, bannerDescription, bannerImg}) => {
    return (
        <section id="Banner">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-8 pb-5 text-center text-md-start">
                        <h1 className="section-title">{bannerTitle}</h1>
                        <p>{bannerDescription}</p>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <img className="img-fluid float-end" src={bannerImg} alt={bannerTitle} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
