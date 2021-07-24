import { useState, useEffect } from "react";
import axios from 'axios';

// Validation
const userInfo = JSON.parse(localStorage.getItem("user-info"));

// Base Url
const base_url = 'https://sibi.sc.cloudapp.web.id';

const Dashboard = () => {

    // Read Histories
    const [readHistories, setReadHistories] = useState([]);
    const [limit, setLimit] = useState(10);

    // Download Histories
    const [downloadHistories, setDownloadHistories] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getReadHistories = async () => {
            setLoading(true);
            try {
                let response = await axios.get(`${base_url}/api/getReadHistories?limit=${limit}&offset=0`, {
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: '*/*',
                        Authorization: userInfo.data.token,
                    }
                });
                setReadHistories(response.data.results);
                console.log(response.data.results);
                setLoading(false);
            } catch(err) {
                setLoading(true);
                return err.message;
            }
        }
        getReadHistories();
    }, [limit]);

  return (
    <main
      className="bg-light"
      style={{ minHeight: "100vh", paddingTop: "120px" }}
    >
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-3">
            <aside className="card border-0" style={{ borderRadius: "25px" }}>
              <div className="card-body my-3">
                <div className="row">
                  <div className="col">
                    <h1 style={{ fontSize: "17px" }}>
                      Halo {userInfo.data.result.fullname}
                    </h1>
                    <p>
                      <strong>{userInfo.data.result.role_name}</strong>
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
            <div className="card border-0" style={{ borderRadius: "25px" }}>
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
                    <p>
                      Selamat datang {userInfo.data.result.fullname}. Selamat
                      beraktivitas, semoga sehat selalu.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <h2 style={{ fontSize: "25px" }}>
                      <strong>Profile</strong>
                    </h2>
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
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Judul Buku</th>
                          <th scope="col">Deskripsi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                      </tbody>
                    </table>
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
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Judul Buku</th>
                          <th scope="col">Deskripsi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                      </tbody>
                    </table>
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
