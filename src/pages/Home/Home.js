import CounterSection from '../../components/CounterSection/CounterSection';
import Hero from '../../components/Hero/Hero';
import JenisBukuSection from '../../components/JenisBukuSection/JenisBukuSection';
import JenjangSection from '../../components/JenjangSection/JenjangSection';
import LatestBooksSection from '../../components/LatestBooksSection/LatestBooksSection';
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
            <LatestBooksSection
                bookData={data}
                seeMoreUrl="/buku-teks"
            />
            <TestimonySection testimonyData={data} />
            <RelatedSiteSection />
            <CounterSection counterData={data} />
        </main>
    );
};

export default Home;
