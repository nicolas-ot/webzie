import { ActionType } from '../action-types';
import { ChangeToHostAction, ChangeToUserAction } from '../actions';

export const changeToHost = (): ChangeToHostAction => {
  return {
    type: ActionType.CHANGE_TO_HOST,
  };
};

export const changeToUser = (): ChangeToUserAction => {
  return {
    type: ActionType.CHANGE_TO_USER,
  };
};
