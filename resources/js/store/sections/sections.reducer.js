import {types as userTypes} from '../user/user.reducer';

export const types = {
    CREATE: "SECTIONS/CREATE",
    FETCH_START: "SECTIONS/FETCH_START",
    FETCH_FULFILLED: "SECTIONS/FETCH_FULFILLED",
    FETCH_REJECTED: "SECTIONS/FETCH_REJECTED",
};

export const initialState = {
    fetch: false,
    fetchSuccess: false,
    fetchError: null,
    collection: [],
};

export default function reducer(state = {...initialState}, action) {
    switch (action.type) {
        case types.CREATE:
            return {
                ...state,
                collection: [...state.collection, {
                    name: '',
                    updated_at: + Date.now(),
                }]
            };

        case types.FETCH_START:
            return {
                ...state,
                fetch: true,
                fetchSuccess: false,
                fetchError: null,
            };

        case types.FETCH_FULFILLED:
            return {
                ...state,
                fetch: false,
                fetchSuccess: true,
                collection: action.data,
            };

        case types.FETCH_REJECTED:
            return {
                ...state,
                fetch: false,
                fetchSuccess: false,
                fetchError: action.data,
            };

        case userTypes.LOGOUT:
        case userTypes.LOGIN_FULFILLED:
            return {
                ...initialState,
            };

        default:
            return state;
    }
}
