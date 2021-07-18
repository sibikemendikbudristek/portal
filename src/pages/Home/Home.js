import { useState, useEffect } from 'react';
import axios from 'axios';
import CounterSection from '../../components/CounterSection/CounterSection';
import Hero from '../../components/Hero/Hero';
import JenisBukuSection from '../../components/JenisBukuSection/JenisBukuSection';
import JenjangSection from '../../components/JenjangSection/JenjangSection';
import Loader from "react-loader-spinner";
import LatestBooksSection from '../../components/LatestBooksSection/LatestBooksSection';
import PanduanSection from '../../components/PanduanSection/PanduanSection';
import RelatedSiteSection from '../../components/RelatedSiteSection/RelatedSiteSection';
import TestimonySection from '../../components/TestimonySection/TestimonySection';
import data from '../../assets/data/dummy';

const base_url = 'https://sibi.sc.cloudapp.web.id/api/catalogue';

const Home = () => {

    const [latestbooks, setLatestBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getLatestBooks = async () => {
            setLoading(true);
            try {
                let response = await axios.get(`${base_url}/getLatest?qty=10`);
                setLatestBooks(response.data.results);
                setLoading(false);
            } catch(err) {
                setLoading(true);
                return err.message;
            }
        }
        getLatestBooks();

    }, []);

    return (
        <main style={{minHeight: '100vh'}}>
            <Hero />
            <PanduanSection />
            <JenjangSection />
            <JenisBukuSection />
            {loading ? 
                <Loader
                    className="d-flex justify-content-center align-items-center vh-100"
                    type="TailSpin"
                    color="#00BFFF"
                    height={80}
                    width={80}
                /> : 
                <LatestBooksSection
                    data={latestbooks}
                    seeMoreUrl="/buku-teks"
                />
            }
            <TestimonySection testimonyData={data} />
            <RelatedSiteSection />
            <CounterSection counterData={data} />
        </main>
    );
};

export default Home;
