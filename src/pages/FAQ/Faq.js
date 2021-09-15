import React from 'react'

const Faq = () => {
    return (
        <main style={{minHeight: '100vh'}}>
            <div className="container" style={{marginTop: '150px'}}>
                <div className="row text-center text-md-start">
                    <div className="col">
                        <h1 className="section-title">Sering Ditanyakan</h1>
                        <p>Berikut adalah daftar pertanyaan yang sering ditanyakan</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col">
                        <ul>
                            <li>
                                <p><strong>Apa itu buku Kemendikbudristek?</strong></p>
                                <p>Buku-buku yang dikembangkan dan diterbitkan oleh unit-unit kerja di Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi untuk kebutuhan siswa, guru, atau masyarakat Indonesia.</p>
                            </li>
                            <li>
                                <p><strong>Bagaimana cara mendaftar di SIBI?</strong></p>
                                <p>Silahkan klik Daftar di bagian pojok kanan atas, lalu isi formulir dengan lengkap menggunakan data sebenarnya. Lalu klik tombol Daftar di bagian bawah. Proses pendaftaran selesai.</p>
                            </li>
                            <li>
                                <p><strong>Siapakah Pelaku Perbukuan?</strong></p>
                                <p>Pelaku perbukuan terdiri atas Penulis, Penerjemah, Penyadur, Editor, Desainer, Ilustrator, Pencetak, Pengembang Buku Elektronik, Penerbit, dan Toko Buku.</p>
                            </li>
                            <li>
                                <p><strong>Mengapa saya tidak menerima email konfirmasi setelah mendaftar?</strong></p>
                                <p>Karena mungkin email kamu tidak aktif, salah memasukan email ketika mendaftar, atau mungkin masuk ke folder promosi atau spam di email kamu.</p>
                            </li>
                            <li>
                                <p><strong>Apakah boleh mencetak buku yang ada di SIBI?</strong></p>
                                <p>Buku yang diunggah di SIBI merupakan buku yang diterbitkan oleh Pemerintah Indonesia, sehingga masyarakat Indonesia diizinkan memanfaatkan buku ini termasuk mengunduh dan mencetaknya. Namun, jika akan diperjual belikan, dilarang menjual lebih dari harga eceran tertinggi (HET) yang tertera di sampul belakang buku.</p>
                            </li>
                            <li>
                                <p><strong>Bagaimana caranya agar buku saya dapat dinilai?</strong></p>
                                <p>Daftar ke sistem penilaian pada tautan berikut http://penilaian.buku.kemdikbud.go.id/ pada jadwal yang sudah ditentukan. Kemudian tunggu konfirmasi selanjutnya dari pihak penilaian.</p>
                            </li>
                            <li>
                                <p><strong>Apa itu buku teks dan buku non teks?</strong></p>
                                <p>Buku teks merupakan buku yang dapat digunakan dalam pembelajaran di sekolah. Sedangkan buku non teks adalah buku umum dengan berbagai tema pembahasan.</p>
                            </li>
                        </ul>
                    </div>                
                </div>
            </div>
        </main>
    )
}

export default Faq
