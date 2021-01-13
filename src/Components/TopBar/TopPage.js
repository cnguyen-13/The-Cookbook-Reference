import React from "react";
import { Link } from "react-router-dom";

export default function TopPage() {
    return (
        <div className="top-page">
            <Link exact to="/">
                <p className="top-page-initials">TCR</p>
            </Link>
            <h1 className="top-page-title">The Cookbook Reference</h1>
            <p className="top-page-description">
                Welcome to the Cookbook Reference! Here you can find delicious
                recipes from around the world. Hope you can find a new recipe or
                two that you can enjoy! Start by picking a region or a category
                to get a list of available recipes!
            </p>
        </div>
    );
}
