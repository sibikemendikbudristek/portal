import { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { authenticatedUser } from "../../store";
import dashboardImg from "../../assets/img/dashboard-img.png";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { base_url } from "../../utils";

// Validation
const isLoggin = JSON.parse(localStorage.getItem("user-info"));

const Dashboard = () => {
  const [alert, setAlert] = useState("");
  // Get Profile
  const {user} = useRecoilValue(authenticatedUser);
  // Update Profile
  const [name, setName] = useState(user.name || "");
  const [username, setUsername] = useState(user.username ||"");
  const [phone, setPhone] = useState(user.phone || "");
  const [address, setAddress] = useState(user.address || "");
  const [birthday, setBirthday] = useState(user.birthday || "");
  const [portfolio_link, setPortfolioLink] = useState(user.portfolio_link || "");
  const [description, setDescription] = useState(user.description || "");

  // Read Histories
  const [readHistories, setReadHistories] = useState([]);
  const [limit, setLimit] = useState(5);

  // Download Histories
  const [downloadHistories, setDownloadHistories] = useState([]);

  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getReadHistories = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `${base_url}/api/statistic/getReadHistories?limit=${limit}&offset=0`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
              Authorization: isLoggin.data.token,
            },
          }
        );
        setReadHistories(response.data.results);
        // console.log(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        return err.message;
      }
    };
    getReadHistories();

    const getDownloadHistories = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `${base_url}/api/statistic/getDownloadHistories?limit=${limit}&offset=0`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
              Authorization: isLoggin.data.token,
            },
          }
        );
        setDownloadHistories(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        return err.message;
      }
    };
    getDownloadHistories();
  }, [limit]);

  const updateProfile = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let data = {
      username,
      name,
      portfolio_link,
      phone,
      address,
      birthday,
      description,
    };
    let response = await axios({
      method: "post",
      url: `${base_url}/api/user/updateProfile`,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: isLoggin.data.token,
      },
      data: JSON.stringify(data),
    });

    if (response.data.status === "success") {
      setIsSubmitting(false);
      setAlert(response.data.message);
      console.log(response.data);
      window.scrollTo(0,0);
    } else {
      setIsSubmitting(false);
      setAlert(response.data.message);
      console.log(response.data);
      window.location.reload();
    }
  };

  return (
    <main
      className="bg-light"
      style={{ minHeight: "100vh", paddingTop: "120px" }}
    >
      <div className="container pb-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-3">
            <aside className="card border-0" style={{ borderRadius: "25px" }}>
              <div className="card-body my-3">
                <div className="row">
                  <div className="col">
                    <h1 style={{ fontSize: "17px" }}>
                      Halo {user.name}
                    </h1>
                    <p>
                      <strong>{user.role_name}</strong>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div
                      className="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="nav-link text-start active"
                        id="v-pills-dashboard-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-dashboard"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-dashboard"
                        aria-selected="true"
                      >
                        <i className="fas fa-fw fa-tachometer-alt" /> Dashboard
                      </button>
                      <button
                        className="nav-link text-start"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                      >
                        <i className="fas fa-fw fa-user" /> Profile
                      </button>
                      <button
                        className="nav-link text-start"
                        id="v-pills-readhistories-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-readhistories"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-readhistories"
                        aria-selected="false"
                      >
                        <i className="fas fa-fw fa-book" /> Riwayat Baca
                      </button>
                      <button
                        className="nav-link text-start"
                        id="v-pills-downloadhistories-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-downloadhistories"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-downloadhistories"
                        aria-selected="false"
                      >
                        <i className="fas fa-fw fa-download" /> Riwayat Unduh
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          {/* Main Content */}
          <div className="col-lg-9">
            <div
              className="card border-0"
              style={{ borderRadius: "25px", minHeight: "100vh" }}
            >
              <div className="card-body my-3">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-dashboard"
                    role="tabpanel"
                    aria-labelledby="v-pills-dashboard-tab"
                  >
                    <h2 style={{ fontSize: "25px" }}>
                      <strong>Dashboard</strong>
                    </h2>
                    <p className="mb-5">
                      Selamat datang {user.name}. Selamat
                      beraktivitas, semoga sehat selalu.
                    </p>
                    <img
                      className="img-fluid"
                      src={dashboardImg}
                      alt="Dashboard"
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="row mb-3">
                      <div className="col">
                        <h2 style={{ fontSize: "25px" }}>
                          <strong>Edit Profile</strong>
                        </h2>
                      </div>
                      {alert === "" ? (
                        ""
                      ) : (
                        <div
                          className="alert alert-info alert-dismissible fade show"
                          role="alert"
                        >
                          <strong>{alert && 'Profile berhasil diperbaharui'}</strong>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                            onClick={() => window.location.reload()}
                          />
                        </div>
                      )}
                    </div>
                    {loading ? (
                      <Loader
                        className="d-flex justify-content-center align-items-center vh-100"
                        type="TailSpin"
                        color="#00BFFF"
                        height={80}
                        width={80}
                      />
                    ) : (
                      <div className="row">
                        <div className="col">
                          <form onSubmit={updateProfile}>
                            <div className="row my-3">
                              <div className="col-md-3">
                                <label className="form-label" htmlFor="name">
                                  Name Lengkap
                                </label>
                              </div>
                              <div className="col-md-9">
                                <input
                                  onChange={(e) => setName(e.target.value)}
                                  value={name}
                                  className="form-control"
                                  type="text"
                                  placeholder="Nama lengkap..."
                                />
                              </div>
                            </div>

                            <div className="row my-3">
                              <div className="col-md-3">
                                <label
                                  className="form-label"
                                  htmlFor="username"
                                >
                                  Username
                                </label>
                              </div>
                              <div className="col-md-9">
                                <input
                                  onChange={(e) => setUsername(e.target.value)}
                                  value={username}
                                  className="form-control"
                                  type="text"
                                  placeholder="Username..."
                                />
                              </div>
                            </div>

                            <div className="row my-3">
                              <div className="col-md-3">
                                <label
                                  className="form-label"
                                  htmlFor="birthday"
                                >
                                  Tanggal Lahir
                                </label>
                              </div>
                              <div className="col-md-9">
                                <input
                                  onChange={(e) => setBirthday(e.target.value)}
                                  value={birthday}
                                  className="form-control"
                                  type="date"
                                />
                              </div>
                            </div>

                            <div className="row my-3">
                              <div className="col-md-3">
                                <label
                                  className="form-label"
                                  htmlFor="portfolio_link"
                                >
                                  Link Portfolio
                                </label>
                              </div>
                              <div className="col-md-9">
                                <input
                                  onChange={(e) =>
                                    setPortfolioLink(e.target.value)
                                  }
                                  value={portfolio_link}
                                  className="form-control"
                                  type="text"
                                  placeholder="Link portfolio..."
                                />
                              </div>
                            </div>

                            <div className="row my-3">
                              <div className="col-md-3">
                                <label className="form-label" htmlFor="phone">
                                  Nomor Telepon
                                </label>
                              </div>
                              <div className="col-md-9">
                                <input
                                  onChange={(e) => setPhone(e.target.value)}
                                  value={phone}
                                  className="form-control"
                                  type="number"
                                  pattern="[0-9]*"
                                  placeholder="Nomor telepon aktif..."
                                />
                              </div>
                            </div>

                            <div className="row my-3">
                              <div className="col-md-3">
                                <label
                                  className="form-label"
                                  htmlFor="description"
                                >
                                  Deskripsi
                                </label>
                              </div>
                              <div className="col-md-9">
                                <input
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                  value={description}
                                  className="form-control"
                                  type="text"
                                  placeholder="Deskripsi tentang dirimu..."
                                />
                              </div>
                            </div>

                            <div className="row my-3">
                              <div className="col-md-3">
                                <label className="form-label" htmlFor="address">
                                  Alamat
                                </label>
                              </div>
                              <div className="col-md-9">
                                <div className="form-floating">
                                  <textarea
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                    className="form-control border-2"
                                    placeholder="Alamat..."
                                    id="floatingTextarea2"
                                    style={{
                                      height: "200px",
                                    }}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            {isSubmitting ? (
                              <button
                                type="submit"
                                className="btn btn-primary btn-lg float-end"
                                disabled
                              >
                                Please wait...
                              </button>
                            ) : (
                              <button
                                type="submit"
                                className="btn btn-primary btn-lg float-end"
                              >
                                Update
                              </button>
                            )}
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-readhistories"
                    role="tabpanel"
                    aria-labelledby="v-pills-readhistories-tab"
                  >
                    <h2 style={{ fontSize: "25px" }}>
                      <strong>Riwayat Baca</strong>
                    </h2>
                    <p className="mb-5">List buku-buku yang sudah kamu baca</p>
                    {loading ? (
                      <Loader
                        className="d-flex justify-content-center align-items-center vh-100"
                        type="TailSpin"
                        color="#00BFFF"
                        height={80}
                        width={80}
                      />
                    ) : (
                      <>
                        <table
                          className="table table-striped table-hover"
                          style={{ overflowX: "scroll" }}
                        >
                          <thead>
                            <tr>
                              <th scope="col">Judul Buku</th>
                              <th scope="col">Deskripsi</th>
                            </tr>
                          </thead>
                          <tbody>
                            {readHistories.map((item, index) => {
                              return (
                                <tr key={index}>
                                  <td className="col-6">{item.title}</td>
                                  <td className="col-6">
                                    {item.description || "-"}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <button
                          onClick={() => setLimit(limit + 5)}
                          className="btn btn-primary float-end"
                        >
                          Show more
                        </button>
                      </>
                    )}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-downloadhistories"
                    role="tabpanel"
                    aria-labelledby="v-pills-downloadhistories-tab"
                  >
                    <h2 style={{ fontSize: "25px" }}>
                      <strong>Riwayat Unduh</strong>
                    </h2>
                    <p className="mb-5">List buku-buku yang sudah kamu unduh</p>
                    {loading ? (
                      <Loader
                        className="d-flex justify-content-center align-items-center vh-100"
                        type="TailSpin"
                        color="#00BFFF"
                        height={80}
                        width={80}
                      />
                    ) : (
                      <>
                        <table
                          className="table table-striped table-hover"
                          style={{ overflowX: "scroll" }}
                        >
                          <thead>
                            <tr>
                              <th scope="col">Judul Buku</th>
                              <th scope="col">Deskripsi</th>
                            </tr>
                          </thead>
                          <tbody>
                            {downloadHistories.map((item, index) => {
                              return (
                                <tr key={index}>
                                  <td className="col-6">{item.title}</td>
                                  <td className="col-6">
                                    {item.description || "-"}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <button
                          onClick={() => setLimit(limit + 5)}
                          className="btn btn-primary float-end"
                        >
                          Show more
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
