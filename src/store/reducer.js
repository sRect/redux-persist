import { combineReducers } from 'redux';
import { dataA, dataB }  from './state';

const reducerA = (state = dataA, action) => {
  switch(action.type) {
    case 'SET_A':
      return state.set('a', action.a);
    default:
      return state;
  }
}

const reducerB = (state = dataB, action) => {
  switch (action.type) {
    case 'SET_B':
      return state.set('b', action.b);
    default:
      return state;
  }
}

const allReducer = {
  reducerA,
  reducerB
}

const rootReducer = combineReducers(allReducer);

export default rootReducer;