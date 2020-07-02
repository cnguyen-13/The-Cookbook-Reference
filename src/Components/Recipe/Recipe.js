import React, { useState, useEffect } from "react";
import RecipeHeader from "./RecipeHeader";
import RecipeIngredients from "./RecipeIngredients.js";
import RecipeInstructions from "./RecipeInstructions";
import { useParams } from "react-router-dom";

export default function Recipe() {
    const { recipeParam } = useParams();
    const [didSetDetails, setDidSetDetails] = useState(false);
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [ingredList, setIngredList] = useState(null);
    const [instructionList, setInstructionList] = useState(null);
    const [recipeNotFoundMessage, setRecipeNotFoundMessage] = useState("");
    const [mealName, setMealName] = useState(null);
    const [mealArea, setMealArea] = useState(null);
    const [mealCategory, setMealCategory] = useState(null);
    const [mealImageUrl, setMealImageUrl] = useState(null);
    function createIngredList() {
        //Creates ingred list
        const propertyBase = "strIngredient";
        let ingredNum = 1;
        const listOfIngreds = [];
        while (recipeDetails[`${propertyBase + ingredNum}`]) {
            listOfIngreds.push([
                recipeDetails[`strMeasure${ingredNum}`],
                recipeDetails[`${propertyBase + ingredNum}`],
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
        const steps = recipeDetails["strInstructions"].split(".");
        steps.pop();
        const instructionList = steps.map((step) => {
            return <li key={step}>{step}.</li>;
        });
        setInstructionList(instructionList);
    }
    useEffect(() => {
        //NEED TO WAIT FORE GETRECIPE TO FINISH before parsing it for information
        async function getRecipe() {
            try {
                const baseUrl =
                    "https://www.themealdb.com/api/json/v1/1/search.php?s=";
                const recipeUrl = baseUrl + recipeParam;
                const res = await fetch(recipeUrl);
                const data = await res.json();
                const meal = data["meals"][0];
                setRecipeDetails(meal);
                setRecipeStates(meal);
            } catch (err) {
                setRecipeNotFoundMessage(
                    `The recipe for ${recipeParam} can not be found on TCR!`
                );
            }
        }

        function setRecipeStates(meal) {
            setMealName(meal.strMeal);
            setMealArea(meal.strArea);
            setMealCategory(meal.strCategory);
            setMealImageUrl(meal.strMealThumb);
        }

        getRecipe();
    }, [recipeParam]);

    if (recipeDetails && !didSetDetails) {
        setDidSetDetails(true);
        createIngredList();
        parseInstructions();
    }

    return (
        <div className="recipe-card">
            {recipeDetails ? (
                <>
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
                </>
            ) : (
                <p className="not-found-message">{recipeNotFoundMessage}</p>
            )}
        </div>
    );
}
