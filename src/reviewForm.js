//ReviewForm – a form at the bottom of a Movie component that allows users to leave reviews. When submitted, 
//the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.

import { Component } from 'react';
import StarRating from './stars';

export default class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
          formData: {
            name: '',
            review: '',
            rating: 0,
          }
        }
    }

    handleRatingChange = (event) => {
        this.setState((state) => {
            const copyOfFormData  = { ...this.state.formData };
            copyOfFormData.rating = event.target.value;
            return { formData: copyOfFormData }
        })
    }

    handleNameChange = (event) => {
        this.setState(state => {
            //need to copy the entire formData object
            const copyOfFormData = { ...this.state.formData };
            copyOfFormData.name = event.target.value;
            //returns a copy of name and review from formData
            return { formData: copyOfFormData }
        })
    }

    handleReviewChange = (event) => {
        this.setState(state => {
            //need to copy the entire formData object
           const copyOfFormData = { ...this.state.formData };
           copyOfFormData.review = event.target.value;
           //returns a copy of name and review from formData
           return { formData: copyOfFormData }
        })
    }

    handleSubmit = () => {
        const newReview = {
            id: this.props.reviews[ this.props.reviews.length - 1 ].id + 1,
            movieId: this.props.movieId,
            name: this.state.formData.name,
            review: this.state.formData.review,
            rating: this.state.formData.rating,
        }
        this.props.addReview(newReview);
        console.log(newReview)
        //clears the form
        this.setState({formData: { name: '', review: '' , rating: ''}})
        
    }

    render(){
        return(
            <div>
                <form>
                    <p>Submit your review:</p>
                    <StarRating color={this.props.color} value={ this.state.formData.rating } onChange={ this.handleRatingChange }/>
                    
                    <label>Name:</label><br></br>
                    <input className='form-data' type="text" value={ this.state.formData.name } onChange={ this.handleNameChange }></input><br></br>
                    <label>Review:</label><br></br>
                    <textarea className='form-data' value={ this.state.formData.review } onChange={ this.handleReviewChange }></textarea><br></br>
                    <button className='form-data' type="button"  onClick={ this.handleSubmit }>Submit</button>
                </form>
            </div>
        )
    }
}

