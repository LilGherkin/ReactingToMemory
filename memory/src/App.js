//Call in everything we need.
import React, {Component} from 'react';
import Header from "./components/header";
import Bigbox from "./components/bigbox";
import Card from "./components/cards";
import pictures from "./pictures.json";

//Define a class that extends to all compoents in which it is called.
class App extends Component {
  state = {
    pictures: pictures,
    score: 0,
    highscore: 0,
    message: "",
    tracker: []
  };
  // Creates a randomizer function that activates when an image is clicked.
  randomizer = () => {
    let pictures = this.state.pictures;
    //For ease of calling.
    let i = pictures.length;
    //A real value
    let value;
    //Container value
    let RandomizedIndex;
    //A while loop that breaks once i === 0. 
    while (0 !== i) {
      RandomizedIndex = Math.floor(Math.random() * i);
      //Decrement index to eventually break while loop.
      i -= 1;
      //Set value equal to pictures at the index length;
      value = pictures[i];
      //
      pictures[i] = pictures[RandomizedIndex];
      pictures[RandomizedIndex] = value;
    }
    this.setState({pictures: pictures})
  };

  score = (id) => {
    if (this.state.tracker.includes(id)) {
      this.setState({
        score: 0,
        message: "Incorrect",
        tracker: []
      });
    } else {
      let value = this.state.tracker;
      let highscore = this.state.highscore > this.state.score ? this.state.highscore : this.state.highscore + 1;
      value.push(id);
      this.setState({
        score: this.state.score + 1,
        highscore: highscore,
        message: "Correct",
        tracker: value
      });
    }
  };

  render(){
    return(
      <div>
        <Header
          message={this.state.message}
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Bigbox>
          {/* Set the cards to have the requested components. Maps from every image*/}
          {this.state.pictures.map(image => (
            <Card
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              randomizer={this.randomizer}
              score={this.score}
            />
          ))}
        </Bigbox>
      </div>
    );
  }
};

export default App;
