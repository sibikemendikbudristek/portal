import './BookInfoSection.scss';

const BookInfoSection = () => {
    return (
        <section id="BookInfoSection">
            <div className="container my-5">
                <div className="row my-4">
                    <div className="col">
                        <h5><strong>Data Buku</strong></h5>
                    </div>    
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th scope="row" className="col-md-6 col-lg-4">Jenjang</th>
                                    <td>SMP</td>
                                </tr>
                                <tr>
                                    <th scope="row">Tipe</th>
                                    <td>Buku PDF</td>
                                </tr>
                                <tr>
                                    <th scope="row">Penulis</th>
                                    <td>Nama Penulis</td>
                                </tr>
                                <tr>
                                    <th scope="row">Penerbit</th>
                                    <td>Badan Pengembangan Bahasa dan Perbukuan, Kementerian Pendidikan dan Kebudayaan</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th scope="row" className="col-md-6 col-lg-4">Penelaah</th>
                                    <td>SMP</td>
                                </tr>
                                <tr>
                                    <th scope="row">Tahun Terbit</th>
                                    <td>Buku PDF</td>
                                </tr>
                                <tr>
                                    <th scope="row">ISBN</th>
                                    <td>Nama Penulis</td>
                                </tr>
                                <tr>
                                    <th scope="row">Edisi</th>
                                    <td>Nama Penerbit</td>
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
