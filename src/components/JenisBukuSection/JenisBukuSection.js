import interakrifIcon from '../../assets/img/interaktif.png';
import pdfIcon from '../../assets/img/pdf.png';
import audioIcon from '../../assets/img/audio.png';
import './JenisBukuSection.scss';

const JenisBukuSection = () => {
    return (
        <section id="JenisBukuSection">
            <div className="container">
                <div className="row text-center">
                    <div className="col">
                        <h2 className="section-title">Jenis Buku</h2>
                        <p>Pilih jenis buku sesuai kebutuhanmu</p>
                        <span className="section-line" />
                    </div>
                </div>
                <div className="row mt-5 justify-content-center text-white text-center">
                    <div className="col-md-4 col-lg-3 my-5">
                        <img width="auto" height="100px" src={interakrifIcon} alt="" />
                        <h5 className="my-5"><strong>Buku Elektronik Interaktif</strong></h5>
                        <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quisquam quam dolores asperiores animi. Voluptas, obcaecati! Dolorem saepe non iusto ipsa alias facilis repudiandae exercitationem modi odio eaque. Sint, commodi.</small></p>
                    </div>
                    <div className="col-md-4 col-lg-3 my-5">
                        <img width="auto" height="100px" src={pdfIcon} alt="" />
                        <h5 className="my-5"><strong>Buku PDF</strong></h5>
                        <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quisquam quam dolores asperiores animi. Voluptas, obcaecati! Dolorem saepe non iusto ipsa alias facilis repudiandae exercitationem modi odio eaque. Sint, commodi.</small></p>
                    </div>
                    <div className="col-md-4 col-lg-3 my-5">
                        <img width="auto" height="100px" src={audioIcon} alt="" />
                        <h5 className="my-5"><strong>Buku Audio</strong></h5>
                        <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quisquam quam dolores asperiores animi. Voluptas, obcaecati! Dolorem saepe non iusto ipsa alias facilis repudiandae exercitationem modi odio eaque. Sint, commodi.</small></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JenisBukuSection
