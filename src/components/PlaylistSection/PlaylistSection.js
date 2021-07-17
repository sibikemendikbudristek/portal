import './PlaylistSection.scss';

const PlaylistSection = ({data}) => {
    return (
        <section id="PlaylistSection">
            <div className="container my-5">
                <div className="row">
                    <div className="col" style={{overflowX : 'scroll'}}>
                    <table className="table table-striped table-borderless">
                    <thead>
                      <tr className="text-center">
                        <th scope="col">
                          <i className="fas fa-fw fa-music" /> Audio
                        </th>
                        <th scope="col">Judul</th>
                        <th scope="col">Bab</th>
                        <th scope="col">Sub Bab</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => {
                      return(
                        <tr className="text-center" key={index}>
                        <th scope="row">
                          <audio controls>
                            <source src={item.attachment} type="audio/mpeg" />
                          </audio>
                        </th>
                        <td className="text-start">{item.title}</td>
                        <td>{item.chapter}</td>
                        <td>{item.sub_chapter}</td>
                      </tr>
                      );
                    })}
                    </tbody>
                  </table>                  
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlaylistSection;
