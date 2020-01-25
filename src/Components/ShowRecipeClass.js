import React from 'react';
import { render } from '@testing-library/react';


class ShowRecipe extends React.Component {
    constructor(props) {
        super(props);
        let counter = 1;
        //get all ingreds with measurements

    }   
    render() {
        return (
            <div className="recipe-card">
                <h2 className="recipe-card-title">{this.props.strMeal}</h2>
                <img src={this.props.strMealThumb} alt={this.props.strMeal}/>
                <ul className="recipe-card-ingredients">

                </ul>
                <ol className="recipe-card-instructions">

                </ol>
                <iframe src={this.props.strYoutube}></iframe>

            </div>
         /*
                Things to take from JSON 
                    - strMeal //Title
                    - strInstructions
                    - strMealThumb
                    - strYoutube
                        //Do some while loop for these two
                    - strMeasure[1-20]
                    - strIngredients[1-20]
                   
            */
        );
    }
}