import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const base_url = "https://sibi.sc.cloudapp.web.id";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");
  let history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data = { email, password };
    let response = await axios({
      method: "post",
      url: `${base_url}/api/user/login`,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      data: JSON.stringify(data),
    });

    if (response.data.status === "success") {
      localStorage.setItem("user-info", JSON.stringify(response));
      history.push("/dashboard");
      window.location.reload();
    } else {
      console.log(response.data);
      setEmail("");
      setPassword("");
      setLoading(false);
      setAlert(response.data.message);
    }
  };

  return (
    <main className="bg-light" style={{ minHeight: "100vh" }}>
      <div className="container" style={{ paddingTop: "150px" }}>
        <div className="row justify-content-center">
          <div className="col-md-5">
            {alert !== "" && (
              <div
                className="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                {alert}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={() => window.location.reload()}
                />
              </div>
            )}
            <div className="card">
              <div className="card-header bg-white">
                <h1 className="section-title">Masuk</h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      <i className="fas fa-fw fa-envelope" /> Alamat Email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Alamat Email..."
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      <i className="fas fa-fw fa-lock" /> Kata Sandi
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Kata sandi..."
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <a className="link" href="https://app.buku.kemdikbud.go.id/user/recovery">
                        Lupa kata sandi?
                      </a>
                    </div>
                    <div className="col">
                      {loading ? (
                        <button
                          type="submit"
                          className="btn btn-primary float-end btn-lg"
                          disabled
                        >
                          Please wait...
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-primary float-end btn-lg"
                        >
                          Masuk
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col text-center">
            <Link className="link" to="/register">
              Belum punya akun? Daftar
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
