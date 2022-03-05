import React from 'react'
import { Link } from 'react-router-dom'
import ArticleItem from '../ArticleItem/ArticleItem'

const ArticleSection = () => {
  return (
    <section id="ArticleSection">
      <div className="container">
        <div className="row pt-5 mb-3 text-center text-lg-start">
          <div className="col-lg-6">
            <h2 className="section-title">Berita Terbaru</h2>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <Link className="link" to="">
              Lihat Semua
            </Link>
          </div>
        </div>
        <div className="row justify-content-between pb-5">
          <div className="col-md-6 mb-3">
            <ArticleItem
              thumbnail="https://i.ibb.co/2706hFB/penilaian.webp"
              title="Pengumuman Hasil Penilaian"
              description="Pengumuman hasil penilaian dan Kepmendikbud Buku Non Teks Pelajaran tahun 2020"
              link="https://penilaian.buku.kemdikbud.go.id"
            />
          </div>
          <div className="col-md-6 mb-3">
            <ArticleItem
              thumbnail="https://i.ibb.co/b6FkPKN/images-35.webp"
              title="Pengumuman HET"
              description="Pengumuman tentang penghitungan harga eceran tertinggi (HET) buku nonteks pelajaran gelombang I tahun 2022"
              link="https://drive.google.com/file/d/1z4QNcdA5dbFnL21okAHnvUodKtFP5Xbu/view"
            />
          </div>
          {/* <div className="col-md-6 mb-3">
              <ArticleItem
                thumbnail="https://i.ibb.co/qYRZWnQ/pelaku-perbukuan.webp"
                title="Pelaku Perbukuan"
                description="Data pelaku perbukuan terbaru yang terlah disertifikasi"
                link="https://app.buku.kemdikbud.go.id/pembinaan/sertifikasi"
              />
            </div> */}
          <div className="col-md-6 mb-3">
            <ArticleItem
              thumbnail="https://i.ibb.co/47wFV6J/kebijakan.webp"
              title="Kebijakan Perbukuan"
              description="Daftar undang-undang kemendikbud dan keputusan Mentri terkait Perbukuan"
              link="https://app.buku.kemdikbud.go.id/kebijakan"
            />
          </div>
          <div className="col-md-6 mb-3">
            <ArticleItem
              thumbnail="https://i.ibb.co/JvjKRJc/buku-sekolah-penggerak.webp"
              title="Buku Sekolah Penggerak"
              description="Buku Sekolah Penggerak adalah buku yang disusun berdasarkan capaian pembelajaran dengan mengusung sem..."
              link="/buku-sekolah-penggerak?role=siswa"
            />
          </div>
          <div className="col-md-6 mb-3">
            <ArticleItem
              thumbnail="https://i.ibb.co/MVYnhFQ/manfaat-bergabung-dengan-sibi.webp"
              title="Manfaat Bergabung dengan SIBI"
              description="Mari berkolaborasi dan dapatkan berbagai peluang dalam ekosistem SIBI"
              link="https://app.buku.kemdikbud.go.id/"
            />
          </div>
          <div className="col-md-6 mb-3">
            <ArticleItem
              thumbnail="https://i.ibb.co/b6FkPKN/images-35.webp"
              title="Pembinaan Terbaru"
              description="Salah satu upaya yang dilakukan oleh Pusat Kurikulum dan Perbukuan untuk mewujudkan buku bermutu dan me..."
              link="https://app.buku.kemdikbud.go.id/pembinaan"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticleSection
