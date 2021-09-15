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
                thumbnail="https://i.ibb.co/wQ3Hn66/penilaian.jpg"
                title="Pengumuman Hasil Penilaian"
                description="Pengumuman hasil penilaian dan Kepmendikbud Buku Non Teks Pelajaran tahun 2020"
                link="https://penilaian.buku.kemdikbud.go.id"
              />
            </div>
            <div className="col-md-6 mb-3">
              <ArticleItem
                thumbnail="https://i.ibb.co/Cv4m53n/pelaku-perbukuan.jpg"
                title="Pelaku Perbukuan"
                description="Data pelaku perbukuan terbaru yang terlah disertifikasi"
                link="https://sibi.sc.cloudapp.web.id/pembinaan/sertifikasi"
              />
            </div>
            <div className="col-md-6 mb-3">
              <ArticleItem
                thumbnail="https://i.ibb.co/d5sZPSF/kebijakan.jpg"
                title="Kebijakan Perbukuan"
                description="Daftar undang-undang kemendikbud dan keputusan Mentri terkait Perbukuan"
                link="https://sibi.sc.cloudapp.web.id/kebijakan"
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
                link="https://sibi.sc.cloudapp.web.id"
              />
            </div>
            <div className="col-md-6 mb-3">
              <ArticleItem
                thumbnail="https://i.ibb.co/4sJX5JM/images-35.jpg"
                title="Pembinaan Terbaru"
                description="Salah satu upaya yang dilakukan oleh Pusat Kurikulum dan Perbukuan untuk mewujudkan buku bermutu dan me..."
                link="https://sibi.sc.cloudapp.web.id/pembinaan"
              />
            </div>
          </div>
        </div>
      </section>
    )
}

export default ArticleSection
