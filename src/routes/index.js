import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../pages/About/About';
import BukuTeks from '../pages/BukuTeks/BukuTeks';
import BukuNonteks from '../pages/BukuNonteks/BukuNonteks';
import NotFound from '../pages/Error/NotFound';
import Home from '../pages/Home/Home';
import Panduan from '../pages/Panduan/Panduan';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import BukuSekolahPenggerak from '../pages/BukuSekolahPenggerak/BukuSekolahPenggerak';
import BookDetail from '../pages/BookDetail/BookDetail';
import BookByTag from '../pages/BookByTag/BookByTag';
import StudentPage from '../pages/StudentPage/StudentPage';
import TeacherPage from '../pages/TeacherPage/TeacherPage';
import GeneralPage from '../pages/GeneralPage/GeneralPage';

const Routes = () => {
    const isLoggin = JSON.parse(localStorage.getItem('user-info'));
    
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/siswa" component={StudentPage} />
            <Route exact path="/guru" component={TeacherPage} />
            <Route exact path="/umum" component={GeneralPage} />
            <Route exact path="/buku-teks" component={BukuTeks} />
            <Route exact path="/buku-nonteks" component={BukuNonteks} />
            <Route exact path="/buku-sekolah-penggerak" component={BukuSekolahPenggerak} />
            <Route path="/book/detail/:slug" component={BookDetail} />
            <Route path="/book/tag/:tag" component={BookByTag} />
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
