import React from "react";
export default function RecipeCardDescription({
    mealName,
    mealCategory,
    mealArea,
    mealTags,
    onClickFunc,
}) {
    return (
        <section className="search-card-description">
            <h2 className="search-card-title">{mealName}</h2>
            <p className="search-card-info">Category: {mealCategory}</p>
            <p className="search-card-info">Area: {mealArea}</p>
            <p className="search-card-info">
                {mealTags ? mealTags : "No Tags"}
            </p>
            <button className="search-card-button" onClick={onClickFunc}>
                Get Recipe!
            </button>
        </section>
    );
}
// class SearchCardDescription extends React.Component {
//     render() {
//         return (
//             <section className="search-card-description">
//                 <h2 className="search-card-title">{this.props.mealName}</h2>
//                 <p className="search-card-info">
//                     Category: {this.props.mealCategory}
//                 </p>
//                 <p className="search-card-info">Area: {this.props.mealArea}</p>
//                 <p className="search-card-info">
//                     {this.props.mealTags ? this.props.mealTags : "No Tags"}
//                 </p>
//                 <button
//                     className="search-card-button"
//                     onClick={this.props.onClick}
//                 >
//                     Get Recipe!
//                 </button>
//             </section>
//         );
//     }
// }
