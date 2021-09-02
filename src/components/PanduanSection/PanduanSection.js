import "./PanduanSection.scss";

const IntroSection = ({image}) => {
  return (
    <section id="PanduanSection">
      <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-6">
          <img
            className="img-fluid d-block mx-auto mb-3"
            src={image}
            alt="Panduan Sibi"
          />
        </div>
        <div className="col-md-6">
          <h2 className="section-title text-center text-md-start">
            Sering Ditanyakan
          </h2>
          <div className="accordion mt-4" id="accordionExample">
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                Apa itu Buku Kemendikbudristek?
                </button>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Buku-buku yang dikembangkan dan diterbitkan oleh unit-unit kerja di Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi untuk kebutuhan siswa, guru, atau masyarakat Indonesia.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                Bagaimana cara mendaftar di SIBI?
                </button>
              </h3>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Silahkan klik Daftar di bagian pojok kanan atas, lalu isi formulir dengan lengkap menggunakan data sebenarnya. Lalu klik tombol Daftar di bagian bawah. Proses pendaftaran selesai.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                Siapakah Pelaku Perbukuan?
                </button>
              </h3>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Pelaku perbukuan terdiri atas Penulis, Penerjemah, Penyadur, Editor, Desainer, Ilustrator, Pencetak, Pengembang Buku Elektronik, Penerbit, dan Toko Buku
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                Mengapa saya tidak menerima email konfirmasi setelah mendaftar?
                </button>
              </h3>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Karena mungkin email kamu tidak aktif, salah memasukan email ketika mendaftar, atau mungkin masuk ke folder promosi atau spam di email kamu
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                Apakah boleh mencetak buku yang ada di SIBI?
                </button>
              </h3>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Buku yang diunggah di SIBI merupakan buku yang diterbitkan oleh Pemerintah Indonesia, sehingga masyarakat Indonesia diizinkan memanfaatkan buku ini termasuk mengunduh dan mencetaknya. Namun, jika akan diperjual belikan, dilarang menjual lebih dari harga eceran tertinggi (HET) yang tertera di sampul belakang buku.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default IntroSection;
