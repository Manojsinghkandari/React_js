import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Ajay Sharma",
    };
  }

  // Mounting Phase
  componentDidMount() {
    console.log("Mounting Phase");
  }

  // Updation Phase
  shouldComponentUpdate() {
    // Optional
    return true;
  }

  componentDidUpdate() {
    console.log("Updation Phase");
  }

  // UnMounting Phase
  componentWillUnmount() {
    console.log("UnMounting Phase");
  }

  render() {
    return (
      <div>
        <h1>I am Class Comp.</h1>
        <h2>My Name is {this.state.fullName}</h2>
        <p>{this.props.msg}</p>
        <button
          onClick={() => {
            console.log("Button is Clicked");
            this.setState({ fullName: "Manoj" });
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default ClassComponent;

// In Order to Make JS Class Into Comp. Inherit Your Class With React.Component Class

/**
 *
 * State, Props, Event Handling, LifeCycle
 *
 */
