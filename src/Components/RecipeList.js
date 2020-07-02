import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { useParams } from "react-router-dom";
export default function RecipeList({ areaList, randomize = false }) {
    const { categoryParam } = useParams();
    const [mealsData, setMealsData] = useState(null);
    const [randomArea, setRandomArea] = useState(null);
    const [notFoundMessage, setNotFoundMessage] = useState("");

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
            try {
                const res = await fetch(url);
                const data = await res.json();
                const meals = data.meals;
                const mealBaseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
                for (let i = 0; i < meals.length; i++) {
                    const recipeName = meals[i].strMeal;
                    const searchMeal = await fetch(
                        `${mealBaseUrl}${recipeName}`
                    );
                    const jsonMeal = await searchMeal.json();
                    const meal = jsonMeal.meals[0];
                    listMeals.push(<RecipeCard meal={meal} key={recipeName} />);
                }

                setMealsData(listMeals);
            } catch (err) {
                setNotFoundMessage(
                    `${categoryParam} recipes can not be found on TCR!`
                );
            }
        }

        showMeals();
    }, [categoryParam, areaList, randomize]);

    return (
        <section className="recipe-list-section">
            <h2 className="recipe-list-section-message">
                {randomize
                    ? `Enjoy Some ${randomArea} Recipes Today!`
                    : `${categoryParam} Recipes!`}
            </h2>
            <div className="recipe-list-section-meals-list">
                {mealsData ? (
                    mealsData
                ) : (
                    <p className="not-found-message">{notFoundMessage}</p>
                )}
            </div>
        </section>
    );
}
