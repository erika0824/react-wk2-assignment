//Stars – a one to five-star rating component that allows users to rate something (movies in this case, 
//but remember that components are reusable, so you could use it elsewhere!)

import { Component } from 'react';
import { FaStar } from 'react-icons/fa';

export default class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starsSelected: 0,
        };
        this.change = this.change.bind(this);
    }

    change(starsSelected) {
        this.setState( {starsSelected} );
       
    }

    render() {
        const { starsSelected } = this.state;
        const stars = [1,2,3,4,5];
        return (
            <div>
                { stars.map((star, i) => (
              <FaStar 
                key={i} 
                selected={i < starsSelected}
                onClick={ () => this.change(i + 1) }
                color={i + 1 <= starsSelected ? "gold" : "gray"}
                value={starsSelected}
                />  
            )) }
            <p>
                Your rating is: {starsSelected} of 5 stars
            </p>   
            </div>
        )
    }
}