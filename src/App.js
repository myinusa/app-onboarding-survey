import React, { Component } from "react";
// import './App.css';
// import Question from "./components/Question";
import Button from "react-bootstrap/Button";
// import "./assets/start-screen.css";
import "./assets/app.scss"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.renderQuiz = this.renderQuiz(this);
    // this.triggerState = this.triggerState(this);
  }

  // handleOnClickNextPage() {
  //   setTimeout(() => this.setNextQuestion(), 300);
  // }

  handleOnClickFirstPage() {
    // setTimeout(() => this.setNextQuestion(), 300);
    // return
  }

  // triggerState() {
  //   this.setState({ showComponent: true });
  // }

  renderQuiz() {
    return <h1>Text</h1>;
  }

  onSubmit = () => {
    // return <Redirect to="/quiz" />;
    this.props.history.push("/survey");
  };

  render() {
    return (
      <>
        <div className="startScreen-Title">Calculate your personal Score</div>
        <div className="startScreen-Desc">
          Next we have a short 2–3 minute survey covering Diet, Home, Travel,
          and Other that will let us calculate your personal carbon footprint.
        </div>
        <Button className="survey-button" onClick={this.onSubmit}>
          <label className="survey-label">Take the survey</label>
          {/* {this.state.showComponent ? this.renderQuiz() : <div />} */}
        </Button>
      </>
    );
  }
}
export default App;
