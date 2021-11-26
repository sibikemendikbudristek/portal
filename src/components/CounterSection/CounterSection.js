import axios from 'axios';
import { useEffect, useState } from 'react';
import counterSectionImg from '../../assets/img/counter-section-img.webp';
import { base_url } from '../../utils';
import './CounterSection.scss';

const CounterSection = () => {

    const [summary, setSummary] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getSummary = async () => {
            setLoading(true);
            try {
                let response = await axios.get(`${base_url}/api/statistic/getSummary`);
                setSummary(response.data);
                setLoading(false);
            } catch (err) {
                setLoading(true);
                return err.message;
            }
        };
        getSummary();
    }, [])

    const total_read = summary.total_read;
    const total_download = summary.total_download;
    const total_book = summary.total_book;
    const total_assessment = summary.total_assessment;


    return (
        <section id="CounterSection">
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col-lg-7">
                        <div className="row my-5">
                            <div className="col">
                                <h2 className="section-title counter-title">Ayo Baca Buku<br />untuk Indonesia Lebih Baik!</h2>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-6 col-md-3 my-2">
                                <h2 className="section-title">
                                    {loading ? '0' :
                                        total_read
                                    }
                                </h2>
                                <p><small>Total Baca</small></p>
                            </div>

                            <div className="col-6 col-md-3 my-2">
                                <h2 className="section-title">
                                    {loading ? '0' :
                                        total_download
                                    }
                                </h2>
                                <p><small>Total Unduh</small></p>
                            </div>

                            <div className="col-6 col-md-3 my-2">
                                <h2 className="section-title">
                                    {loading ? '0' :
                                        total_book
                                    }
                                </h2>
                                <p><small>Buku Tersedia</small></p>
                            </div>

                            <div className="col-6 col-md-3 my-2">
                                <h2 className="section-title">
                                    {loading ? '0' :
                                        total_assessment
                                    }
                                </h2>
                                <p><small>Buku Lulus Penilaian</small></p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img className="img-fluid d-block mx-auto float-lg-end" loading="lazy" src={counterSectionImg} alt="Model anak SD memegang buku" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterSection;
