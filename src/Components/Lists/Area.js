import React, { useState, useEffect } from "react";

export default function Area({ createEndPoint }) {
    const [areaList, setAreaList] = useState([]);

    useEffect(() => {
        async function getAreaList() {
            const res = await fetch(
                "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
            );
            const data = await res.json();
            const areaList = data.meals.map((object) => {
                return object.strArea;
            });
            setAreaList(areaList);
        }

        getAreaList();
    }, []);

    function createEndPointArea(e) {
        createEndPoint(e, "area");
    }

    return (
        <div id="area-list">
            {areaList.map((area) => {
                return (
                    <button
                        className="area-button"
                        onClick={createEndPointArea}
                        value={area}
                    >
                        {area}
                    </button>
                );
            })}
        </div>
    );
}
