import ikapiLogo from "../../assets/img/ikapi.png";
import balaipustakaLogo from "../../assets/img/balaipustaka.png";
import rumahbelajarLogo from "../../assets/img/rumah-belajar.png";
import belajaridLogo from "../../assets/img/belajar-id.png";
import bukunesiaLogo from "../../assets/img/bukunesia.png";
import "./RelatedSiteSection.scss";

const RelatedSiteSection = () => {
  return (
    <section id="RelatedSiteSection">
      <div className="container py-5 mt-5">
        <div className="row text-center my-5">
          <div className="col">
            <h3>Laman Terkait</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4 col-md-3 col-lg-2 my-2">
            <a
              href="https://balaipustaka.co.id/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card">
                <div className="card-body">
                  <img
                    className="img-fluid d-block mx-auto"
                    src={balaipustakaLogo}
                    alt="Balai Pustaka"
                    loading="lazy"
                  />
                </div>
              </div>
            </a>
          </div>

          <div className="col-4 col-md-3 col-lg-2 my-2">
            <a href="https://www.belajar.id/" target="_blank" rel="noreferrer">
              <div className="card">
                <div className="card-body">
                  <img
                    className="img-fluid d-block mx-auto"
                    src={belajaridLogo}
                    alt="Belajar.id"
                    loading="lazy"
                  />
                </div>
              </div>
            </a>
          </div>

          <div className="col-4 col-md-3 col-lg-2 my-2">
            <a
              href="https://belajar.kemdikbud.go.id"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card">
                <div className="card-body">
                  <img
                    className="img-fluid d-block mx-auto"
                    src={rumahbelajarLogo}
                    alt="Rumah Belajar"
                    loading="lazy"
                  />
                </div>
              </div>
            </a>
          </div>

          <div className="col-4 col-md-3 col-lg-2 my-2">
            <a
              href="https://play.google.com/store/apps/details?id=go.id.kemendikbud.bukunesia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">
                <div className="card-body">
                  <img
                    className="img-fluid d-block mx-auto"
                    src={bukunesiaLogo}
                    alt="Bukunesia"
                    loading="lazy"
                  />
                </div>
              </div>
            </a>
          </div>

          <div className="col-4 col-md-3 col-lg-2 my-2">
            <a href="https://ikapi.org" target="_blank" rel="noreferrer">
              <div className="card">
                <div className="card-body">
                  <img
                    className="img-fluid d-block mx-auto"
                    src={ikapiLogo}
                    alt="IKAPI"
                    loading="lazy"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedSiteSection;
