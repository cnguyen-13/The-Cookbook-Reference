import React from "react";
import RecipeCardImage from "./RecipeCardImage";
import RecipeCardDescription from "./RecipeCardDescription";

export default function RecipeCard({ meal, onClickFunc }) {
    const imageUrl = meal.strMealThumb;
    const mealName = meal.strMeal;
    const mealCategory = meal.strCategory;
    const mealArea = meal.strArea;
    const mealTags = meal.strTags;
    function handleClick() {
        onClickFunc(meal);
    }

    return (
        <div className="search-card">
            <RecipeCardImage src={imageUrl} alt={mealName} />
            <RecipeCardDescription
                mealName={mealName}
                mealCategory={mealCategory}
                mealArea={mealArea}
                mealTags={mealTags ? mealTags : "No Tags"}
                onClick={handleClick}
            />
        </div>
    );
}
// export class SearchCard extends React.Component {
//     render() {
//         const meal = this.props.meal;
//         return (
//             <div className="search-card">
//                 <SearchCardImage
//                     src={this.props.meal.strMealThumb}
//                     alt={this.props.meal.strMeal}
//                 />
//                 <SearchCardDescription
//                     mealName={this.props.meal.strMeal}
//                     mealCategory={this.props.meal.strCategory}
//                     mealArea={this.props.meal.strArea}
//                     mealTags={
//                         this.props.meal.strTags
//                             ? this.props.meal.strTags
//                             : "No Tags"
//                     }
//                     onClick={() => this.props.onClickFunc(meal)}
//                 />
//             </div>
//         );
//     }
// }
