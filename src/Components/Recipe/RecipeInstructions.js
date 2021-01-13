import React from "react";

export default function RecipeInstructions({ instructions }) {
    return (
        <section className="recipe-page-instructions">
            <h3 className="recipe-page-instructions-title">Instructions</h3>
            <ol className="recipe-page-instructions-list">{instructions}</ol>
        </section>
    );
}
