import React from 'react';
import './Hero.scss';
import heroImg from '../../assets/img/hero-img.png';

const Hero = () => {
    return (
        <section id="Hero">
            <div className="container">
                <div className="row justify-content-between text-center text-md-start">
                    <div className="col-lg-5">
                        <h1 className="hero-title">Sekilas Tentang<br />Pusat Buku</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt deleniti quae necessitatibus dolorem vel, iure esse sed, nulla ipsam impedit nesciunt iste cupiditate exercitationem fuga nam accusantium beatae harum. Nobis!</p>
                        <a className="btn btn-primary rounded-pill py-3 px-4" href="#PanduanSection">Lihat Selengkapnya</a>
                        <p className="my-4">Lorem ipsum dolor sit amet explicing elit.</p>
                        <div className="d-grid gap-2 d-md-block">
                            <a className="btn btn-outline-primary rounded mx-5 mx-md-0 me-md-2" href="!#">
                               <i className="fas fa-fw fa-user" /> Siswa
                            </a>
                            <a className="btn btn-outline-primary rounded mx-5 mx-md-2" href="!#">
                                <i className="fas fa-fw fa-user-graduate" /> Guru
                            </a>
                            <a className="btn btn-outline-primary rounded mx-5 mx-md-2" href="!#">
                                <i className="fas fa-fw fa-book-reader" /> Pelaku Perbukuan
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5">
                        <img className="img-fluid float-end" src={heroImg} loading="lazy" alt="Selamat datang di SIBI" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
