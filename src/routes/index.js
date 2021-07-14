import { Switch, Route } from 'react-router-dom';
import About from '../pages/About/About';
import BukuPelajaran from '../pages/BukuPelajaran/BukuPelajaran';
import DetailBukuPelajaranPDF from '../pages/BukuPelajaran/DetailBukuPelajaranPDF';
import DetailBukuPelajaranAudio from '../pages/BukuPelajaran/DetailBukuPelajaranAudio';
import BukuUmum from '../pages/BukuUmum/BukuUmum';
import NotFound from '../pages/Error/NotFound';
import Home from '../pages/Home/Home';
import Panduan from '../pages/Panduan/Panduan';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/buku-teks" component={BukuPelajaran} />
            <Route path="/buku-teks/PDF/:slug" component={DetailBukuPelajaranPDF} />
            <Route path="/buku-teks/BA/:slug" component={DetailBukuPelajaranAudio} />
            <Route exact path="/buku-nonteks" component={BukuUmum} />
            <Route path="/buku-nonteks/PDF/:slug" component={DetailBukuPelajaranPDF} />
            <Route path="/buku-nonteks/BA/:slug" component={DetailBukuPelajaranPDF} />
            <Route path="/panduan" component={Panduan} />
            <Route path="/tentang-kami" component={About} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Routes;
