import React, { Component } from "react";
import "../assets/app.scss";
// import "../assets/app.scss";

// import Question from "./components/Question";

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
      answersCount: {},
      result: "",
    };
  }

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
    // console.log(Object.keys(this.state.questions));
    // let i = 0;
    // i += 1;
    // console.log(this.state.questions[i]);
    this.setQuestion();
  }

  async setQuestion() {
    // const mappedAnswers = this.state.questions[0].answers;
    await this.setState({
      question: this.state.questions[0].title,
      answerOptions: this.state.questions[0].answers,
    });
    // console.log(this.state.answerOptions);
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < this.state.questions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    // const questionId = this.state.questionId + 1;
    let i = 0;
    const questionId = this.state.questions[i].id + 1;

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
        {/* <div className="questionProgress"></div> */}
        <div className="progress-bar">
          <div className="progress-bar-25" />
          <p>Diet</p>
        </div>
        <br></br>
        <div className="questionNumber">
          Question {this.state.questions[0].id} of {this.state.questions.length}
        </div>
        <div className="questionText">{this.state.questions[0].title}</div>
        <div className="questionOptions">
          <button>{this.state.questions[0].answers[0]}</button>
          <button>{this.state.questions[0].answers[1]}</button>
        </div>
        <div className="questionOptions">
          <button>{this.state.questions[0].answers[2]}</button>
          <button>{this.state.questions[0].answers[3]}</button>
        </div>
        <button className="survey-button">
          <label className="survey-label">Next question</label>
        </button>
        {/* <h1>Quiz</h1> */}
        {/* {this.state.result ? this.renderResult() : this.renderQuiz()} */}
      </>
    );
  }
}
export default App;
