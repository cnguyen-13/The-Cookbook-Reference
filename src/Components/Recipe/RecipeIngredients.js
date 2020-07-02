import React from "react";

export default function RecipeIngredients({ ingredients, src, alt }) {
    return (
        <section className="recipe-page-ingredients">
            <h3 className="recipe-page-ingredients-title">Ingredients</h3>
            <ul className="recipe-page-ingredients-list">{ingredients}</ul>
            <img
                className="recipe-page-ingredients-image"
                src={src}
                alt={alt}
            />
        </section>
    );
}
