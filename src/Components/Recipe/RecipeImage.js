import React from "react";

export default function RecipeImage({ src, alt }) {
    return (
        <img className="recipe-page-ingredients-image" src={src} alt={alt} />
    );
}
