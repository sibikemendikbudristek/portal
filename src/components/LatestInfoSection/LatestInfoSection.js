import infoBg from '../../assets/img/info-bg.png';

const LatestInfoSection = () => {
    return (
        <section>
            <div className="container my-5">
                <div className="row text-center">
                    <div className="col">
                        <h2 className="section-title">Informasi Terbaru</h2>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${infoBg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '40vh'}}>
                <div className="row mt-5 text-center text-white py-5">
                    <div className="col">
                            <p className="w-75 mx-auto mt-4" style={{fontSize: '1.5rem'}}>Pengumuman Pendaftaran Penilaian<br />Buku Non Teks Pelajaran Tahun 2021</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <a className="btn btn-primary rounded-pill btn-lg" href="https://app.buku.kemdikbud.go.id/kebijakan">Baca Selengkapnya</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestInfoSection
