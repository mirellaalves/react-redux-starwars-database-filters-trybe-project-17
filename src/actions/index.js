import { getStarWarsPlanetsData } from '../services/starwarsAPI';

export const REQUEST_STARWARS = 'REQUEST_STARWARS';
export const RECEIVE_STARWARS_SUCCESS = 'RECEIVE_STARWARS_SUCCESS';
export const RECEIVE_STARWARS_FAILURE = 'RECEIVE_STARWARS_FAILURE';

const requestStarWars = () => ({
  type: REQUEST_STARWARS,
});

const receiveStarWarsSuccess = (data) => ({
  type: RECEIVE_STARWARS_SUCCESS,
  data,
});

const receiveStarWarsFailure = (error) => ({
  type: RECEIVE_STARWARS_FAILURE,
  error,
});

export function fetchStarWars() {
  return (dispatch) => {
    dispatch(requestStarWars());

    return getStarWarsPlanetsData()
      .then(
        (data) => dispatch(receiveStarWarsSuccess(data)),
        (error) => dispatch(receiveStarWarsFailure(error.message)),
      );
  };
}