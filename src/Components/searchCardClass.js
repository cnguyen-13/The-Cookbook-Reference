import React from "react";
class SearchCardImage extends React.Component {
    render() {
        return (
            <img
                className="search-card-image"
                src={this.props.src}
                alt={this.props.alt}
            />
        );
    }
}

class SearchCardDescription extends React.Component {
    render() {
        return (
            <section className="search-card-description">
                <h2 className="search-card-title">{this.props.mealName}</h2>
                <p className="search-card-info">
                    Category: {this.props.mealCategory}
                </p>
                <p className="search-card-info">Area: {this.props.mealArea}</p>
                <p className="search-card-info">
                    {this.props.mealTags ? this.props.mealTags : "No Tags"}
                </p>
                <button
                    className="search-card-button"
                    onClick={this.props.onClick}
                >
                    Get Recipe!
                </button>
            </section>
        );
    }
}

//The cards search results show as.
export class SearchCard extends React.Component {
    render() {
        const meal = this.props.meal;
        return (
            <div className="search-card">
                <SearchCardImage
                    src={this.props.meal.strMealThumb}
                    alt={this.props.meal.strMeal}
                />
                <SearchCardDescription
                    mealName={this.props.meal.strMeal}
                    mealCategory={this.props.meal.strCategory}
                    mealArea={this.props.meal.strArea}
                    mealTags={
                        this.props.meal.strTags
                            ? this.props.meal.strTags
                            : "No Tags"
                    }
                    onClick={() => this.props.onClickFunc(meal)}
                />
            </div>
        );
    }
}
