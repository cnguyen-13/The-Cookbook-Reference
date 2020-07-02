import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

export default function Area({ list }) {
    return (
        <div id="area-list">
            {list.map((area) => {
                return (
                    <Link to={`/${area}`} key={area}>
                        <button className="area-button" value={area}>
                            {area}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
}
