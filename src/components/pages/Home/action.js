import { SERVICES } from '../../../configs';
import { ACTIONS } from '../../../constants';
import fetch from '../../../utils/fetch';

export function getFilms(params) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_POKEMON,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      params
    };

    return fetch(options)
      .then(res => {
        dispatch(setPokemon(res.results));
        dispatch(setNext(res.next));
        dispatch(setPrev(res.previous));
      })
      .catch(() => {
        dispatch(setPokemon({
          data: [],
          meta: { totalData: 0 }
        }));
      });
  };
}

export function setPokemon(dataPokemon) {
  return {
    type: ACTIONS.ADD_POKEMON,
    dataPokemon,
  };
}

export function setNext(next) {
  return {
    type: ACTIONS.ADD_NEXT_POKEMON,
    next,
  };
}

export function setPrev(previous) {
  return {
    type: ACTIONS.ADD_PREV_POKEMON,
    previous,
  };
}
