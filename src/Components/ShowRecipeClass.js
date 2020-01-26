import React from 'react';

export class ShowRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.ingredientsWithMeasurements = null;
        this.instructions = null;
        this.createIngredList = this.createIngredList.bind(this);
        this.parseInstructions = this.parseInstructions.bind(this);
        this.createIngredList();
        this.parseInstructions();
    }   

    createIngredList() {
        //Creates ingred list
        const str = 'strIngredient';
        let counter = 1;
        const lists = [];
        while(this.props.meal[`${str + counter}`] !== '') {
            lists.push([this.props.meal[`strMeasure${counter}`], this.props.meal[`${str + counter}`]])
            counter++;
        }

        this.ingredientsWithMeasurements = lists.map(item => {
            return <li key={item[1]}>{`${item[0]} ${item[1]}`}</li>
        })
    }

    parseInstructions() {
        //Creates instructions
        const steps = this.props.meal['strInstructions'].split('.');
        this.instructions = steps.map(instruction => {
            return <li key={instruction}>{instruction}</li>
        });
    }

    render() {
        return (
            <div className="recipe-card">
                <h2 className="recipe-card-title">{this.props.meal.strMeal} <small>{this.props.meal.strArea}, {this.props.meal.strCategory}</small></h2>
                <img className="recipe-card-image" src={this.props.meal.strMealThumb} alt={this.props.meal.strMeal}/>
                <section className="recipe-card-ingrendients">
                    <h3 className="recipe-card-ingrendients-title">Ingredients</h3>
                    <ul className="recipe-card-ingrendients-list">
                        {this.ingredientsWithMeasurements}
                    </ul>
                </section>

                <section className="recipe-card-instructions">
                    <h3 className="recipe-card-instructions-title">Instructions</h3>
                    <ol className="recipe-card-instructions-list">
                        {this.instructions}
                    </ol>
                </section>
            </div>
        );
    }
}
