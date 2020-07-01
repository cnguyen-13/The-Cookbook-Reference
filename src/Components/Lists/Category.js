import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

export default function Category({ createEndPoint, list }) {
    function createEndPointCategory(e) {
        createEndPoint(e, "category");
    }

    return (
        <div id="category-list">
            {list.map((category) => {
                return (
                    <Link to={`/${category}`}>
                        <button
                            className="category-button"
                            onClick={createEndPointCategory}
                            value={category}
                        >
                            {category}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
}
