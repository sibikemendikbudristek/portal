import educationImg from '../../assets/img/education.png';
import JenjangSectionCard from './JenjangSectionCard';
import './JenjangSection.scss';

const JenjangSection = () => {
    return (
        <section id="JenjangSection">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col d-block d-md-none">
                        <img height="250" width="auto" className="d-block mx-auto mb-3" src={educationImg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="section-title text-center text-md-start mb-4">SIBI Tersedia Untuk Berbagai Jenjang Pendidikan</h2>
                        <JenjangSectionCard
                            thumbnail=""
                            title="PAUD"
                            description="Pendidikan Anak Usia Dini"
                        />
                        <JenjangSectionCard
                            thumbnail=""
                            title="SD"
                            description="Sekolah Dasar"
                        />
                        <JenjangSectionCard
                            thumbnail=""
                            title="SMP"
                            description="Sekolah Menengah Pertama"
                        />
                        <JenjangSectionCard
                            thumbnail=""
                            title="SMA/SMK"
                            description="Sekolah Menengah Atas/Kejuruan"
                        />
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <img className="img-fluid d-block mx-auto" src={educationImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JenjangSection
