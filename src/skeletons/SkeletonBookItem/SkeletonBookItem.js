import './SkeletonBookItem.scss';

const SkeletonBookItem = () => {
    return (
        <div id="SkeletonBookItem">
            <div className="card border-0 shadow-sm">
                <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                    <span className="type"></span>
                    <br />
                    <span className="title"></span>
                    <br />
                    <span className="link"></span>
                </div>
            </div>
        </div>
    )
}

export default SkeletonBookItem;
