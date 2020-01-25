import React from 'react';

//The cards search results show as.
export class SearchCards extends React.Component {
    render() {
        return (
            <div className="info-card">
                <img src={this.props.imgSrc} alt={this.props.mealTitle} width="200" height="200"/>
                <section className="info-card-description">
                    <h2 className="info-card-title">{this.props.mealTitle}</h2>
                    <p className="info-card-category">Category: {this.props.category}</p>
                    <p className="info-card-area">Area: {this.props.area}</p>
                    <p className="info-card-tags">Tags: {this.props.tags ? this.props.tags : 'None'}</p>
                    <button className="info-card-button">Get Recipe!</button>
                </section>
            </div>
        );
    }
}