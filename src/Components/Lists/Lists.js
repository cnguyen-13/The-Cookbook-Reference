import React from "react";
import Area from "./Area";
import Category from "./Category";

export default function Lists({ createEndPoint, categoryList, areaList }) {
    return (
        <div>
            <Area createEndPoint={createEndPoint} list={areaList} />
            <Category createEndPoint={createEndPoint} list={categoryList} />
        </div>
    );
}
