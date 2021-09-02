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
                        <h2 className="section-title text-center text-md-start mb-4">Buku untuk berbagai jenjang pendidikan</h2>
                        <JenjangSectionCard
                            bgColor="#ffcccc"
                            thumbnail="PAUD"
                            title="PAUD"
                            description="Pendidikan Anak Usia Dini"
                        />
                        <JenjangSectionCard
                            bgColor="#ffb733"
                            thumbnail="SD"
                            title="SD"
                            description="Sekolah Dasar"
                        />
                        <JenjangSectionCard
                            bgColor="#add8e6"
                            thumbnail="SMP"
                            title="SMP"
                            description="Sekolah Menengah Pertama"
                        />
                        <JenjangSectionCard
                            bgColor="#4dff4d"
                            thumbnail="SMA/SMK"
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
