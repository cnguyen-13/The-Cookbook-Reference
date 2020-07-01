import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { useParams } from "react-router-dom";
export default function RecipeList({ showRecipe, categoryList, areaList }) {
    const { categoryParam } = useParams();
    const [mealsData, setMealsData] = useState(null);

    function createEndPoint() {
        let baseUrl;
        if (areaList.includes(categoryParam)) {
            baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
        } else if (categoryList.includes(categoryParam)) {
            baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
        } else {
            baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        }

        const endPoint = baseUrl + categoryParam;
        return endPoint;
    }
    useEffect(() => {
        //Creates Cards
        async function showMeals() {
            const url = createEndPoint();
            console.log(url);
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

        showMeals();
    }, [categoryParam]);

    return (
        <div>
            <h2>Meals for {createEndPoint()}</h2>
            {mealsData}
        </div>
    );
}
