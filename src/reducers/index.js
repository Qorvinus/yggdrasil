import * as ACTIONS from '../actions';

const initialState = {
  authToken: null,
  user: null
}

const yggdrasilReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ONE:
      return {...state, };
    case ACTIONS.TWO:
      return {...state, };
    default:
      return state;
  };
};

export default yggdrasilReducer;
