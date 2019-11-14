import { createSelector } from 'reselect';

const selectGrid = state => state.Grid;

export const selectGridprams = createSelector(
  [selectGrid],
  grid => grid.params
);



