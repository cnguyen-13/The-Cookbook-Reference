import React from "react";

export default function WelcomeMessage() {
    return (
        <div className="welcome-bg">
            <p className="welcome-title">Welcome to The Cookbook Reference!</p>
            <p className="welcome-title-intro">
                Begin by clicking on any button in the areas or categories
                section.
            </p>
            <p className="welcome-title-intro">
                A list of recipes will appear and you may select any recipe by
                clicking the "Get Recipe!" button.
            </p>
        </div>
    );
}
