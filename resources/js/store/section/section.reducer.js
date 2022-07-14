import {types as userTypes} from '../user/user.reducer';
import {types as appTypes} from '../app/app.reducer';

export const types = {
    SET: "SECTION/SET",
};

export const initialState = {
    model: null,
};

export default function reducer(state = {...initialState}, action) {
    switch (action.type) {
        case appTypes.CLEAR_ERRORS:
            return {
                ...initialState,
                model: state.model,
            };

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
