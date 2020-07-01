import React from "react";

export default function RecipeIngredients({ ingredients, src, alt }) {
    return (
        <section className="recipe-card-ingredients">
            <h3 className="recipe-card-ingredients-title">Ingredients</h3>
            <ul className="recipe-card-ingredients-list">{ingredients}</ul>
            <img
                className="recipe-card-ingredients-image"
                src={src}
                alt={alt}
            />
        </section>
    );
}
