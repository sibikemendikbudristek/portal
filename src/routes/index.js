import { Switch, Route } from 'react-router-dom';
import About from '../pages/About/About';
import BukuPelajaran from '../pages/BukuPelajaran/BukuPelajaran';
import BukuUmum from '../pages/BukuUmum/BukuUmum';
import NotFound from '../pages/Error/NotFound';
import Home from '../pages/Home/Home';
import Panduan from '../pages/Panduan/Panduan';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/buku-pelajaran" component={BukuPelajaran} />
            <Route path="/buku-umum" component={BukuUmum} />
            <Route path="/panduan" component={Panduan} />
            <Route path="/tentang-kami" component={About} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Routes;
