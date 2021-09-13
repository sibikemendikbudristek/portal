import React from 'react'

const ArticleDetail = () => {
    return (
        <main style={{minHeight: '100vh'}}>
            <div className="container" style={{marginTop: '150px'}}>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h1 className="section-title">Test</h1>
                        <p>Ditulis oleh <strong>Test</strong>, dipublikasi pada Senin, 23 Agustus 2021 pukul 11.30</p>
                        <img className="d-block mx-auto rounded" style={{height: '23rem', width: '45rem', objectFit: 'cover'}} src="https://placeimg.com/640/480/tech" alt="" />
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia doloremque dolor accusantium dignissimos. Cumque exercitationem corrupti omnis deserunt suscipit repudiandae veniam, ut incidunt numquam. Repellendus nobis exercitationem ut dignissimos!</p>
                        <p>
                            <strong>Tags:</strong> <span className="badge bg-primary">Test</span> <span className="badge bg-primary">Test</span> <span className="badge bg-primary">Test</span>
                        </p>
                    </div>
                </div>
                <div className="row mt-5 mb-3">
                    <div className="col">
                        <h3 className="section-title">Artikel Terkait</h3>
                    </div>
                </div>
                <div className="row justify-content-between mb-5">
                    <div className="col-md-3">
                    <div className="card">
                    <img src="https://placeimg.com/640/480/tech" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="!#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>                  
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                    <img src="https://placeimg.com/640/480/tech" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="!#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>                  
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                    <img src="https://placeimg.com/640/480/tech" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="!#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>                  
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                    <img src="https://placeimg.com/640/480/tech" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="!#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>                  
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ArticleDetail
