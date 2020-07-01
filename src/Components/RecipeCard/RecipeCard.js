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
                onClickFunc={handleClick}
            />
        </div>
    );
}