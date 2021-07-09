import Banner from '../../components/Banner/Banner';
import panduanImgBanner from '../../assets/img/panduan-img.png';
import CTASection from '../../components/CTASection/CTASection';
import ctaPanduanImg from '../../assets/img/cta-panduan-img.png';
import panduanImg1 from '../../assets/img/panduan-img-1.png';
import panduanImg2 from '../../assets/img/panduan-img-2.png';
import panduanImg3 from '../../assets/img/panduan-img-3.png';
import panduanImg4 from '../../assets/img/panduan-img-4.png';
import panduanImg5 from '../../assets/img/panduan-img-5.png';

const Panduan = () => {
    return (
        <main style={{minHeight: '100vh'}}>
            <Banner 
                bannerTitle="Panduan"
                bannerDescription="Kamu kebingungan? Tenang SIBI punya panduannya!"
                bannerImg={panduanImgBanner}
            />
            <section className="container my-5 pt-3">
                <div className="row my-5">
                    <div className="col-md-6 my-5">
                        <img className="img-fluid d-block mx-auto" src={panduanImg1} alt="Buka halaman SIBI" />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="section-title">1. Buka laman https://buku.kemendikbud.go.id</h2>
                        <p className="my-5">Untuk menggunakan SIBI kamu tinggal membukanya di browser seperti
                        Google Chrome, Mozilla Firefox, Microsoft Edge dan lain-lain yang ada
                        pada gadget kamu. Sangat mudah bukan?</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6 my-5 d-block d-md-none">
                        <img className="img-fluid d-block mx-auto" src={panduanImg2} alt="Buka halaman SIBI" />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="section-title">2. Daftar dan login sebagai siswa dan guru</h2>
                        <p className="my-5">Untuk mendapatkan akses ke SIBI caranya sangat mudah kita cukup mendaftarkan diri dengan mengisi form yang telah disediakan lalu tinggal login sebagai siswa atau guru.</p>
                    </div>
                    <div className="col-md-6 my-5 d-none d-md-block">
                        <img className="img-fluid d-block mx-auto" src={panduanImg2} alt="Buka halaman SIBI" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6 my-5">
                        <img className="img-fluid d-block mx-auto" src={panduanImg3} alt="Buka halaman SIBI" />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="section-title">3. Cari Buku yang kamu mau</h2>
                        <p className="my-5">Kamu dapat dengan mudah mencari buku yang kamu inginkan di halaman
                        buku atau lewat fitur cari buku yang telah disediakan</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6 my-5 d-block d-md-none">
                        <img className="img-fluid d-block mx-auto" src={panduanImg4} alt="Buka halaman SIBI" />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="section-title">4. Klik buku untuk baca langsung, atau klik selengkapnya untuk baca detail beserta review buku</h2>
                        <p className="my-5">Kamu bias memilih opsi untuk membaca buku secara langsung
                        atau melihat detail dan ulasannya terlebih dahulu sebelum
                        membacanya</p>
                    </div>
                    <div className="col-md-6 my-5 d-none d-md-block">
                        <img className="img-fluid d-block mx-auto" src={panduanImg4} alt="Buka halaman SIBI" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6 my-5">
                        <img className="img-fluid d-block mx-auto" src={panduanImg5} alt="Buka halaman SIBI" />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="section-title">5. Buka dashboard kamu di link /dashboard untuk melihat history buku yang sudah kamu baca atau unduh</h2>
                        <p className="my-5">SIBI menyediakan dashboard untuk memudahkanmu dalam melihat history
                        buku apa saja yang pernah kamu baca atau unduh</p>
                    </div>
                </div>
            </section>
            <CTASection 
                ctaImg={ctaPanduanImg}
            />
        </main>
    );
};

export default Panduan;
