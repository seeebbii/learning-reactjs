import React, { Component } from "react";

import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = { displayBio: false };

  //   //! BINDING THE METHODS
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  state = { displayBio: false };

  //! METHOD FOR TOGGLING READ MORE BUTTON
  toggleDisplayBio = () => {
    console.log("TOGGLING");
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    // ! CHECKS CAN BE WRITTEN WITHIN THE RENDER METHO

    let bio = (
      <div>
        <p>I live in Lahore, Pakistan</p>
        <p>Im currently working as a Full Stack Flutter Developer</p>
        <button onClick={this.toggleDisplayBio}>Show Less</button>
      </div>
    );

    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Haseeb Zafar. Im a Flutter Developer</p>
        <p>Im always working on cool projects</p>

        {this.state.displayBio ? (
          bio
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio} type="button">
              Read More
            </button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
