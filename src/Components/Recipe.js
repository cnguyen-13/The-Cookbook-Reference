import React, { useState, useEffect } from "react";

export default function Recipe({ meal }) {
    const [ingredList, setIngredList] = useState(null);
    const [instructionList, setInstructionList] = useState(null);
    console.log(meal);
    useEffect(() => {
        function createIngredList() {
            //Creates ingred list
            const propertyBase = "strIngredient";
            let ingredNum = 1;
            const listOfIngreds = [];
            while (!meal[`${propertyBase + ingredNum}`]) {
                //null CHECK FOR NULL INIFINITE LOOP
                listOfIngreds.push([
                    meal[`strMeasure${ingredNum}`],
                    meal[`${propertyBase + ingredNum}`],
                ]);
                ingredNum++;
            }

            const ingredList = listOfIngreds.map((pair) => {
                //Each pair is a measurement, ingred pair ex. ['100mL', 'water']
                return <li key={pair[1]}>{`${pair[0]} - ${pair[1]}`}</li>;
            });
            setIngredList(ingredList);
        }

        function parseInstructions() {
            //Creates instructionList
            const steps = meal["strInstructions"].split(".");
            steps.pop();
            const instructionList = steps.map((step) => {
                return <li key={step}>{step}.</li>;
            });
            setInstructionList(instructionList);
        }
        createIngredList();
        parseInstructions();
    }, []);

    return (
        <div className="recipe-card">
            <section className="recipe-card-details">
                <h2 className="recipe-card-title">{meal.strMeal}</h2>
                <small>
                    {meal.strArea}, {meal.strCategory}
                </small>
            </section>

            <section className="recipe-card-ingredients">
                <div>
                    <h3 className="recipe-card-ingredients-title">
                        Ingredients
                    </h3>
                    <ul className="recipe-card-ingredients-list">
                        {ingredList}
                    </ul>
                    <img
                        className="recipe-card-ingredients-image"
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                    />
                </div>
            </section>

            <section className="recipe-card-instructions">
                <div>
                    <h3 className="recipe-card-instructions-title">
                        Instructions
                    </h3>
                    <ol className="recipe-card-instructions-list">
                        {instructionList}
                    </ol>
                </div>
            </section>
        </div>
    );
}

// export default class Recipe extends React.Component {
//     constructor(props) {
//         super(props);
//         this.ingredList = null;
//         this.instructionList = null;
//         this.createIngredList = this.createIngredList.bind(this);
//         this.parseInstructions = this.parseInstructions.bind(this);
//         this.createIngredList();
//         this.parseInstructions();
//     }

//     createIngredList() {
//         //Creates ingred list
//         const propertyBase = "strIngredient";
//         let ingredNum = 1;
//         const listOfIngreds = [];
//         while (this.props.meal[`${propertyBase + ingredNum}`] !== "") {
//             listOfIngreds.push([
//                 this.props.meal[`strMeasure${ingredNum}`],
//                 this.props.meal[`${propertyBase + ingredNum}`],
//             ]);
//             ingredNum++;
//         }

//         this.ingredList = listOfIngreds.map((pair) => {
//             //Each pair is a measurement, ingred pair ex. ['100mL', 'water']
//             return <li key={pair[1]}>{`${pair[0]} - ${pair[1]}`}</li>;
//         });
//     }

//     parseInstructions() {
//         //Creates instructionList
//         const steps = this.props.meal["strInstructions"].split(".");
//         steps.pop();
//         this.instructionList = steps.map((step) => {
//             return <li key={step}>{step}.</li>;
//         });
//     }

//     render() {
//         return (
//             <div className="recipe-card">
//                 <section className="recipe-card-details">
//                     <h2 className="recipe-card-title">
//                         {this.props.meal.strMeal}
//                     </h2>
//                     <small>
//                         {this.props.meal.strArea}, {this.props.meal.strCategory}
//                     </small>
//                 </section>

//                 <section className="recipe-card-ingredients">
//                     <div>
//                         <h3 className="recipe-card-ingredients-title">
//                             Ingredients
//                         </h3>
//                         <ul className="recipe-card-ingredients-list">
//                             {this.ingredList}
//                         </ul>
//                         <img
//                             className="recipe-card-ingredients-image"
//                             src={this.props.meal.strMealThumb}
//                             alt={this.props.meal.strMeal}
//                         />
//                     </div>
//                 </section>

//                 <section className="recipe-card-instructions">
//                     <div>
//                         <h3 className="recipe-card-instructions-title">
//                             Instructions
//                         </h3>
//                         <ol className="recipe-card-instructions-list">
//                             {this.instructionList}
//                         </ol>
//                     </div>
//                 </section>
//             </div>
//         );
//     }
// }
