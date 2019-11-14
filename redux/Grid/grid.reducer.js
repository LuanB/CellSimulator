import GridActionTypes from './grid.types';
const INITIAL_STATE = {
  collections: null
};

const gridReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GridActionTypes.UPDATE_GridPrams:
      return {
        ...state,
        GridState: action.payload
      };

    default:
      return state;
  }
};

export default GridReducer;
