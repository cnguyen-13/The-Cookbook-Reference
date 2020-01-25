import React from 'react';
import ReactDOM from 'react-dom';
import { SearchCards } from './Components/searchCardsClass';
import { Navigation } from './Components/navClass';

const categories = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian'];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterList: null
        };

        this.showMeals = this.showMeals.bind(this);
        this.getData = this.getData.bind(this);
        this.showMeals();
    }

    async showMeals(url, clicked = false) { //Reuse this
        const listMeals = [];
        if(clicked) { //Shows category/area based on button clicked
            const res = await fetch(url);
            const data = await res.json();
            const meals = data.meals; 
            for(let i = 0, len = meals.length; i < len; i++) {
                const searchMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals[i].strMeal}`);
                const jsonMeal = await searchMeal.json();
                const meal = jsonMeal.meals[0];
                listMeals.push(<SearchCards key={meal.strID} mealTitle={meal.strMeal} category={meal.strCategory} imgSrc={meal.strMealThumb} area={meal.strArea} tags={meal.strTags} />)
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
                listMeals.push(<SearchCards key={meal.strID} mealTitle={meal.strMeal} category={meal.strCategory} imgSrc={meal.strMealThumb} area={meal.strArea} tags={meal.strTags} />)
            }
        }

        this.setState({
            filterList: 
                <div>
                    {listMeals}
                </div>
        })
    }

    async getData(e, filter) { //Might have to move this function up to App Class
        let baseUrl; 
        const clicked = true;
        if (filter === 'area') {
            baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
        } else if (filter === 'cat') {
            baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
        } else {
            baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        }

        const appendToBase = e.target.value;
        const endPoint = baseUrl + appendToBase;
        const res = await fetch(endPoint);
        const data = await res.json();
        const meals = data.meals;
        this.showMeals(endPoint, clicked)
    }

    render() {
        return (
            <div>
                <Navigation getData={this.getData}/>
                <div>
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