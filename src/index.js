import React from 'react';
import ReactDOM from 'react-dom';
import { SearchCards } from './Components/searchCardsClass';
import { ShowRecipe } from './Components/ShowRecipeClass';
import { Navigation } from './Components/navClass';
import './styles/styles.css';

const categories = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian'];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterList: null
        };
        this.showMeals = this.showMeals.bind(this);
        this.getData = this.getData.bind(this);
        this.showRecipe = this.showRecipe.bind(this);
        this.showMeals();
    }

    async showMeals(url, wasClicked = false) { 
        const listMeals = [];
        if(wasClicked) { //Shows category/area based on button clicked
            const res = await fetch(url);
            const data = await res.json();
            const meals = data.meals; 
            for(let i = 0, len = meals.length; i < len; i++) {
                const searchMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals[i].strMeal}`);
                const jsonMeal = await searchMeal.json();
                const meal = jsonMeal.meals[0];
                listMeals.push(<SearchCards onClickFunc={this.showRecipe} meal={meal} />)
            }

        } else { //Shows random category when page is visited
            const randomCategory = categories[Math.floor(Math.random() * 14)];
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${randomCategory}`);
            const data = await res.json();
            const meals = data.meals; 
            for(let i = 0, len = meals.length; i < len; i++) {
                const searchMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals[i].strMeal}`);
                const jsonMeal = await searchMeal.json();
                const meal = jsonMeal.meals[0];
                listMeals.push(<SearchCards onClickFunc={this.showRecipe} meal={meal} />)
            }
        }

        this.setState({
            filterList: 
                <div id="search-cards-bg">
                    {listMeals}
                </div>
            })
    }

    showRecipe(meal) {
        this.setState({filterList: <ShowRecipe meal={meal} />});
    }

    async getData(e, filter) {
        let baseUrl; 
        const wasClicked = true;
        if (filter === 'area') {
            baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
        } else if (filter === 'cat') {
            baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
        } else {
            baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        }

        const appendToBase = e.target.value;
        const endPoint = baseUrl + appendToBase;
        this.showMeals(endPoint, wasClicked)
    }

    render() {
        return (
            <div className="gridded">
                <Navigation getData={this.getData}/>
                <div id="recipe-card-bg">
                    {this.state.filterList}
                </div>
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
