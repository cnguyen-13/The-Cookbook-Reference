import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { useParams } from "react-router-dom";
export default function RecipeList({ areaList, randomize = false }) {
    const { categoryParam } = useParams();
    const [mealsData, setMealsData] = useState(null);
    const [randomArea, setRandomArea] = useState(null);

    useEffect(() => {
        function createEndPoint() {
            let endPoint;
            let baseUrl =
                "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
            if (randomize) {
                const randomIdx = Math.floor(Math.random() * areaList.length);
                const randomArea = areaList[randomIdx];
                setRandomArea(randomArea);
                endPoint = baseUrl + randomArea;
            } else {
                if (!areaList.includes(categoryParam)) {
                    baseUrl =
                        "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
                }
                endPoint = baseUrl + categoryParam;
            }
            return endPoint;
        }

        //Creates Cards
        async function showMeals() {
            const listMeals = [];
            const url = createEndPoint();
            const res = await fetch(url);
            const data = await res.json();
            const meals = data.meals;
            const mealBaseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
            for (let i = 0; i < meals.length; i++) {
                const recipeName = meals[i].strMeal;
                const searchMeal = await fetch(`${mealBaseUrl}${recipeName}`);
                const jsonMeal = await searchMeal.json();
                const meal = jsonMeal.meals[0];
                listMeals.push(<RecipeCard meal={meal} key={recipeName} />);
            }

            setMealsData(listMeals);
        }

        showMeals();
    }, [categoryParam, areaList]);

    return (
        <div>
            <h2>
                {randomize
                    ? `Enjoy Some ${randomArea} Recipes Today!`
                    : `${categoryParam} Recipes!`}
            </h2>
            {mealsData}
        </div>
    );
}
