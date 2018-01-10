import axios from 'axios';

export const GET_LIST = 'GET_LIST';
export const GET_LIST_ERROR = 'GET_LIST';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_DETAILS_ERROR = 'GET_DETAILS';
export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

const BASE_URL = 'https://ghibliapi.herokuapp.com/films';

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export function startLoading() {
  return { type: START_LOADING };
}

export function endLoading() {
  return { type: END_LOADING };
}

export function setList(response) {
  return {
    type: GET_LIST,
    list: response.data
  };
}

export function onListError(error) {
  return {
    type: GET_LIST_ERROR,
    error: error
  };
}


export function getList() {
  return (dispatch, getState) => {
    const { params } = getState().movie;

    startLoading();

    axiosInstance.get('/', { params })
      .then(response => dispatch(setList(response)))
      .catch(error => {
        dispatch(onListError(error));
      })
      .then(endLoading);
  };
}

export function setDetails(response) {
  return {
    type: GET_DETAILS,
    details: response.data
  };
}

export function onDetailsError(error) {
  return {
    type: GET_DETAILS_ERROR,
    error: error
  };
}

export function getDetails(id) {

  return (dispatch, getState) => {
    startLoading();

    axiosInstance.get(`/${id}`)
      .then(response => dispatch(setDetails(response)))
      .catch(error => {
        dispatch(onDetailsError(error));
      })
      .then(endLoading);
  };
}