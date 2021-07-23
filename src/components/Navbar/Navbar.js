import { useState } from "react";
import NavbarItems from "./NavbarItems";
import SibiLogo from "../../assets/img/sibi-nav-logo.webp";
import "./Navbar.scss";
import { NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  let userInfo = JSON.parse(localStorage.getItem("user-info"));

  let history = useHistory();

  const logoutHandler = () => {
    localStorage.clear();
    history.push("/login");
    window.location.reload();
  };

  return (
    <nav
      className="navbar navbar-expand-xl navbar-light shadow bg-white fixed-top"
      id="Navbar"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            className="nav-logo"
            src={SibiLogo}
            loading="lazy"
            alt="Sistem Informasi Perbukuan Indonesia"
          />
        </NavLink>
        {localStorage.getItem("user-info") && (
          <div className="ms-auto dropdown d-block d-xl-none">
            <a
              className="nav-link"
              data-toggle="dropdown"
              href="!#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="rounded-circle ms-2"
                src={userInfo && userInfo.data.result.avatar}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NavLink
                  activeClassName="dropdown"
                  className="dropdown-item"
                  to="/dashboard"
                >
                  <i className="fas fa-fw fa-tachometer-alt" /> Dashboard
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li
                className="dropdown-item"
                onClick={logoutHandler}
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-fw fa-sign-out-alt" /> Logout
              </li>
            </ul>
          </div>
        )}
        <button
          onClick={() => setToggleIcon((toggleIcon) => !toggleIcon)}
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {toggleIcon ? (
            toggleIcon && <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0 text-center text-xl-start">
            {NavbarItems.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <NavLink className="nav-link mx-2" exact to={item.url}>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {localStorage.getItem("user-info") ? (
            <ul className="navbar-nav mb-2 mb-lg-0 text-center text-xl-start">
              <li className="nav-item dropdown d-none d-xl-block">
                <a
                  className="nav-link"
                  data-toggle="dropdown"
                  href="!#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong>{userInfo && userInfo.data.result.fullname}</strong>
                  <img
                    className="rounded-circle ms-2"
                    src={userInfo && userInfo.data.result.avatar}
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      activeClassName="dropdown"
                      className="dropdown-item"
                      to="/dashboard"
                    >
                      <i className="fas fa-fw fa-tachometer-alt" /> Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li
                    className="dropdown-item"
                    onClick={logoutHandler}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-fw fa-sign-out-alt" /> Logout
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <>
              <div className="my-2 my-lg-0 mx-1">
                <NavLink
                  className="nav-link btn btn-primary btn-sm rounded-pill px-4"
                  to="/login"
                >
                  Login
                </NavLink>
              </div>
              <div className="my-2 my-lg-0 mx-1">
                <NavLink
                  className="nav-link btn btn-outline-primary btn-sm rounded-pill px-4"
                  to="/register"
                >
                  Daftar
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
