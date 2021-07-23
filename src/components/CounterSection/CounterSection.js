import CountUp from 'react-countup';
import counterSectionImg from '../../assets/img/counter-section-img.webp';
import './CounterSection.scss';

const CounterSection = ({counterData}) => {
    let statistics = counterData[0].statistics;

    return (
        <section id="CounterSection">
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col-lg-7">
                        <div className="row my-5">
                            <div className="col">
                                <h2 className="section-title counter-title">Ayo Baca Buku<br />Untuk Indonesia Lebih Baik!</h2>
                            </div>
                        </div>
                        <div className="row">
                        {statistics.map((statistic, index) => {
                            return(
                                <div className="col-6 col-md-3 my-2" key={index}>
                                    <h2 className="section-title">
                                        <CountUp
                                            start={0}
                                            end={statistic.value} 
                                            duration={3}
                                            delay={3}
                                        />
                                    </h2>    
                                    <p><small>{statistic.name}</small></p>
                                </div>
                            );
                        })}
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img className="img-fluid d-block mx-auto float-lg-end" src={counterSectionImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterSection;
