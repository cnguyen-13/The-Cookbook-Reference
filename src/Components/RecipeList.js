import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { useParams } from "react-router-dom";
export default function RecipeList({ endpoint, showRecipe }) {
    const { category, choice } = useParams();
    const [mealsData, setMealsData] = useState(null);
    //Move these functions to RecipeList component, then use useParams, then ROUTE to that page

    useEffect(() => {
        //Creates Cards
        async function showMeals(url) {
            const listMeals = [];
            const res = await fetch(url);
            const data = await res.json();
            const meals = data.meals;
            for (let i = 0, len = meals.length; i < len; i++) {
                const searchMeal = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals[i].strMeal}`
                );
                const jsonMeal = await searchMeal.json();
                const meal = jsonMeal.meals[0];
                listMeals.push(
                    <RecipeCard meal={meal} onClickFunc={showRecipe} />
                );
            }

            setMealsData(listMeals);
        }

        showMeals(endpoint);
    });

    return (
        <div>
            <h2>Meals for {endpoint}</h2>
            {mealsData}
        </div>
    );
}
