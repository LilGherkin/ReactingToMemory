import React from "react";
import "./card.css";
//Card takes in properties from parent and then shoots out the following
const Card = props => {
    return(
        //Div with a class of card with 2 on click events. The randomizer that reshuffles cards, and the score counter.
        <div className="card" onClick={ (event) => {props.randomizer(); props.score(props.id);}}>
            <div className="imageframe">
                {/* Image elements get rendered here, and linter requires alt text*/}
                <img alt="Happy Linter" src={props.image} />
            </div>
        </div>
    );
};

export default Card;