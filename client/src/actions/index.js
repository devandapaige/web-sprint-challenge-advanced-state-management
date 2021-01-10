import axios from "axios";
export const FETCH_LIST_LOADING = "FETCH_LIST_LOADING";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIST_ERROR = "FETCH_LIST_ERROR";
export const ADD_LOADING = "ADD_LOADING";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";
export const FORM_ERROR = "FORM_ERROR";

export const fetchListLoading = () => {
  return {
    type: FETCH_LIST_LOADING,
    loading: true,
  };
};
export const fetchListSuccess = (smurfList) => {
  return {
    type: FETCH_LIST_SUCCESS,
    payload: smurfList,
    loading: false,
  };
};
export const fetchListError = (error) => {
  return {
    type: FETCH_LIST_ERROR,
    payload: error,
    loading: false,
  };
};
export const addLoading = () => {
  return {
    type: ADD_LOADING,
    loading: true,
  };
};
export const addSuccess = (smurfList) => {
  return {
    type: ADD_SUCCESS,
    payload: smurfList,
    loading: false,
  };
};
export const addError = (error) => {
  return {
    type: ADD_ERROR,
    payload: error,
    loading: false,
  };
};
export const formError = (error) => {
  return {
    type: FORM_ERROR,
    loading: false,
    payload: error,
  };
};

export const fetchSmurfs = () => (dispatch) => {
  dispatch(fetchListLoading);
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const addSmurf = (newSmurf) => (dispatch) => {
  console.log("New Smurf getting added", newSmurf);
  dispatch(addLoading);
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      console.log(res.data);
      dispatch(addSuccess(res.data));
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(addError(err.message));
    });
};
//Task List:
//1. ✅ Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. ✅ Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. ✅Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem necessary to complete application.
