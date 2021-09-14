import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';

type ModeTypes = 'user' | 'host';

interface ModeState {
  mode: ModeTypes;
}

const initialState: ModeState = { mode: 'host' };

const reducer = produce((state: ModeState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGE_TO_HOST:
      state.mode = 'host';
      return state;
    case ActionType.CHANGE_TO_USER:
      state.mode = 'user';
      return state;
    default:
      return state;
  }
});

export default reducer;
