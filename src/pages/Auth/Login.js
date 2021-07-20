import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const base_url = "https://sibi.sc.cloudapp.web.id";

const Login = () => {
  const flashMessage = JSON.parse(localStorage.getItem('user-info'));
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

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

    localStorage.setItem("user-info", JSON.stringify(response));

    setEmail("");
    setPassword("");

    history.push("/dashboard");
    window.location.reload();
  };



  return (
    <main className="bg-light" style={{ minHeight: "100vh" }}>
      <div className="container" style={{ paddingTop: "150px" }}>
        <div className="row justify-content-center">
          <div className="col-md-5">
          {localStorage.getItem('user-info') && 
          <div className="alert alert-info alert-dismissible fade show" role="alert">
            {flashMessage.data.message}
            
            <button onClick={() => localStorage.clear()} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
          </div>}
            <div className="card">
              <div className="card-header bg-white">
                <h1 className="section-title">Login</h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      <i className="fas fa-fw fa-envelope" /> Email address
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email..."
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      <i className="fas fa-fw fa-lock" /> Password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password..."
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Masuk
                  </button>
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
