import {
  FETCH_QUESTIONS,
  FETCH_QUESTIONS_FAILURE,
  FETCH_QUESTIONS_SUCCESS,
} from "../actions/types";

const API = "http://localhost:4001/questions";

export const fetchQuestionsBegin = () => ({
  type: FETCH_QUESTIONS,
});

export const fetchQuestionsSuccess = (questions) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  questions,
});

export const fetchQuestionsFailure = (error) => ({
  type: FETCH_QUESTIONS_FAILURE,
  payload: { error },
});

export function fetchQuestions() {
  return (dispatch) => {
    dispatch(fetchQuestionsBegin());
    fetch(API)
      .then((response) => {
        dispatch(fetchQuestionsSuccess(response));
        return response;
      })
      .catch((error) => dispatch(fetchQuestionsFailure(error)));
  };
}
