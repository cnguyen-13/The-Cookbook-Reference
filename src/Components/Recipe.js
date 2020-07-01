import React, { useState, useEffect } from "react";

export default function Recipe({ meal }) {
    const [ingredList, setIngredList] = useState(null);
    const [instructionList, setInstructionList] = useState(null);
    console.log(meal);
    useEffect(() => {
        function createIngredList() {
            //Creates ingred list
            const propertyBase = "strIngredient";
            let ingredNum = 1;
            const listOfIngreds = [];
            while (meal[`${propertyBase + ingredNum}`]) {
                //null CHECK FOR NULL INIFINITE LOOP, GET THE LIST THO
                listOfIngreds.push([
                    meal[`strMeasure${ingredNum}`],
                    meal[`${propertyBase + ingredNum}`],
                ]);
                ingredNum++;
            }

            const ingredList = listOfIngreds.map((pair) => {
                //Each pair is a measurement, ingred pair ex. ['100mL', 'water']
                return <li key={pair[1]}>{`${pair[0]} - ${pair[1]}`}</li>;
            });
            setIngredList(ingredList);
        }

        function parseInstructions() {
            //Creates instructionList
            const steps = meal["strInstructions"].split(".");
            steps.pop();
            const instructionList = steps.map((step) => {
                return <li key={step}>{step}.</li>;
            });
            setInstructionList(instructionList);
        }
        createIngredList();
        parseInstructions();
    }, []);

    return (
        <div className="recipe-card">
            <section className="recipe-card-details">
                <h2 className="recipe-card-title">{meal.strMeal}</h2>
                <small>
                    {meal.strArea}, {meal.strCategory}
                </small>
            </section>

            <section className="recipe-card-ingredients">
                <div>
                    <h3 className="recipe-card-ingredients-title">
                        Ingredients
                    </h3>
                    <ul className="recipe-card-ingredients-list">
                        {ingredList}
                    </ul>
                    <img
                        className="recipe-card-ingredients-image"
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                    />
                </div>
            </section>

            <section className="recipe-card-instructions">
                <div>
                    <h3 className="recipe-card-instructions-title">
                        Instructions
                    </h3>
                    <ol className="recipe-card-instructions-list">
                        {instructionList}
                    </ol>
                </div>
            </section>
        </div>
    );
}
