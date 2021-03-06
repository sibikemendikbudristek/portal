import React from 'react';
import { RatingView } from 'react-simple-star-rating';
import defaultAvatar from '../../assets/img/default-avatar.png';

const ReviewItem = ({profileImg, name, feedbackStar, message}) => {
    return (
        <div id="ReviewItem">
            <div className="card border-0 shadow" style={{borderRadius: '20px'}}>
                <div className="card-body">
                    <div className="row my-3">
                        <div className="col-3">
                            <img className="img-fluid rounded-circle d-block mx-auto" src={profileImg || defaultAvatar} alt={name} />
                        </div>
                        <div className="col-9">
                            <h5><strong>{name}</strong></h5>
                            <RatingView ratingValue={feedbackStar} /* RatingView Props */ />
                            <p className="text-muted pt-3">{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
