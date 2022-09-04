import { ACTIONS } from '../../../constants';

const initialState = {
  dataType: [],
};

export default function reducer(state = initialState, action = {}) {
  const { type, dataType } = action;
  switch (type) {
    case ACTIONS.ADD_TYPE:
      return {
        ...state,
        dataType: dataType,
      };

    default:
      return state;
  }
}
