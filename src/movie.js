//Movie – a component that represents movie data (i.e. image, synopsis, rating, etc…)

import { Component } from 'react';
import ReviewForm from './reviewForm';
import ReviewList from './reviewList';


export default class Movie extends Component {
  
    render() {
        return (
            <div className='row'>
                <div>
                    <img className='image' src={this.props.image} />
                </div>
                <div className='col-1'>
                    <h2 className='movie-data'> {this.props.title} </h2>
                    <h3> {this.props.releaseDate} </h3>
                    <p className='movie-data'> {this.props.synopsis} </p>
                    <ReviewForm movieId={ this.props.movieId } reviews={ this.props.reviews } addReview={ this.props.addReview }/>
                </div>
                <div className='col-2'>
                    <ReviewList movieId={ this.props.movieId } reviews={ this.props.reviews }/> 
                </div>
            </div>
        )
    }
}


