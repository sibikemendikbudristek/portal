import CounterSection from '../../components/CounterSection/CounterSection';
import Hero from '../../components/Hero/Hero';
import JenisBukuSection from '../../components/JenisBukuSection/JenisBukuSection';
import JenjangSection from '../../components/JenjangSection/JenjangSection';
import NewBooksSection from '../../components/NewBooksSection/NewBooksSection';
import PanduanSection from '../../components/PanduanSection/PanduanSection';
import RelatedSiteSection from '../../components/RelatedSiteSection/RelatedSiteSection';
import TestimonySection from '../../components/TestimonySection/TestimonySection';
import data from '../../assets/data/dummy';

const Home = () => {
    return (
        <main style={{minHeight: '100vh'}}>
            <Hero />
            <PanduanSection />
            <JenjangSection />
            <JenisBukuSection />
            <NewBooksSection bookData={data} />
            <TestimonySection testimonyData={data} />
            <RelatedSiteSection />
            <CounterSection counterData={data} />
        </main>
    );
};

export default Home;
