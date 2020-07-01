import React from "react";

export default function RecipeInstructions({ instructions }) {
    return (
        <section className="recipe-card-instructions">
            <div>
                <h3 className="recipe-card-instructions-title">Instructions</h3>
                <ol className="recipe-card-instructions-list">
                    {instructions}
                </ol>
            </div>
        </section>
    );
}
