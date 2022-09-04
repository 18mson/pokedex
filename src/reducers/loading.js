import { ACTIONS } from '../constants';

const initialState = {
  isLoading: true,
};

export default function reducer(state = initialState, action) {
  const {
    LOADING,
    DONE_LOADING,

  } = ACTIONS;
  const { type } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      };
    case DONE_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
