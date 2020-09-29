import React, { Component } from "react";
import "../assets/app.scss";
// import "../assets/app.scss";

// import Question from "./components/Question";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="header-score">
          <h2>Diet</h2>
          <p>Your score</p>
        </div>
        <div className="footer-score">
          <p>Lets take a look at how you look in the Home category...</p>
        </div>
        <button className="survey-button-continue">
          <label className="survey-label">Continue</label>
        </button>
      </>
    );
  }
}
export default Result;
