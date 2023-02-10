import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from './state';

const getGraphicsCardsState = createFeatureSelector<AppState>('graphicsCards');

export const graphicsCardsSelectors = {
    getAllGraphicsCards: () => createSelector(getGraphicsCardsState, (state: AppState) => {
      return state.graphicsCards || []
    }),
    getGraphicCards: ( position: number, offset: number ) => createSelector(getGraphicsCardsState, (state: AppState) => {
      try{
        return state.graphicsCards.slice(position, position + offset);
      } catch (err) {
        return [];
      }
    }),
    getGraphicCardById:(graphicCardId: number) => createSelector(getGraphicsCardsState, (state: AppState) => state.graphicsCards.find((graphicCard) => graphicCard._id === graphicCardId)),
};
