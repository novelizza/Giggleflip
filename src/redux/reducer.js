import {combineReducers} from 'redux';

const initialStateMeme = {
  data: {},
};

const MemeReducer = (state = initialStateMeme, action) => {
  if (action.type === 'FILL_DATAMEME') {
    return {
      ...state,
      ['data']: action.inputValue,
    };
  }
  return state;
};

const initialStateJokes = {
  data: {},
};

const JokesReducer = (state = initialStateJokes, action) => {
  if (action.type === 'FILL_JOKES') {
    return {
      ...state,
      ['data']: action.inputValue,
    };
  }
  return state;
};

const reducer = combineReducers({
  MemeReducer,
  JokesReducer,
});

export default reducer;
