import React from 'react';
import ReactDOM from 'react-dom';
import { SearchCards } from './Components/searchCardsClass';
import { Navigation } from './Components/navClass';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterList: null
        };
        this.randomMeals = this.randomMeals.bind(this);
        this.getData = this.getData.bind(this);
        this.randomMeals();
    }

    //When the page is first loaded, display random meals.
    //Parse this down further https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    async randomMeals() {
        const listMeals = [];
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
        const data = await res.json();
        const meals = await data.meals; //Array
        for(let i = 0, len = meals.length; i < len; i++) {
            listMeals.push(<SearchCards mealTitle={meals[i].strMeal} category={meals[i].strCategory} imgSrc={meals[i].strMealThumb} area={meals[i].strArea} tags={meals[i].strTags} />)
        }

        /*
        const realList = await meals.map(async (mealObject) => { //Each object is actually an object
            const searchMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealObject.strMeal}`);
            const jsonMeal = await searchMeal.json();
            const meal = await jsonMeal.meals[0];
            return (<SearchCards mealTitle={meal.strMeal} category={meal.strCategory} imgSrc={meal.strMealThumb} area={meal.strArea} tags={meal.strTags} />);
        })*/

        console.log(listMeals)
        this.setState({
            filterList: <div>
                {listMeals}
            </div>
        })
    }

    async getData(e, filter) { //Might have to move this function up to App Class
        let baseUrl; 
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
        console.log(meals)
        this.setState({filterList: meals})
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