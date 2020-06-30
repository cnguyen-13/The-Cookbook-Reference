import React from "react";
import Area from "./Area";
import Category from "./Category";

export default function Lists({ createEndPoint }) {
    return (
        <div>
            <Area createEndPoint={createEndPoint} />
            <Category createEndPoint={createEndPoint} />
        </div>
    );
}
