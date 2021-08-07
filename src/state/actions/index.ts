import { ActionType } from '../action-types';

export interface ChangeToHostAction {
  type: ActionType.CHANGE_TO_HOST;
}

export interface ChangeToUserAction {
  type: ActionType.CHANGE_TO_USER;
}

export type Action = ChangeToHostAction | ChangeToUserAction;
