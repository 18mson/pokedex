import { SERVICES } from '../../../configs';
import { ACTIONS } from '../../../constants';
import fetch from '../../../utils/fetch';

export function getDetail(id) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_DETAIL_POKEMON(id),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    
    dispatch(loadingAction()); 
    return fetch(options)
      .then(res => {
        dispatch(setDetailPokemon(res));
        dispatch(doneLoadingAction()); 
      })
      .catch(() => {
        dispatch(setDetailPokemon({}));
        dispatch(doneLoadingAction()); 
      });
  };
}

export function setDetailPokemon(dataDetail) {
  return {
    type: ACTIONS.ADD_DETAIL_POKEMON,
    dataDetail,
  };
}


function loadingAction() {
  return { type: ACTIONS.LOADING };
}

function doneLoadingAction() {
  return { type: ACTIONS.DONE_LOADING };
}
