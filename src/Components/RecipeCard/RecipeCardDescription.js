import React from "react";
import { Route, Link, useParams } from "react-router-dom";

export default function RecipeCardDescription({
    mealName,
    mealCategory,
    mealArea,
    mealTags,
}) {
    const { categoryParam } = useParams();
    return (
        <section className="search-card-description">
            <h2 className="search-card-title">{mealName}</h2>
            <p className="search-card-info">Category: {mealCategory}</p>
            <p className="search-card-info">Area: {mealArea}</p>
            <p className="search-card-info">
                {mealTags ? mealTags : "No Tags"}
            </p>
            <Link to={`/${categoryParam}/${mealName}`}>
                <button className="search-card-button">Get Recipe!</button>
            </Link>
        </section>
    );
}
