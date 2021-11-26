import Banner from '../../components/Banner/Banner';
import CTASection from '../../components/CTASection/CTASection';
import TestimonySection from '../../components/TestimonySection/TestimonySection';
import aboutImgBanner from '../../assets/img/about-cover.webp';
import aboutImg from '../../assets/img/about-img-2.webp';
import aboutImgCTA from '../../assets/img/cta-img.webp';
import data from '../../assets/data/dummy';

const About = () => {
    return (
        <main style={{ minHeight: '100vh' }}>
            <Banner
                bannerTitle="Tentang Kami"
                bannerDescription="Yuk Cari Tahu Lebih Lengkap Tentang SIBI"
                bannerImg={aboutImgBanner}
            />
            <section className="container my-5 py-5">
                <div className="row justify-content-between">
                    <div className="col-md-6">
                        <img className="img-fluid d-block mx-auto" src={aboutImg} alt="Sistem Informasi Perbukuan Indonesia" />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="section-title">Sistem Informasi Perbukuan Indonesia</h2>
                        <p className="mt-5">Pengembangan Sistem Informasi Perbukuan Indonesia
                            merupakan tanggung jawab pemerintah sesuai amanah
                            Undang Undang Nomor 3 Tahun 2017, tentang Sistem
                            Perbukuan. Sistem ini diharapkan menjadi wahana untuk
                            meningkatkan efektivitas dan efisiensi penyelenggaraan
                            ekosistem perbukuan dan mewujudkan ekosistem Perbukuan
                            yang sehat. Pengembangan sistem ini dilakukan secara
                            bertahap dan berkelanjutan.</p>
                        <p>Sistem Informasi Perbukuan ini dikembangkan oleh Puskurbuk,
                            Kemendikbudristek.</p>
                    </div>
                </div>
            </section>
            <section style={{ backgroundColor: '#ebf7ff' }}>
                <div className="container py-5">
                    <div className="row my-5 pb-5">
                        <div className="col text-center">
                            <h2 className="section-title">Mengapa Harus Pakai<br />Buku Kemendikbudristek?</h2>
                            <span className="section-line"></span>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-md-3 col-lg-2 mx-2">
                            <h3 style={{ color: '#0080CA', fontSize: '50px' }}><i className="fas fa-book-open" /></h3>
                            <p className="my-5">Buku Terlengkap Produksi Puskurbuk, Kemendikbudristek</p>
                        </div>
                        <div className="col-md-3 col-lg-2 mx-2">
                            <h3 style={{ color: '#0080CA', fontSize: '50px' }}><i className="fas fa-award" /></h3>
                            <p className="my-5">Buku dikurasi dan telah
                                dinilai layak disebar
                                untuk Pendidikan</p>
                        </div>
                        <div className="col-md-3 col-lg-2 mx-2">
                            <h3 style={{ color: '#0080CA', fontSize: '50px' }}><i className="fas fa-graduation-cap" /></h3>
                            <p className="my-5">Tersedia untuk berbagai
                                Jenjang Pendidikan<br />
                                (PAUD, SD, SMP, SMA/SMK)</p>
                        </div>
                        <div className="col-md-3 col-lg-2 mx-2">
                            <h3 style={{ color: '#0080CA', fontSize: '50px' }}><i className="fas fa-history" /></h3>
                            <p className="my-5">Sistem up-to-date sesuai dengan Kurikulum yang berlaku</p>
                        </div>
                    </div>
                </div>
            </section>
            <TestimonySection testimonyData={data} />
            <CTASection ctaImg={aboutImgCTA} />
        </main>
    );
};

export default About;
