import { combineReducers } from 'redux';
import modeReducer from './modesReducer';

const reducers = combineReducers({
  modes: modeReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
