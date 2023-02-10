import { Action } from '@ngrx/store';
import { GraphicsCard } from '../../shared/models/GraphicCard';

export enum AppActionTypes {
  SetGraphicsCards = '[APP] Set Graphics Cards',
}
export class SetGraphicsCards implements Action {
  readonly type = AppActionTypes.SetGraphicsCards;

  constructor(public payload: GraphicsCard[]) {}
}

export type AppActions = SetGraphicsCards;
