import { ACTIONS } from '../../../constants';

const initialState = {
  pokemon: [],
  next: '',
  previous: ''
};

export default function reducer(state = initialState, action = {}) {
  const { type, dataPokemon, next, previous } = action;
  switch (type) {
    case ACTIONS.ADD_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon.concat(dataPokemon),
      };

      case ACTIONS.ADD_NEXT_POKEMON:
        return {
          ...state,
          next: next
        };

        case ACTIONS.ADD_PREV_POKEMON:
          return {
            ...state,
            previous: previous,
          };

    default:
      return state;
  }
}
