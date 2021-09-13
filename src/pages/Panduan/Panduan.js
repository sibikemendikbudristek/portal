import Banner from '../../components/Banner/Banner';
import panduanImgBanner from '../../assets/img/panduan-img.png';
import CTASection from '../../components/CTASection/CTASection';
import ctaPanduanImg from '../../assets/img/cta-panduan-img.webp';
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
                        <h2 className="section-title">Siswa</h2>
                        <p className="my-3">Jika kalian siswa PAUD, SD/MI, SMP/MTs, SMA/MA/SMK, disarankan masuk akun  siswa.  Di sini kalian dapat mengakses berbagai macam buku yang menarik, baik buku teks maupun buku nonteks. Kalian dapat memilih, membaca, dan mengunduh buku sesuai kebutuhan.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6 my-5 d-block d-md-none">
                        <img className="img-fluid d-block mx-auto" src={panduanImg2} alt="Buka halaman SIBI" />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="section-title">Guru</h2>
                        <p className="my-3">Untuk Bapak/Ibu guru, disarankan masuk akun guru. Di sini  Anda dapat mengakses berbagai macam buku (buku teks dan nonteks) jenjang PAUD, SD/MI, SMP/MTs, SMA/MA/SMK, data buku-buku yang sudah lolos penilaian, serta kebijakan yang terkait dengan Perbukuan.</p>
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
                        <h2 className="section-title">Umum</h2>
                        <p className="my-3">Jika Anda bukan guru, siswa, dan pelaku perbukuan, sangat disarankan masuk akun Umum. Di sini Anda dapat mengakses berbagai macam buku teks dan nonteks dari jenjang PAUD sd. SMA/SMK, informasi buku-buku yang telah lolos Penilaian, serta Kebijakan tentang Perbukuan</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6 my-5 d-block d-md-none">
                        <img className="img-fluid d-block mx-auto" src={panduanImg4} alt="Buka halaman SIBI" />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="section-title">Pelaku Perbukuan</h2>
                        <p className="my-3">Jika Anda sebagai Pelaku Perbukuan (Penulis, Penerjemah, Penyadur, Editor, Desainer, Ilustrator, Pencetak, Pengembang Buku Elektronik, Penerbit, dan Toko Buku), disarankan masuk akun Pelaku Perbukuan.  Di sini Anda dapat mengakses:</p>
                        <ul>
                            <li>Buku teks Kurikulum 2013, buku teks Sekolah Penggerak, dan buku nonteks</li>
                            <li>Data buku yang telah lolos Penilaian</li>
                            <li>Data tentang Pelaku Perbukuan </li>
                            <li>Pembinaan Pelaku Perbukuan</li>
                            <li>Kebijakan terkait Perbukuan</li>
                        </ul>
                        <p>Khusus untuk buku teks yang diterbitkan pemerintah, Anda dapat mengunduhnya file untuk cetak.</p>
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
                        <h2 className="section-title">Mengakses Buku</h2>
                        <p className="my-3">Saat Anda mengakes Buku, akan ada 3 pilihan jenis Buku, yaitu Buku Teks K-13, Buku Non Teks, dan Buku Sekolah Penggerak.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6 my-5 d-block d-md-none">
                        <img className="img-fluid d-block mx-auto" src={panduanImg4} alt="Buka halaman SIBI" />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="section-title">Fitur Buku Teks K-13</h2>
                        <p className="my-3">Dalam Fitur Buku Teks K-13, ada 3 versi buku yang dapat anda akses, yaitu buku PDF, buku Audio, dan buku Interaktif. Anda dapat memilih sesuai dengan kebutuhan Anda.</p>
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
                        <h2 className="section-title">Fitur Buku Sekolah Penggerak</h2>
                        <p className="my-3">Dalam Fitur Buku Sekolah Penggerak, ada 2 versi buku yang dapat anda akses, yaitu buku PDF dan buku Audio.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6 my-5 d-block d-md-none">
                        <img className="img-fluid d-block mx-auto" src={panduanImg4} alt="Buka halaman SIBI" />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="section-title">Fitur Buku</h2>
                        <p className="my-3">Saat mengakses buku, ada 3 pilihan, yaitu baca, unduh, dan Lapor. Anda dapat memilih opsi sesuai kebutuhan.</p>
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
                        <h2 className="section-title">Lapor</h2>
                        <p className="my-3">Jika Anda menemukan kesalahan pada buku, Anda dapat melaporkan dengan klik fitur Lapor. (<span className="btn btn-sm btn-danger"><i className="fas fa-exclamation-triangle" /> Lapor</span>).</p>
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
