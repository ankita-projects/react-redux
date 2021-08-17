import * as actionTypes from "../actions/actions";

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.RESET:
      return { ...initialState };
    case actionTypes.ADD:
      return { ...state, counter: state.counter + 5 };
    case actionTypes.REMOVE:
      return { ...state, counter: state.counter - 5 };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: [...state.results, { id: new Date(), value: state.counter }],
      };
    case actionTypes.DELETE:
      return {
        ...state,
        results: state.results.filter((result) => result.id !== action.payload),
      };
  }
  return state;
};

const initialState = {
	counter: 0,
	results: [
		{
			id: 1,
			value: 10,
		},
		{
			id: 2,
			value: 100,
		},
		{
			id: 3,
			value: 1000,
		},
	],
};

export default reducers;
