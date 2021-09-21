import React from 'react'
import './PenilaianSection.scss';

const PenilaianSection = () => {
    return (
        <section id="PenilaianSection">
            <div className="container">
                <div className="row text-center py-5">
                    <div className="col pt-5 mt-5">
                        <h3 className="section-title text-white mb-5">Daftar Buku yang Lolos Penilaian</h3>
                        <a className="btn btn-light section-title btn-lg rounded-pill" href="https://app.buku.kemdikbud.go.id/penilaian">Lihat Selengkapnya</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PenilaianSection;
