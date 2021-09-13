

const ArticleItem = ({title, description, thumbnail, link}) => {
    return (
        <div className="card shadow border-0" style={{minHeight: '150px'}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <img loading="lazy" height="125" width="135" style={{objectFit: 'cover'}} className="rounded" src={thumbnail} alt={title} />
                    </div>
                    <div className="col">
                        <a className="link" href={link}>
                            <h5 className="card-title">{title}</h5>
                        </a>
                      <p className="card-text">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
    );
};

export default ArticleItem;
