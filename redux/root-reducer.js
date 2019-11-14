import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import gridReducer from './Grid/grid.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['grid']
};

const rootReducer = combineReducers({
  grid: gridReducer,

});

export default persistReducer(persistConfig, rootReducer);
