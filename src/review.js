//Review – A text review a user can leave on a movie.

import { Component } from 'react';




export default class Review extends Component {
    render() {
        return(
            <div className='col'>
                <div className='reviews-list'>
                    <p>{ this.props.name }</p>
                    <p>{`"${this.props.review }"`}</p>
                </div>
              
            </div>
        )
    } 
}