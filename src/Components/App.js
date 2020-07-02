import React, { useState, useEffect } from "react";
import Lists from "./Lists/Lists";
import Recipe from "./Recipe/Recipe";
import RecipeList from "./RecipeList";
import { Route, Switch } from "react-router-dom";

//I should pass :category as the search query for async get Datas lol
export default function App() {
    const [categoryList, setCategoryList] = useState(null);
    const [areaList, setAreaList] = useState(null);

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

    return (
        <div className="gridded">
            {areaList && categoryList ? (
                <Lists categoryList={categoryList} areaList={areaList} />
            ) : null}

            <Switch>
                <Route path={`/:categoryParam/:recipeParam`}>
                    <Recipe />
                </Route>
                <Route path={`/:categoryParam`}>
                    {areaList ? (
                        <RecipeList
                            categoryList={categoryList}
                            areaList={areaList}
                        />
                    ) : (
                        "LOADING"
                    )}
                </Route>
                <Route exact path={`/`}>
                    {areaList ? (
                        <RecipeList
                            categoryList={categoryList}
                            areaList={areaList}
                            randomize={true}
                        />
                    ) : (
                        "LOADING"
                    )}
                </Route>
            </Switch>
        </div>
    );
}
