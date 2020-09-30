import React, { Component } from "react";
import "../assets/app.scss";

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
        <div className="middle-score">
          <div className="middle-score-top">
            <p>
              <b>UK National average</b>: 2.9 Tons of CO2 produced per year
            </p>
            <div className="middle-score-progress-bar-background"></div>
            <div className="middle-score-progress-bar-middle"></div>
            <div className="middle-score-result">
              <p>Your using 3.2 Tons of CO2 / year</p>
            </div>
          </div>
        </div>

        <div className="footer-score">
          <p>
            Lets take a look at how you look in the{" "}
            <i className="footer-score-italics">Home</i> category...
          </p>
        </div>
        <button
          className="survey-button-continue-result"
        >
          <label className="survey-label">Continue</label>
        </button>
      </>
    );
  }
}
export default Result;
