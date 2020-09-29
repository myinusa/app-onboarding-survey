import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestionsSuccess } from "../../store/actions/questions";
import "../../assets/app.scss";
// import "../assets/app.scss";

// import Question from "./components/Question";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { questions } = this.props;
    console.log(questions);
    return (
      <>
       
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
});

export default connect(mapStateToProps)(App);
