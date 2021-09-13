import './ArticleItem.scss'

const ArticleItem = ({title, description, thumbnail, link}) => {
    return (
      <div id="ArticleItem">
      
      <div className="card shadow border-0" style={{minHeight: '150px'}}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <img loading="lazy" className="article-item-img rounded" src={thumbnail} alt={title} />
                  </div>
                  <div className="col-lg-8 mt-3 mt-lg-0">
                      <a className="link" href={link}>
                          <h5 className="card-title">{title}</h5>
                      </a>
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
};

export default ArticleItem;
