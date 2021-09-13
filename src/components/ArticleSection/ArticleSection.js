import React from 'react'
import { Link } from 'react-router-dom'
import ArticleItem from '../ArticleItem/ArticleItem'

const ArticleSection = () => {
    return (
        <section id="ArticleSection">
        <div className="container">
          <div className="row pt-5 mb-3">
            <div className="col">
              <h2 className="section-title">Berita Terbaru</h2>
            </div>
            <div className="col text-end">
              <Link className="link">
                Lihat Semua
              </Link>
            </div>
          </div>
          <div className="row justify-content-between pb-5">
            <div className="col-md-6 mb-3">
              <ArticleItem
                thumbnail="https://i.ibb.co/5TWxnyh/Pengumuman-Hasil-Penilaian-dan-Permendikbud-Kelayakan-Buku-Buku-Non-Teks-Pelajaran-Tahun-2020-1024x3.jpg"
                title="Pengumuman Hasil Penilaian"
                description="Pengumuman hasil penilaian dan Kepmendikbud Buku Non Teks Pelajaran tahun 2020"
                link="https://penilaian.buku.kemdikbud.go.id"
              />
            </div>
            <div className="col-md-6 mb-3">
              <ArticleItem
                thumbnail="https://buku.kemdikbud.go.id/sites/sibi//themes/default/assets/images/beranda-4.jpg"
                title="Pelaku Perbukuan"
                description="Data pelaku perbukuan terbaru yang terlah disertifikasi"
                link="https://sibi.sc.cloudapp.web.id/pembinaan/sertifikasi"
              />
            </div>
            <div className="col-md-6 mb-3">
              <ArticleItem
                thumbnail="https://buku.kemdikbud.go.id/sites/sibi//themes/default/assets/images/beranda-5.jpg"
                title="Kebijakan Perbukuan"
                description="Daftar undang-undang kemendikbud dan keputusan Mentri terkait Perbukuan"
                link="https://sibi.sc.cloudapp.web.id/kebijakan"
              />
            </div>
            <div className="col-md-6 mb-3">
              <ArticleItem
                thumbnail="https://i.ibb.co/hX44FRP/buku-sekolah-penggerak.png"
                title="Buku Sekolah Penggerak"
                description="Buku Sekolah Penggerak adalah buku yang disusun berdasarkan capaian pembelajaran dengan mengusung sem..."
                link="/buku-sekolah-penggerak?role=siswa"
              />
            </div>
            <div className="col-md-6 mb-3">
              <ArticleItem
                thumbnail="https://i.ibb.co/4Rs1swf/manfaat-bergabung-dengan-sibi.png"
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
