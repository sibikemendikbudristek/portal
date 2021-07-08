import './JenjangSectionCard.scss';

const JenjangSectionCard = ({thumbnail, title, description}) => {
    return (
        <div id="JenjangSectionCard">
            <div className="card border-0 shadow mt-3">
                    <div className="row g-0">
                        <div className="col-4">
                            <img className="card-thumbnail rounded-left" src={thumbnail} alt={title} />
                        </div>
                        <div className="col-8">
                        <div className="card-body">
                            <h5><strong>{title}</strong></h5>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JenjangSectionCard
