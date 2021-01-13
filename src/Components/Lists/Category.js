import React from "react";
import { Link } from "react-router-dom";

export default function Category({ list }) {
    return (
        <>
            <h2 className="lists-title">Categories</h2>
            <div className="lists-category">
                {list.map((category) => {
                    return (
                        <Link to={`/${category}`} key={category}>
                            <span className="list-btn" value={category}>
                                {category}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
