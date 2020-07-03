import React from "react";
import Area from "./Area";
import Category from "./Category";

export default function Lists({ categoryList, areaList }) {
    return (
        <div className="lists">
            <h2 className="lists-title">Areas & Categories</h2>
            <Area list={areaList} />
            <Category list={categoryList} />
        </div>
    );
}
