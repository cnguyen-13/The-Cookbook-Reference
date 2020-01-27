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
            return <li key={item[1]}>{`${item[0]} - ${item[1]}`}</li>
        })
    }

    parseInstructions() {
        //Creates instructions
        const steps = this.props.meal['strInstructions'].split('.');
        steps.pop();
        this.instructions = steps.map(instruction => {
            return <li key={instruction}>{instruction}.</li>  
        });
    }

    render() {
        return (
            <div className="recipe-card">
                <section className="recipe-card-details">
                    <h2 className="recipe-card-title">{this.props.meal.strMeal}</h2>
                    <small>{this.props.meal.strArea}, {this.props.meal.strCategory}</small>
                </section>
                <section className="recipe-card-ingredients">
                    <div> 
                        <h3 className="recipe-card-ingredients-title">Ingredients</h3>
                        <ul className="recipe-card-ingredients-list">
                            {this.ingredientsWithMeasurements}
                        </ul>      
                        <img src={this.props.meal.strMealThumb} />                   
                    </div>
                </section>

                <section className="recipe-card-instructions">
                    <div>
                        <h3 className="recipe-card-instructions-title">Instructions</h3>
                        <ol className="recipe-card-instructions-list">
                            {this.instructions}
                        </ol>                       
                    </div>
                </section>
            </div>
        );
    }
}
