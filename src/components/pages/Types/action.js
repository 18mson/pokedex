import { SERVICES } from '../../../configs';
import { ACTIONS } from '../../../constants';
import fetch from '../../../utils/fetch';

export function getType(id) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_DETAIL_TYPE(id),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    dispatch(loadingAction()); 
    return fetch(options)
      .then(res => {
        dispatch(setType(res));
        dispatch(doneLoadingAction()); 
      })
      .catch(() => {
        dispatch(setType({}));
        dispatch(doneLoadingAction()); 
      });
  };
}

export function setType(dataType) {
  return {
    type: ACTIONS.ADD_TYPE,
    dataType,
  };
}

function loadingAction() {
  return { type: ACTIONS.LOADING };
}

function doneLoadingAction() {
  return { type: ACTIONS.DONE_LOADING };
}
