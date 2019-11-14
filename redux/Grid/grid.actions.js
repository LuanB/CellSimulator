import GridActionTypes from './grid.types';

export const updateGrid = GridMap => ({
  type: gridActionTypes.UPDATE_GridPrams,
  payload: gridMap
});
