import {
  FETCH_QUESTIONS,
  FETCH_QUESTIONS_FAILURE,
  FETCH_QUESTIONS_SUCCESS,
} from "../actions/types";

const initialState = {
  questions: [],
  loading: false,
  error: null,
};

export default function storeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        stores: action.questions,
      };

    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
