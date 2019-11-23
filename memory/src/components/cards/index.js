import React from "react";
import "./card.css";

const Card = props => {
    return(
        <div className="card" onClick={(event) => {props.randomizer(); props.score(props.id);}}>
            <div className="imageframe">
                {/* Image elements get rendered here, and linter requires alt text*/}
                <img src={props.image} alt="Happy Linter" />
            </div>
        </div>
    );
};

export default Card;