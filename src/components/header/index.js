import React from "react";
import "./header.css";

//Make a header with properties
const Header = props => {
    return (
        //Bootstrap components to define everything.
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <div className="col-12">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="section1">Cartoon Clicker</h3>
                    </div>
                    {/*
                    If props.message indicates that you guessed correctly it sets the class to our Success class, or our Failure class.
                    */}
                    <div className="col-md-4">
                        <h2 className={props.message ==="Correct" ? "section2 Success" : "section2 Failure"}>{props.message}</h2>
                    </div>
                    <div className="col-md-4">
                        <h2 className="section3">Score: {props.score} </h2>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;