import React, { useState, useEffect } from "react";

export default function Category({ createEndPoint }) {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        async function getCategoryList() {
            const res = await fetch(
                "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
            );
            const data = await res.json();
            const categoryList = data.meals.map((object) => {
                return object.strCategory;
            });
            setCategoryList(categoryList);
        }

        getCategoryList();
    }, []);

    function createEndPointCategory(e) {
        createEndPoint(e, "category");
    }

    return (
        <div id="category-list">
            {categoryList.map((category) => {
                return (
                    <button
                        className="category-button"
                        onClick={createEndPointCategory}
                        value={category}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
}
