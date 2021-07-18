import { useState } from 'react';
import NavbarItems from './NavbarItems';
import SibiLogo from '../../assets/img/sibi-nav-logo.png';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    return (
            <nav className="navbar navbar-expand-xl navbar-light shadow bg-white fixed-top" id="Navbar">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img className="nav-logo" src={SibiLogo} loading="lazy" alt="Sistem Informasi Perbukuan Indonesia" />
                    </NavLink>
                    <button onClick={() => setToggleIcon(toggleIcon => !toggleIcon)} className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {toggleIcon ? toggleIcon && <i className="fas fa-times" /> : <i className="fas fa-bars" />}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0 text-center text-xl-start">
                            {NavbarItems.map((item, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <NavLink className="nav-link mx-2" exact to={item.url}>{item.name}</NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="my-2 my-lg-0 mx-1">
                            <NavLink className="nav-link btn btn-primary btn-sm rounded-pill px-4" to="/login">Login</NavLink>
                        </div>
                        <div className="my-2 my-lg-0 mx-1">
                            <NavLink className="nav-link btn btn-outline-primary btn-sm rounded-pill px-4" to="/register">Daftar</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;
