import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

export default function Category({ list }) {
    return (
        <div id="category-list">
            {list.map((category) => {
                return (
                    <Link to={`/${category}`} key={category}>
                        <button className="category-button" value={category}>
                            {category}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
}
