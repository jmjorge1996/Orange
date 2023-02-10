import { AppActionTypes, AppActions } from './actions';
import { AppState } from './state'

export function appReducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.SetGraphicsCards:
      return { ...state, graphicsCards: [...state.graphicsCards, ...action.payload] };
    default:
      return state;
  }
}

export const initialState: AppState = {
  graphicsCards: []
};