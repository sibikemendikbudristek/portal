import './BookInfoSection.scss';

const BookInfoSection = ({data}) => {
    const bookData = data;
    
    return (
        <section id="BookInfoSection">
            <div className="container my-5">
                <div className="row my-4">
                    <div className="col">
                        <h5><strong>Data Buku</strong></h5>
                    </div>    
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th scope="row" className="col-md-6 col-lg-4">Jenjang</th>
                                    <td>{bookData.level || '-'}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Tipe</th>
                                    <td>{bookData.type || '-'}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Penulis</th>
                                    <td>{bookData.writer || '-'}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Penerbit</th>
                                    <td>{bookData.publisher || '-'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-6">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th scope="row" className="col-md-6 col-lg-4">Penelaah</th>
                                    <td>{bookData.reviewer || '-'}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Tahun Terbit</th>
                                    <td>{bookData.published_year || '-'}</td>
                                </tr>
                                <tr>
                                    <th scope="row">ISBN</th>
                                    <td>{bookData.isbn || '-'}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Edisi</th>
                                    <td>{bookData.edition || '-'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookInfoSection;
