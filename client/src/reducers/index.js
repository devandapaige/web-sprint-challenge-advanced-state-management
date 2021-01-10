import * as actions from "../actions/index";

export const initialState = {
  smurfs: [],
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        smurfs: action.payload,
      };
    case actions.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.ADD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        smurfs: action.payload,
      };
    case actions.ADD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. ✅Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. ✅Setup your reducer to take the state and action as parameters
//3. ✅Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
