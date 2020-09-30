import React, { Component } from "react";
import "../assets/app.scss";

// Define the address we'll be using to fetch data
const API = "http://localhost:4001/questions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      isLoading: false,
      question: "",
      questionId: 1,
      questions: [{ id: 0, answers: [] }],
      error: null,
      counter: 0,
      answerOptions: [],
      answer: "",
      result: "",
    };
    this.setNextQuestion = this.setNextQuestion.bind(this);
  }

  // Getting data via fetch method and setting state with map
  async componentDidMount() {
    this.setState({ isLoading: true });
    await fetch(API)
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          loading: false,
          questions: res.map((data) => ({
            id: data.id,
            title: data.question,
            answers: data.answers,
          })),
        });
      })
      .catch((error) => this.setState({ error }));
    this.setQuestion();
  }

  async setQuestion() {
    await this.setState({
      question: this.state.questions[0].title,
      answerOptions: this.state.questions[0].answers,
    });
  }

  handleAnswerSelected(event) {
    if (this.state.questionId < this.state.questions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      this.props.history.push("/result");
      // setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    // if (this.state.questions[counter].id === undefined) {
    //   this.props.history.push("/result");
    // }
    const questionId = this.state.questions[counter].id;

    // TODO It throws an error after the 4th Question so its limited to 3 for now
    if (counter === 4 || questionId === 4) {
      // this.setState({ questions: [0].id });
      this.props.history.push("/result");
    }
    // console.log(questionId);

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.questions[counter].title,
      answerOptions: this.state.questions[counter].answers,
      answer: "",
    });
  }

  render() {
    return (
      <>
        <div className="progress-bar">
          <div className="progress-bar-25" />
          <p>Diet</p>
        </div>
        <br></br>
        <div className="questionNumber">
          Question {this.state.questionId} of {this.state.questions.length}
        </div>
        <div className="questionText">{this.state.question}</div>
        <div className="questionOptions">
          <button>{this.state.answerOptions[0]}</button>
          <button>{this.state.answerOptions[1]}</button>
        </div>
        <div className="questionOptions">
          <button>{this.state.answerOptions[2]}</button>
          <button>{this.state.answerOptions[3]}</button>
        </div>
        <button
          className="survey-button"
          onClick={
            this.state.questions.length
              ? this.setNextQuestion
              : this.props.history.push("/result")
          }
        >
          <label className="survey-label">Next question</label>
        </button>
      </>
    );
  }
}
export default App;

