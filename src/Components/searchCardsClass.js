//'https://www.themealdb.com/api/json/v1/1/search.php?s=' search by Name
import React from 'react';

export class SearchCards extends React.Component {
    render() {
        return (
            <div className="info-card">
                <img src={this.props.imgSrc} alt={this.props.mealTitle} />
                <section className="info-card-description">
                    <h2 className="info-card-title">{this.props.mealTitle}</h2>
                    <p>Category: {this.props.category}</p>
                    <p>Area: {this.props.area}</p>
                    <p>Tags: {this.props.tags}</p>
                </section>
            </div>
        );
    }
}