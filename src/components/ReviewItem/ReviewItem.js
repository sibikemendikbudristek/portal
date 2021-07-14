import React from 'react';
import { RatingView } from 'react-simple-star-rating'

const ReviewItem = () => {
    return (
        <div id="ReviewItem">
            <div className="card border-0 shadow" style={{borderRadius: '20px'}}>
                <div className="card-body">
                    <div className="row my-3">
                        <div className="col-3">
                            <img src="" alt="" />
                        </div>
                        <div className="col-9">
                            <h5><strong>John Doe</strong></h5>
                            <RatingView ratingValue={5} /* RatingView Props */ />
                            <p className="text-muted pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellendus dignissimos, rem nisi, aspernatur commodi, adipisci corporis voluptas ut at exercitationem vitae? Adipisci cumque iusto consequuntur aperiam nostrum, cupiditate aliquam?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
