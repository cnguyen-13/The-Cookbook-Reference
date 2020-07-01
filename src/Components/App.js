import React, { useState, useEffect } from "react";
import Lists from "./Lists/Lists";
import RecipeCard from "./RecipeCard/RecipeCard";
import MainDisplay from "./MainDisplay";
import Recipe from "./Recipe/Recipe";
import RecipeList from "./RecipeList";
import { Route, Switch, Link, useParams } from "react-router-dom";

//I should pass :category as the search query for async get Datas lol
export default function App() {
    const { category, choice } = useParams();
    //Break away from the MAINDISPLAY THING, its confusing, just have separate components, it might make routing EASIER
    const [mealsData, setMealsData] = useState(null);
    const [recipeData, setRecipeData] = useState(null);
    const [endPoint, setEndPoint] = useState(null); //GET RID OF
    const [categoryList, setCategoryList] = useState([]);
    const [areaList, setAreaList] = useState([]);
    //Move these functions to RecipeList component, then use useParams, then ROUTE to that page
    useEffect(() => {
        async function getCategoryList() {
            const res = await fetch(
                "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
            );
            const data = await res.json();
            const categoryList = data.meals.map((object) => {
                return object.strCategory;
            });
            setCategoryList(categoryList);
        }

        async function getAreaList() {
            const res = await fetch(
                "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
            );
            const data = await res.json();
            const areaList = data.meals.map((object) => {
                return object.strArea;
            });
            setAreaList(areaList);
        }
        getCategoryList();
        getAreaList();
    }, []);

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

    function showRecipe(meal) {
        setRecipeData(meal);
    }

    return (
        <div className="gridded">
            <Lists
                createEndPoint={createEndPoint}
                categoryList={categoryList}
                areaList={areaList}
            />
            <Switch>
                <Route path={`/:categoryParam/:choice`}>
                    <Recipe meal={recipeData} />
                </Route>
                <Route path={`/:categoryParam`}>
                    <RecipeList
                        showRecipe={showRecipe}
                        categoryList={categoryList}
                        areaList={areaList}
                    />
                </Route>
                <Route exact path={`/`}></Route>
                {
                    //randomize list shown}
                }
            </Switch>
        </div>
    );
}
