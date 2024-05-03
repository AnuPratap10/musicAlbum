import axios from "axios";
import {
  GET_WATCH_FAILURE,
  GET_WATCH_REQUEST,
  GET_WATCH_SUCCESS,
} from "./actionType";

export const getWatchData = (params) => (dispatch) => {
  dispatch({type: GET_WATCH_REQUEST});
  return axios
    .get("http://localhost:8000/watches",params)
    .then((res) => {
      return dispatch({type: GET_WATCH_SUCCESS, payload: res.data});
    })
    .catch((err) => {
      return dispatch({type: GET_WATCH_FAILURE, err});
    });
};
