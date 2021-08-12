import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../pages/About/About';
import BukuTeks from '../pages/BukuTeks/BukuTeks';
import BukuNonteks from '../pages/BukuNonteks/BukuNonteks';
import DetailBukuTeks from '../pages/BukuTeks/DetailBukuTeks';
import DetailBukuNonteks from '../pages/BukuNonteks/DetailBukuNonteks';
import NotFound from '../pages/Error/NotFound';
import Home from '../pages/Home/Home';
import Panduan from '../pages/Panduan/Panduan';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import BukuSekolahPenggerak from '../pages/BukuSekolahPenggerak/BukuSekolahPenggerak';
import DetailBukuSekolahPenggerak from '../pages/BukuSekolahPenggerak/DetailBukuSekolahPenggerak';

const Routes = () => {
    const isLoggin = JSON.parse(localStorage.getItem('user-info'));
    
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/buku-teks" component={BukuTeks} />
            <Route path="/buku-teks/detail/:slug" component={DetailBukuTeks} />
            <Route exact path="/buku-nonteks" component={BukuNonteks} />
            <Route path="/buku-nonteks/detail/:slug" component={DetailBukuNonteks} />
            <Route exact path="/buku-sekolah-penggerak" component={BukuSekolahPenggerak} />
            <Route path="/buku-sekolah-penggerak/detail/:slug" component={DetailBukuSekolahPenggerak} />
            <Route path="/panduan" component={Panduan} />
            <Route path="/tentang-kami" component={About} />
            <Route path="/dashboard">
                {isLoggin ? <Dashboard /> : <Redirect to='/login' />}
            </Route>
            <Route path="/register">
                {isLoggin ? <Redirect to='/dashboard' /> : <Register />}
            </Route>
            <Route path="/login">
                {isLoggin ? <Redirect to='/dashboard' /> : <Login />}
            </Route>
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Routes;
