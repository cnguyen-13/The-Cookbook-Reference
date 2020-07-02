import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { useParams } from "react-router-dom";
export default function RecipeList({
    showRecipe,
    categoryList,
    areaList,
    randomize = false,
}) {
    const { categoryParam } = useParams();
    const [mealsData, setMealsData] = useState(null);

    function createEndPoint() {
        let baseUrl;
        if (areaList.includes(categoryParam)) {
            baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
        } else {
            baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
        }

        const endPoint = baseUrl + categoryParam;
        return endPoint;
    }
    useEffect(() => {
        //Creates Cards
        async function showMeals() {
            const url = createEndPoint();
            const listMeals = [];
            const res = await fetch(url);
            const data = await res.json();
            const meals = data.meals;
            for (let i = 0; i < meals.length; i++) {
                const recipeName = meals[i].strMeal;
                const searchMeal = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
                );
                const jsonMeal = await searchMeal.json();
                const meal = jsonMeal.meals[0];
                listMeals.push(<RecipeCard meal={meal} key={recipeName} />);
            }

            setMealsData(listMeals);
        }

        showMeals();
    }, [categoryParam]);

    return (
        <div>
            <h2>{categoryParam} Recipes!</h2>
            {mealsData}
        </div>
    );
}
