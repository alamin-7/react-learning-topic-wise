import React, { Component } from "react";

export default class RenderMethod extends Component {

  constructor() {
    super();
    this.state = {
      email: "Bhaskar@gmail.com",
    };
  }

  render() {

    console.log("Render Method!!", this.state.email);

    return (
      <>
        <h2>Render Method!! {this.state.email}</h2>

        <button onClick={() => this.setState({ email: "Code@gmail.com" })}>
          Update State
        </button>
      </>
    );
  }
}