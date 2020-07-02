import React from "react";
import { Link } from "react-router-dom";

export default function Area({ list }) {
    return (
        <div className="lists-area">
            {list.map((area) => {
                return (
                    <Link to={`/${area}`} key={area}>
                        <button className="list-btn" value={area}>
                            {area}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
}
