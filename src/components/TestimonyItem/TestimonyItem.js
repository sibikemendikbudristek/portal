import './TestimonyItem.scss';

const TestimonyItem = ({name, institution, text, picture}) => {
    return (
        <div id="TestimonyItem">
            <div className="card shadow mx-3 mx-sm-0">
                <div className="card-body text-center">
                    <img className="testimony-img rounded-circle d-block mx-auto" src={picture} alt={name} />
                    <h5 className="username"><strong>{name}</strong></h5>
                    <h6><small>{institution}</small></h6>
                    <p className="text-muted my-5" style={{fontStyle: 'italic'}}>"{text}"</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonyItem
