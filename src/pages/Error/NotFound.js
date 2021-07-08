import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="row">
                        <div className="col text-center">
                        <h1 className="section-title">404 Not Found</h1>
                        <p className="lead mb-5">Ups, halaman yang kamu cari tidak ada di sini</p>
                        <Link className="btn btn-outline-primary px-5 py-3 rounded-pill" to="/">Kembali</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
