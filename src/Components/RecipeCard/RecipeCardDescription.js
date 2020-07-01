import React from "react";

export default function RecipeCardDescription({
    mealName,
    mealCategory,
    mealArea,
    mealTags,
    onClickFunc,
}) {
    return (
        <section className="search-card-description">
            <h2 className="search-card-title">{mealName}</h2>
            <p className="search-card-info">Category: {mealCategory}</p>
            <p className="search-card-info">Area: {mealArea}</p>
            <p className="search-card-info">
                {mealTags ? mealTags : "No Tags"}
            </p>
            <button className="search-card-button" onClick={onClickFunc}>
                Get Recipe!
            </button>
        </section>
    );
}
