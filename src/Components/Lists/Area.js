import React from "react";
import { Link } from "react-router-dom";

export default function Area({ list }) {
    return (
        <>
            <h2 className="lists-title">Areas</h2>
            <div className="lists-area">
                {list.map((area) => {
                    return (
                        <Link to={`/${area}`} key={area}>
                            <span className="list-btn" value={area}>
                                {area}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
