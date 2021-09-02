import interakrifIcon from "../../assets/img/interaktif.png";
import pdfIcon from "../../assets/img/pdf.png";
import audioIcon from "../../assets/img/audio.png";
import "./JenisBukuSection.scss";

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
            <img width="auto" height="100px" src={pdfIcon} alt="Buku PDF" />
            <h5 className="my-5">
              <strong>Buku PDF</strong>
            </h5>
            <p>
              <small>
              Buku PDF adalah Buku yang disajikan dalam format PDF, yang dapat diunduh dan dibaca secara daring.
              </small>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 my-5">
            <img width="auto" height="100px" src={audioIcon} alt="Buku Audio" />
            <h5 className="my-5">
              <strong>Buku Audio</strong>
            </h5>
            <p>
              <small>
              Buku Audio adalah rekaman isi buku yang dinarasikan secara menarik, sehingga belajar menjadi menyenangkan dan memberi pengalaman baru dalam belajar. Buku audio merupakan konversi buku teks pelajaran dari bentuk cetak menjadi bentuk audio (suara).
              </small>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 my-5">
            <img
              width="auto"
              height="100px"
              src={interakrifIcon}
              alt="Buku Elektronik Interakrif"
            />
            <h5 className="my-5">
              <strong>Buku Elektronik Interaktif</strong>
            </h5>
            <p>
              <small>
              Buku Elektronik Interaktif adalah buku elektronik yang disajikan dengan fitur-fitur interaktif, berisi konten-konten digital yang menarik seperti: audio, video, animasi, simulasi, ar (Augmented Reality), dan gambar. Buku interaktif merupakan konversi buku teks pelajaran dari bentuk cetak menjadi bentuk elektronik interaktif.
              </small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JenisBukuSection;
