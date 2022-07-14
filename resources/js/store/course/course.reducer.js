import {types as userTypes} from '../user/user.reducer';

export const types = {
  SET: "COURSE/SET",
};

export const initialState = {
  model: null
};

export default function reducer(state = {...initialState}, action) {
  switch (action.type) {

    case types.SET:
      return {
        ...initialState,
        model: action.data
      };

    case userTypes.LOGOUT:
      return {
        ...initialState
      };

    default:
      return state;
  }
}
