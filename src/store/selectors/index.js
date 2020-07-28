import { createSelector } from 'reselect';

export const imagesSelector = createSelector(
  state => state.imagesReducer.images,
  images => images  
);