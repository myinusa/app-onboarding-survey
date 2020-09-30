import React, { Component } from "react";
import "./assets/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
  }


  onSubmit = () => {
    this.props.history.push("/survey");
    window.location.reload();
  };

  render() {
    return (
      <>
        <div className="startScreen-Title">Calculate your personal Score</div>
        <div className="startScreen-Desc">
          Next we have a short 2–3 minute survey covering Diet, Home, Travel,
          and Other that will let us calculate your personal carbon footprint.
        </div>
        <button className="survey-button" onClick={this.onSubmit}>
          <label className="survey-label">Take the survey</label>
        </button>
      </>
    );
  }
}
export default App;
