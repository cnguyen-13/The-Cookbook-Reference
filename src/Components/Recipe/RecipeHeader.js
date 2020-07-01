import React from "react";

export default function RecipeHeader({ mealName, mealArea, mealCategory }) {
    return (
        <header className="recipe-card-details">
            <h2 className="recipe-card-title">{mealName}</h2>
            <small>
                {mealArea}, {mealCategory}
            </small>
        </header>
    );
}
