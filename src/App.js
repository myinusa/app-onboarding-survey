import React, { Component } from "react";
// import './App.css';
// import Question from "./components/Question";
import "./assets/start-screen.css";

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
    this.props.history.push("/quiz");
  };

  render() {
    return (
      <>
        <div className="startScreen-Title">Calculate your personal Score</div>
        <div className="startScreen-Desc">
          Next we have a short 2–3 minute survey covering Diet, Home, Travel,
          and Other that will let us calculate your personal carbon footprint.
        </div>
        <button className="btn-label-bk" onClick={this.onSubmit}>
          <div>Take the survey</div>
          {/* {this.state.showComponent ? this.renderQuiz() : <div />} */}
        </button>
      </>
    );
  }
}
export default App;
