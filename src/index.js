import React from 'react';
import ReactDOM from 'react-dom';
import { SearchCards } from './Components/searchCardsClass';
import { ShowRecipe } from './Components/ShowRecipeClass';
import { Navigation } from './Components/navClass';
import './styles/styles.css';

class WelcomeMessage extends React.Component {
    render() {
        return (
            <div className="search-cards-bg">
                <p className="welcome-title">Welcome to The Cookbook Reference!</p>
                <p className="welcome-title-intro">Begin by clicking on any button in the areas or categories section.</p>
                <p className="welcome-title-intro">A list of recipes will appear and you may select any recipe by clicking the "Get Recipe!" button.</p>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainDisplay:                 
                <WelcomeMessage />
            };
        this.showMeals = this.showMeals.bind(this);
        this.getData = this.getData.bind(this);
        this.showRecipe = this.showRecipe.bind(this);
    }

    async showMeals(url) { 
        const listMeals = [];
        const res = await fetch(url);
        const data = await res.json();
        const meals = data.meals; 
        for(let i = 0, len = meals.length; i < len; i++) {
            const searchMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals[i].strMeal}`);
            const jsonMeal = await searchMeal.json();
            const meal = jsonMeal.meals[0];
            listMeals.push(<SearchCards onClickFunc={this.showRecipe} meal={meal} />)
        }
     
        this.setState({
            mainDisplay: 
                <div className="search-cards-bg">
                    {listMeals}
                </div>
            })
    }

    async getData(e, filter) {
        let baseUrl; 
        if (filter === 'area') {
            baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
        } else if (filter === 'cat') {
            baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
        } else {
            baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        }

        const query = e.target.value;
        const endPoint = baseUrl + query;
        this.showMeals(endPoint)
    }

    showRecipe(meal) {
        this.setState({mainDisplay: <ShowRecipe meal={meal} />});
    }

    render() {
        return (
            <div className="gridded">
                <Navigation getData={this.getData}/>
                <div className="recipe-card-bg">
                    {this.state.mainDisplay}
                </div>
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
