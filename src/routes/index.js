import { Switch, Route } from 'react-router-dom';
import About from '../pages/About/About';
import BukuPelajaran from '../pages/BukuTeks/BukuTeks';
import DetailBukuTeksPDF from '../pages/BukuTeks/DetailBukuTeksPDF';
import DetailBukuTeksAudio from '../pages/BukuTeks/DetailBukuTeksAudio';
import BukuNonteks from '../pages/BukuNonteks/BukuNonteks';
import DetailBukuNonteksPDF from '../pages/BukuNonteks/DetailBukuNonteksPDF';
import DetailBukuNonteksAudio from '../pages/BukuNonteks/DetailBukuNonteksAudio';
import NotFound from '../pages/Error/NotFound';
import Home from '../pages/Home/Home';
import Panduan from '../pages/Panduan/Panduan';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import Dashboard from '../pages/Dashboard/Dashboard';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/buku-teks" component={BukuPelajaran} />
            <Route path="/buku-teks/PDF/:slug" component={DetailBukuTeksPDF} />
            <Route path="/buku-teks/BA/:slug" component={DetailBukuTeksAudio} />
            <Route exact path="/buku-nonteks" component={BukuNonteks} />
            <Route path="/buku-nonteks/PDF/:slug" component={DetailBukuNonteksPDF} />
            <Route path="/buku-nonteks/BA/:slug" component={DetailBukuNonteksAudio} />
            <Route path="/panduan" component={Panduan} />
            <Route path="/tentang-kami" component={About} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Routes;
