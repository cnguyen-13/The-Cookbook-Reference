import React from "react";
import { Route, Link, useParams } from "react-router-dom";

export default function RecipeCardDescription({
    mealName,
    mealCategory,
    mealArea,
    mealTags,
    onClickFunc,
}) {
    const { categoryOrArea } = useParams();
    return (
        <section className="search-card-description">
            <h2 className="search-card-title">{mealName}</h2>
            <p className="search-card-info">Category: {mealCategory}</p>
            <p className="search-card-info">Area: {mealArea}</p>
            <p className="search-card-info">
                {mealTags ? mealTags : "No Tags"}
            </p>
            <Link to={`/${categoryOrArea}/${mealName}`}>
                <button className="search-card-button" onClick={onClickFunc}>
                    Get Recipe!
                </button>
            </Link>
        </section>
    );
}
