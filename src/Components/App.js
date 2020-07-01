import React, { useState, useEffect } from "react";
import Lists from "./Lists/Lists";
import RecipeCard from "./RecipeCard/RecipeCard";
import MainDisplay from "./MainDisplay";
import Recipe from "./Recipe/Recipe";
import RecipeList from "./RecipeList";
import { Route, Switch, Link, useParams } from "react-router-dom";

export default function App() {
    const { category, choice } = useParams();
    //Break away from the MAINDISPLAY THING, its confusing, just have separate components, it might make routing EASIER
    const [mealsData, setMealsData] = useState(null);
    const [recipeData, setRecipeData] = useState(null);
    const [endPoint, setEndPoint] = useState(null);
    //Move these functions to RecipeList component, then use useParams, then ROUTE to that page
    function createEndPoint(e, queryBasedOn) {
        let baseUrl;
        if (queryBasedOn === "area") {
            baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
        } else if (queryBasedOn === "category") {
            baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
        } else {
            baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        }

        const query = e.target.value;
        const endPoint = baseUrl + query;
        setEndPoint(endPoint);
    }

    // async function showMeals(url) {
    //     const listMeals = [];
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     const meals = data.meals;
    //     for (let i = 0, len = meals.length; i < len; i++) {
    //         const searchMeal = await fetch(
    //             `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals[i].strMeal}`
    //         );
    //         const jsonMeal = await searchMeal.json();
    //         const meal = jsonMeal.meals[0];
    //         listMeals.push(<RecipeCard meal={meal} onClickFunc={showRecipe} />);
    //     }

    //     setMealsData(<RecipeList list={listMeals} />);
    // }

    function showRecipe(meal) {
        setRecipeData(meal);
    }

    return (
        <div className="gridded">
            <Lists createEndPoint={createEndPoint} />
            {
                //ROUTES HERE}} SWITCH
                //Its is either showMeals or showRecipe
            }
            <Switch>
                <Route path={`/:category/:choice`}>
                    <Recipe meal={recipeData} />
                </Route>
                <Route path={`/:category`}>
                    <RecipeList endpoint={endPoint} showRecipe={showRecipe} />
                </Route>
                <Route exact path={`/`}></Route>
                {
                    //randomize list shown}
                }
            </Switch>
        </div>
    );
}

//Two states
/**
 * Meals
 * Recipe
 *
 * if Recipe // localhost/category/recipe
 *   -Show Recipe over Meals
 * else // localhost && localhost/cate
 *   -Show Meals
 *
 *
 *
 */
