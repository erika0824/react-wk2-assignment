import { Component } from 'react';
import Review from './review';

export default class ReviewList extends Component {
   
    render() {
        return(
            <div>
                {this.props.reviews.map((review, i) => (
                    <Review name={ review.name } review={ review.review } rating={ review.rating } key={review.id }/>
                ))}
            </div>
        )
    }
}

