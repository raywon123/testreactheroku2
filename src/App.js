import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import emoji from "./emoji.json";
import "./App.css";

// emoji - for rendering
// emoji2 - for keeping score
let emoji2 = Array.from(emoji);

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {

  // emoji - for rendering
  // emoji2 - for keeping score

  state = {
    emoji,
    emoji2,
    point: 0,
    highPoint: 0,
    message: ""
  };


  addPoint = id => {

    // check to see if the id is in the array
    const array = this.state.emoji2.filter(e => e.id === id);
    console.log(array);

    if (array.length === 0) {
      // match not found
      console.log("game over");

      // reset the score
      const point = 0;
      this.setState({ point });

      // reset emoji2 array
      const emoji2 = Array.from(this.state.emoji);
      this.setState({ emoji2 });

      const message = "~~~~ Game Over !!! ~~~~";
      this.setState({ message });
    }
    else {
      // match found
      // remove the match object from array
      const emoji2 = this.state.emoji2.filter(emoji => emoji.id !== id);
      console.log(emoji2);
      this.setState({ emoji2 });

      // adding score
      const point = this.state.point + 1;
      this.setState({ point });

      // saving the highest point
      if (point >= this.state.highPoint) {
        const highPoint = point;
        this.setState({ highPoint });
      }

      // define the message
      const message = "~~~~ Keep going ~~~~~ ";
      this.setState({ message });
    }

  };


  render() {
    const shuffledPosts = shuffleArray(this.state.emoji);
    return (
      <Wrapper>
        <Title message={this.state.message} point={this.state.point} highPoint={this.state.highPoint}>Clicky Game!</Title>
        <div className="row">
          <div className="col-lg-12">
            {shuffledPosts.map(emoji => (
              <FriendCard
                addPoint={this.addPoint}
                id={emoji.id}
                key={emoji.id}
                name={emoji.name}
                image={emoji.image}
              />

            ))}
          </div>
        </div>


      </Wrapper>
    );
  }
}



export default App;
