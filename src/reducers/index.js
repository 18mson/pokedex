import { combineReducers } from 'redux';
import home from '../components/pages/Home/reducer';
import detailPokemon from '../components/pages/DetailPokemon/reducer';
import type from '../components/pages/Types/reducer';
import server from './serverReducer';
import loading from './loading';

const rootReducer = combineReducers({ 
    server, 
    loading,
    home,
    type,
    detailPokemon
});

export default rootReducer;
