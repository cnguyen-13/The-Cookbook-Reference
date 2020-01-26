import React from 'react';

class Area extends React.Component {
    render() {
        return (
            <div id="area-list">
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="American">American</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="British">British</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Canadian">Canadian</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Chinese">Chinese</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Dutch">Dutch</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Egyptian">Egyptian</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="French">French</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Greek">Greek</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Indian">Indian</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Irish">Irish</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Italian">Italian</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Jamaican">Jamaican</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Japanese">Japanese</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Kenyan">Kenyan</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Malaysian">Malaysian</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Mexican">Mexican</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Moroccan">Moroccan</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Russian">Russian</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Spanish">Spanish</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Thai">Thai</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Tunisian">Tunisian</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Turkish">Turkish</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Unknown">Unknown</button>
                <button className="area-button" onClick={(e) => this.props.getData(e, 'area')} value="Vietnamese">Vietnamese</button>
	        </div>
        );
    }
}

class Categories extends React.Component {
    render() {
        return (
            <div id="category-list">
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Beef">Beef</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Breakfast">Breakfast</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Chicken">Chicken</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Dessert">Dessert</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Goat">Goat</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Lamb">Lamb</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Miscellaneous">Miscellaneous</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Pasta">Pasta</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Pork">Pork</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Seafood">Seafood</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Side">Side</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Starter">Starter</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Vegan">Vegan</button>
                <button className="category-button" onClick={(e) => this.props.getData(e, 'cat')} value="Vegetarian">Vegetarian</button>
	        </div>
        )
    }
}

export class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {screen: null};
    }

    render() {
        return (
            <header>
                <h1>The Cookbook Reference <span className="initials">TCR</span></h1>
                <Area getData={this.props.getData} />
                <Categories getData={this.props.getData} />
            </header>
        );
    }
};
