import React from 'react';

export class ShowRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.ingredientsWithMeasurements = null;
        this.instructions = null;
        this.createList = this.createList.bind(this);
        this.createList();
    }   

    createList() {
        //Creates ingred list
        const str = 'strIngredient';
        let counter = 1;
        const lists = [];
        while(this.props.meal[`${str + counter}`] != null) {
            lists.push([this.props.meal[`strMeasure${counter}`], this.props.meal[`${str + counter}`]])
            counter++;
        }

        this.ingredientsWithMeasurements = lists.map(item => {
            return <li key={item}>{`${item[0]} ${item[1]}`}</li>
        })

        //Creates instructions, MUST parse  this.props.meal.strInstructions(string btw) by '.' 

    }

    render() {
        return (
            <div className="recipe-card">
                <h2 className="recipe-card-title">{this.props.meal.strMeal}</h2>
                <img className="recipe-card-image" src={this.props.meal.strMealThumb} alt={this.props.meal.strMeal}/>
                <ul className="recipe-card-ingredients">
                    {this.ingredientsWithMeasurements}
                </ul>
                <ol className="recipe-card-instructions">
                    <li>{this.props.meal.strInstructions}</li>
                </ol>
            </div>
        );
    }
}
