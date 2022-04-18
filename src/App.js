//MovieList – a container for all the Movie components and their data.
//Movie – a component that represents movie data (i.e. image, synopsis, rating, etc…)
//Stars – a one to five-star rating component that allows users to rate something (movies in this case, 
  //but remember that components are reusable, so you could use it elsewhere!)
//ReviewList – a container inside of a Movie that houses Review components.
//Review – A text review a user can leave on a movie.
//ReviewForm – a form at the bottom of a Movie component that allows users to leave reviews. When submitted, 
  //the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.

import { Component } from 'react';
import MovieList from './movieList';
import jurassicPark from '../src/jurassicPark.jpg';
import spidermanNoWayHome from '../src/spidermanNoWayHome.jpg';
import theSorcerersStone from '../src/theSorcerersStone.jpg';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 1, 
          image: spidermanNoWayHome,
          title: 'SpiderMan No Way Home',
          releaseDate: '2022',
          synopsis: `With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.`,
          reviews:[
            {
              id: 1,
              name: 'Ryan',
              review: 'This was a great movie!',
              rating: 5
            }
          ]
        },
        {
          id: 2, 
          image: jurassicPark,
          title: 'Jurassic Park',
          releaseDate: '1993',
          synopsis: `In Steven Spielberg's massive blockbuster, paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. While the park's mastermind, billionaire John Hammond (Richard Attenborough), assures everyone that the facility is safe, they find out otherwise when various ferocious predators break free and go on the hunt.`,
          reviews:[
            {
              id: 1,
              name: 'Erika',
              review: 'This was the best movie!',
              rating: 5
            }
          ]
        },
        {
          id: 3, 
          image: theSorcerersStone,
          title: 'Harry Potter and the Sorcerer\'s Stone',
          releaseDate: '2001',
          synopsis: `Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths.`,
          reviews:[
            {
              id: 1,
              name: 'Bella',
              review: 'I loved this movie!',
              rating: 5
            }
          ]
        },
      ]
    } 
  }
  
  addReview = (newReview) => {
    this.setState( (state) => {
      //grab copies of the movies
      const copyOfMovieData = [...state.movies];

      //find the movie with the same movie id as the reviewForm
      const foundMovie = copyOfMovieData.find(( movie ) => movie.id === newReview.movieId );
      const copyOfMovie = {...foundMovie};
      const foundReviewCopy = [...copyOfMovie.reviews]

      //add the review to the found movie in a copy
      foundReviewCopy.push(newReview);

      //combine copies together and make them the new state
       copyOfMovie.reviews = foundReviewCopy;
       const foundMovieIndex = copyOfMovieData.findIndex((movie) => movie.id === newReview.movieId);
       copyOfMovieData[foundMovieIndex] = copyOfMovie;
       return { movies: copyOfMovieData }
    })
  }


  render() {
    return (
      <div className="container">
        <div>
          {console.log( this.state.movies[0].reviews )}
          {console.log(this.state.movies[0].id)}
          <MovieList  movies={ this.state.movies } addReview={ this.addReview } />
        </div>
      </div>
    )
  }
}

