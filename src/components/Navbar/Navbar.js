import { useState } from "react";
import SibiLogo from "../../assets/img/sibi-nav-logo.webp";
import "./Navbar.scss";
import { NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const queryParams = new URLSearchParams(window.location.search);
  const role = queryParams.get("role");

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
            {role === null && (
              <>
                <li className="nav-item">
                  <a className="nav-link mx-2" exact href="/">
                    Beranda
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-2" exact to="/panduan">
                    Panduan
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-2" exact to="/tentang-kami">
                    Tentang Kami
                  </NavLink>
                </li>
              </>
            )}

            {role === "siswa" && (
              <>
                <li className="nav-item">
                  <a className="nav-link mx-2" exact href="/">
                    Beranda
                  </a>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="!#"
                    id="booksDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Buku
                  </a>
                  <ul
                    className="dropdown-menu text-center text-xl-start"
                    aria-labelledby="booksDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/buku-teks">
                        Buku Teks
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/buku-nonteks">
                        Buku Nonteks
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/buku-sekolah-penggerak"
                      >
                        Buku Sekolah Penggerak
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-2" exact to="/panduan">
                    Panduan
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-2" exact to="/tentang-kami">
                    Tentang Kami
                  </NavLink>
                </li>
              </>
            )}

            {role === "guru" && (
              <>
                <li className="nav-item">
                  <a className="nav-link mx-1" exact href="/">
                    Beranda
                  </a>
                </li>
                <li className="nav-item dropdown mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="!#"
                    id="booksDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Buku
                  </a>
                  <ul
                    className="dropdown-menu text-center text-xl-start"
                    aria-labelledby="booksDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/buku-teks">
                        Buku Teks
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/buku-nonteks">
                        Buku Nonteks
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/buku-sekolah-penggerak"
                      >
                        Buku Sekolah Penggerak
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-1" href="https://sibi.sc.cloudapp.web.id/penilaian">
                    Penilaian
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-1" href="https://sibi.sc.cloudapp.web.id/kebijakan">
                    Kebijakan
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-1" exact to="/panduan">
                    Panduan
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-1" exact to="/tentang-kami">
                    Tentang Kami
                  </NavLink>
                </li>
              </>
            )}

            {role === "umum" && (
              <>
              <li className="nav-item">
              <a className="nav-link mx-1" exact href="/">
                Beranda
              </a>
            </li>
            <li className="nav-item dropdown mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                id="booksDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Buku
              </a>
              <ul
                className="dropdown-menu text-center text-xl-start"
                aria-labelledby="booksDropdown"
              >
                <li>
                  <NavLink className="dropdown-item" to="/buku-teks">
                    Buku Teks
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/buku-nonteks">
                    Buku Nonteks
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/buku-sekolah-penggerak"
                  >
                    Buku Sekolah Penggerak
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-1" href="https://sibi.sc.cloudapp.web.id/penilaian">
                Penilaian
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-1" href="https://sibi.sc.cloudapp.web.id/kebijakan">
                Kebijakan
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-1" exact to="/panduan">
                Panduan
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-1" exact to="/tentang-kami">
                Tentang Kami
              </NavLink>
            </li>
              </>
            )}
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
