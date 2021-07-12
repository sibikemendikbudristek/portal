import BookInfoSection from "../../components/BookInfoSection/BookInfoSection"
import DetailBanner from "../../components/DetailBanner/DetailBanner"
import RelatedBooksSection from "../../components/RelatedBooksSection/RelatedBooksSection"


const DetailBukuPelajaranPDF = () => {
    return (
        <main style={{minHeight: '100vh'}}>
            <DetailBanner />
            <BookInfoSection />
            <RelatedBooksSection />
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row mt-5">
                        <div className="col">
                            <h5><strong>Ulasan Pembaca</strong></h5>
                        </div>
                    </div>
                    <form action="">
                        <div className="row my-3">
                            <div className="col-auto">
                                <label for="inputPassword6" className="col-form-label">Beri ulasan</label>
                            </div>
                            <div className="col-auto">
                                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <textarea className="form-control border-2" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '200px', borderRadius: '20px'}}></textarea>
                                    <label for="floatingTextarea2">Tulis Ulasan...</label>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col text-center">
                                <button className="btn btn-primary btn-lg px-4 rounded-pill">Kirim</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DetailBukuPelajaranPDF;
