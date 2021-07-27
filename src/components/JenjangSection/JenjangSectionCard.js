import './JenjangSectionCard.scss';

const JenjangSectionCard = ({bgColor, thumbnail, title, description}) => {
    return (
        <div id="JenjangSectionCard">
            <div className="card border-0 shadow mt-3">
                    <div className="row g-0">
                        <div className="col-4 rounded-left" style={{backgroundColor: bgColor}}>
                            <h4 className="text-center py-5">{thumbnail}</h4>
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
