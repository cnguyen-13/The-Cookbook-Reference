import React from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <header className="top-bar">
            <Link exact to="/">
                <p className="top-bar-initials">TCR</p>
            </Link>
            <h1 className="top-bar-title">The Cookbook Reference</h1>
        </header>
    );
}
