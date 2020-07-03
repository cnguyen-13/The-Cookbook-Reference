import React from "react";
import { Link, useParams } from "react-router-dom";

export default function RecipeCardDescription({
    mealName,
    mealCategory,
    mealArea,
    mealTags,
}) {
    const { categoryParam } = useParams();
    return (
        <section className="recipe-card-description">
            <h2 className="recipe-card-title">{mealName}</h2>
            <p className="recipe-card-info">Category: {mealCategory}</p>
            <p className="recipe-card-info">Area: {mealArea}</p>
            <p className="recipe-card-info">{mealTags ? mealTags : null}</p>
            <Link to={`/${categoryParam}/${mealName}`}>
                <button className="recipe-card-button">Get Recipe!</button>
            </Link>
        </section>
    );
}
