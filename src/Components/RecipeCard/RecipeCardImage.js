import React from "react";

export default function RecipeCardImage({ src, alt }) {
    return <img className="recipe-card-image" src={src} alt={alt} />;
}
