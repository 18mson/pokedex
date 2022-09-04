import { HYDRATE } from 'next-redux-wrapper';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  } else {
    return state;
  }
}

export function getTheory(params) {
  let headers = {};
  if (getToken()) {
    headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${getToken()}`,
    };
  }
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_RECOMMENDED,
      headers,
      params
    };

    return fetch(options)
      .then(res => {
        dispatch(setTheoryAll(res));
      })
      .catch(() => {
        dispatch(setTheoryAll({
          data: [],
          meta: { totalData: 0 }
        }));
      });
  };
}

function setTheoryAll(dataRekomend) {
  return {
    type: ACTIONS.GET_THEORY_ALL,
    dataRekomend,
  };
}
