import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const base_url = "https://sibi.sc.cloudapp.web.id";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [role_id, setRoleId] = useState(3);

  let history = useHistory();

  const signupHandler = async (e) => {
    e.preventDefault();

    let data = {
      name,
      username,
      email,
      phone,
      password,
      confirm_password,
      role_id,
    };
    let response = await axios({
      method: "post",
      url: `${base_url}/api/user/register`,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      data: JSON.stringify(data),
    });
    
    localStorage.setItem("user-info", JSON.stringify(response));

    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setRoleId("");

    history.push("/login");
  };

  return (
    <main className="bg-light" style={{ minHeight: "100vh" }}>
      <div className="container" style={{ paddingTop: "150px" }}>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header bg-white">
                <h1 className="section-title">Register</h1>
              </div>
              <div className="card-body">
                <div className="mb-5">
                  <label htmlFor="role_id" className="form-label">
                    Daftar sebagai
                  </label>
                  <div className="nav">
                    <button
                      data-bs-toggle="pill"
                      className="btn btn-outline-primary me-2 active"
                      onClick={() => setRoleId(3)}
                    >
                      <i className="fas fa-fw fa-user" /> Siswa
                    </button>
                    <button
                      data-bs-toggle="pill"
                      className="btn btn-outline-primary"
                      onClick={() => setRoleId(4)}
                    >
                      <i className="fas fa-fw fa-user-graduate" /> Guru
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    <i className="fas fa-fw fa-user" /> Nama Lengkap
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nama lengkap Anda..."
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    <i className="fas fa-fw fa-at" /> Username
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username..."
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <i className="fas fa-fw fa-envelope" /> Alamat Email
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
                  <label htmlFor="phone" className="form-label">
                    <i className="fas fa-fw fa-phone" /> Nomor Telepon
                  </label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type="number"
                    pattern="[0-9]*"
                    name="phone"
                    className="form-control"
                    placeholder="Nomor telepon..."
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    <i className="fas fa-fw fa-lock" /> Kata Sandi
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Kata sandi baru..."
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    <i className="fas fa-fw fa-lock" /> Ulangi Kata Sandi
                  </label>
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirm_password}
                    type="password"
                    name="confirm_password"
                    className="form-control"
                    placeholder="Ulangi kata sandi..."
                    required
                  />
                </div>
                <div className="d-block">
                  <button onClick={signupHandler} className="btn btn-primary">
                    Daftar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col text-center">
            <Link className="link" to="/login">
              Sudah punya akun? Masuk
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
