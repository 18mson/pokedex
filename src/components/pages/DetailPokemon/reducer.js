import { ACTIONS } from '../../../constants';

const initialState = {
  dataDetail: {}
};

export default function reducer(state = initialState, action = {}) {
  const { type, dataDetail } = action;
  const {
    ADD_DETAIL_POKEMON
  } = ACTIONS;


  switch (type) {
    case ADD_DETAIL_POKEMON:
      return {
        ...state,
        dataDetail: dataDetail,
      };

    default:
      return state;
  }
}
