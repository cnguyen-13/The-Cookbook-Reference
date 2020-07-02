import React from "react";

export default function RecipeHeader({ mealName, mealArea, mealCategory }) {
    return (
        <header className="recipe-page-header">
            <h2 className="recipe-page-title">{mealName}</h2>
            <small className="recipe-page-subtitle">
                {mealArea}, {mealCategory}
            </small>
        </header>
    );
}
