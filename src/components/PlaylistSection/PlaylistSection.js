import './PlaylistSection.scss';

const PlaylistSection = ({data}) => {
    const bookData = data;

    return (
        <section id="PlaylistSection">
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                    <table className="table table-striped table-borderless table-hover">
                    <thead>
                      <tr>
                        <th scope="col" className="col-1 text-center"><i className="fas fa-fw fa-music" /></th>
                        <th scope="col" className="col-9">Judul</th>
                        <th scope="col">Bab</th>
                        <th scope="col">Sub Bab</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                            <button className="btn">
                                <i className="fas fa-fw fa-play" />
                            </button>
                        </th>
                        <td>Daftar Isi</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>                  
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlaylistSection;
