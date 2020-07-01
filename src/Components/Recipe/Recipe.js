import React, { useState, useEffect } from "react";
import RecipeHeader from "./RecipeHeader";
import RecipeIngredients from "./RecipeIngredients.js";
import RecipeInstructions from "./RecipeInstructions";

export default function Recipe({ meal }) {
    const [ingredList, setIngredList] = useState(null);
    const [instructionList, setInstructionList] = useState(null);
    const mealName = meal.strMeal;
    const mealArea = meal.strArea;
    const mealCategory = meal.strCategory;
    const mealImageUrl = meal.strMealThumb;

    useEffect(() => {
        function createIngredList() {
            //Creates ingred list
            const propertyBase = "strIngredient";
            let ingredNum = 1;
            const listOfIngreds = [];
            while (meal[`${propertyBase + ingredNum}`]) {
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
            <RecipeHeader
                mealName={mealName}
                mealArea={mealArea}
                mealCategory={mealCategory}
            />
            <RecipeIngredients
                ingredients={ingredList}
                src={mealImageUrl}
                alt={mealName}
            />

            <RecipeInstructions instructions={instructionList} />
        </div>
    );
}
