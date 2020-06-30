import React from "react";
import ReactDOM from "react-dom";
import { SearchCard } from "./Components/searchCardClass";
import { ShowRecipe } from "./Components/ShowRecipeClass";
import { Header } from "./Components/navClass";
import "./styles/styles.css";

class WelcomeMessage extends React.Component {
    render() {
        return (
            <div className="welcome-bg">
                <p className="welcome-title">
                    Welcome to The Cookbook Reference!
                </p>
                <p className="welcome-title-intro">
                    Begin by clicking on any button in the areas or categories
                    section.
                </p>
                <p className="welcome-title-intro">
                    A list of recipes will appear and you may select any recipe
                    by clicking the "Get Recipe!" button.
                </p>
            </div>
        );
    }
}

class MainDisplay extends React.Component {
    render() {
        return <div className="recipe-card-bg">{this.props.mainDisplay}</div>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainDisplay: <WelcomeMessage />
        };
        this.showMeals = this.showMeals.bind(this);
        this.createEndPoint = this.createEndPoint.bind(this);
        this.showRecipe = this.showRecipe.bind(this);
    }

    async showMeals(url) {
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
                <SearchCard onClickFunc={this.showRecipe} meal={meal} />
            );
        }

        this.setState({
            mainDisplay: <div className="search-cards-bg">{listMeals}</div>
        });
    }

    createEndPoint(e, queryBasedOn) {
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
        this.showMeals(endPoint);
    }

    showRecipe(meal) {
        this.setState({ mainDisplay: <ShowRecipe meal={meal} /> });
    }

    render() {
        return (
            <div className="gridded">
                <Header createEndPoint={this.createEndPoint} />
                <MainDisplay mainDisplay={this.state.mainDisplay} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
