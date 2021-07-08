import Banner from '../../components/Banner/Banner';
import aboutImgBanner from '../../assets/img/about-img.png';
import CTASection from '../../components/CTASection/CTASection';
import ctaPanduanImg from '../../assets/img/cta-panduan-img.png';

const Panduan = () => {
    return (
        <main style={{minHeight: '100vh'}}>
            <Banner 
                bannerTitle="Panduan"
                bannerDescription="Kamu kebingungan? Tenang SIBI punya panduannya!"
                bannerImg={aboutImgBanner}
            />
            <section className="container my-5">
                <div className="row my-5">
                    <div className="col">
                        <div className="img"></div>
                    </div>
                    <div className="col">
                        <h2 className="section-title">1. Buka laman https://buku.kemendikbud.go.id</h2>
                        <p className="my-5">Untuk menggunakan SIBI kamu tinggal membukanya di browser seperti
                        Google Chrome, Mozilla Firefox, Microsoft Edge dan lain-lain yang ada
                        pada gadget kamu. Sangat mudah bukan?</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col">
                        <h2 className="section-title">2. Daftar dan login sebagai siswa dan guru</h2>
                        <p className="my-5">Untuk mendapatkan akses ke SIBI caranya sangat mudah kita cukup mendaftarkan diri dengan mengisi form yang telah disediakan lalu tinggal login sebagai siswa atau guru.</p>
                    </div>
                    <div className="col">
                    
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col">
                        <div className="img"></div>
                    </div>
                    <div className="col">
                        <h2 className="section-title">3. Cari Buku yang kamu mau</h2>
                        <p className="my-5">Kamu dapat dengan mudah mencari buku yang kamu inginkan di halaman
                        buku atau lewat fitur cari buku yang telah disediakan</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col">
                        <h2 className="section-title">4. Klik buku untuk baca langsung, atau klik selengkapnya untuk baca detail beserta review buku</h2>
                        <p className="my-5">Kamu bias memilih opsi untuk membaca buku secara langsung
                        atau melihat detail dan ulasannya terlebih dahulu sebelum
                        membacanya</p>
                    </div>
                    <div className="col">
                    
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col">
                        <div className="img"></div>
                    </div>
                    <div className="col">
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
