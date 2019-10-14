import * as ACTIONS from '../actions';

const initialState = {
  authToken: null,
  user: null
}

const yggdrasilReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.1:
      return {...state, };
    case ACTIONS.2:
      return {...state, };
    default:
      return state;
  };
};
