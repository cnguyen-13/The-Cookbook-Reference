import React, { useState, useEffect } from "react";
import Lists from "./Lists/Lists";
import RecipeCard from "./RecipeCard/RecipeCard";
import MainDisplay from "./MainDisplay";
import WelcomeMessage from "./WelcomeMessage";
import Recipe from "./Recipe";

export default function App() {
    const [mainDisplay, setMainDisplay] = useState(<WelcomeMessage />);

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
            listMeals.push(<RecipeCard meal={meal} onClickFunc={showRecipe} />);
        }
        setMainDisplay(<div className="search-cards-bg">{listMeals}</div>);
    }

    function createEndPoint(e, queryBasedOn) {
        let baseUrl;
        if (queryBasedOn === "area") {
            baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
        } else if (queryBasedOn === "cat") {
            baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
        } else {
            baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        }

        const query = e.target.value;
        const endPoint = baseUrl + query;
        showMeals(endPoint);
    }

    function showRecipe(meal) {
        setMainDisplay(<Recipe meal={meal} />);
    }

    return (
        <div className="gridded">
            <Lists createEndPoint={createEndPoint} />
            <MainDisplay mainDisplay={mainDisplay} />
        </div>
    );
}

// export class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             mainDisplay: <WelcomeMessage />,
//         };
//         this.showMeals = this.showMeals.bind(this);
//         this.createEndPoint = this.createEndPoint.bind(this);
//         this.showRecipe = this.showRecipe.bind(this);
//     }

// async showMeals(url) {
//     const listMeals = [];
//     const res = await fetch(url);
//     const data = await res.json();
//     const meals = data.meals;
//     for (let i = 0, len = meals.length; i < len; i++) {
//         const searchMeal = await fetch(
//             `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals[i].strMeal}`
//         );
//         const jsonMeal = await searchMeal.json();
//         console.log(jsonMeal);
//         const meal = jsonMeal.meals[0];
//         listMeals.push(
//             <SearchCard onClickFunc={this.showRecipe} meal={meal} />
//         );
//     }

//     this.setState({
//         mainDisplay: <div className="search-cards-bg">{listMeals}</div>,
//     });
// }

//     createEndPoint(e, queryBasedOn) {
//         let baseUrl;
//         if (queryBasedOn === "area") {
//             baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
//         } else if (queryBasedOn === "cat") {
//             baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
//         } else {
//             baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
//         }

//         const query = e.target.value;
//         const endPoint = baseUrl + query;
//         this.showMeals(endPoint);
//     }

//     showRecipe(meal) {
//         this.setState({ mainDisplay: <ShowRecipe meal={meal} /> });
//     }

//     render() {
//         return (
//             <div className="gridded">
//                 <Lists createEndPoint={this.createEndPoint} />
//                 <MainDisplay mainDisplay={this.state.mainDisplay} />
//             </div>
//         );
//     }
// }
