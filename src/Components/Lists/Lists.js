import React from "react";
import Area from "./Area";
import Category from "./Category";

export default function Lists({ categoryList, areaList }) {
    return (
        <div className="lists">
            <Area list={areaList} />
            <Category list={categoryList} />
        </div>
    );
}
