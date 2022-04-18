import { Component } from 'react';
import Movie from './movie';


export default class MovieList extends Component {
  
    render() {
        return (
            <div>
                {this.props.movies.map( (movie) => 
                    < Movie movieId={ movie.id } image={movie.image} title= {movie.title } releaseDate={ movie.releaseDate } synopsis={ movie.synopsis } reviews={ movie.reviews } addReview={ this.props.addReview }/ >
                )}
            </div>
        )
    }
}