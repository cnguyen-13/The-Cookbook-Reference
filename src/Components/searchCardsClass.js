import React from 'react';

//The cards search results show as.
export class SearchCards extends React.Component {
    render() {
        const meal = this.props.meal;
        return (
            <div className="info-card">
                <img className="info-card-image" src={this.props.meal.strMealThumb} alt={this.props.meal.strMeal} />
                <section className="info-card-description">
                    <h2 className="info-card-title">{this.props.meal.strMeal}</h2>
                    <p className="info-card-category">Category: {this.props.meal.strCategory}</p>
                    <p className="info-card-area">Area: {this.props.meal.strArea}</p>
                    <p className="info-card-tags">Tags: {this.props.meal.strTags ? this.props.meal.strTags : 'None'}</p>
                    <button className="info-card-button" onClick={() => this.props.onClickFunc(meal)}>Get Recipe!</button>
                </section>
            </div>
        );
    }
}
