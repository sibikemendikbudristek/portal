import './BookItem.scss';

const BookItem = ({bookImg, category, title, readUrl, detailUrl}) => {
    return (
        <div id="BookItem">
            <div className="card shadow">
                <img className="book-item-img" src={bookImg} alt={title} />
                <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                    <div className="row">
                        <div className="col">
                            <span className="badge bg-warning my-3">{category}</span>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <a className="card-link" href={readUrl}>
                                <h5 className="card-title text-white">{title}</h5>
                            </a>
                            <a className="card-link" href={detailUrl}>
                               <p className="card-text text-warning">Baca Selengkapnya <i className="fas fa-fw fa-arrow-right" /></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    );
};

export default BookItem;
