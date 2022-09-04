import {types as userTypes} from '../user/user.reducer';

export const types = {
    ASSIGN_START: "COURSE_LEARNERS/ASSIGN_START",
    ASSIGN_FULFILLED: "COURSE_LEARNERS/ASSIGN_FULFILLED",
    ASSIGN_REJECTED: "COURSE_LEARNERS/ASSIGN_REJECTED",
    FETCH_START: "COURSE_LEARNERS/FETCH_START",
    FETCH_FULFILLED: "COURSE_LEARNERS/FETCH_FULFILLED",
    FETCH_REJECTED: "COURSE_LEARNERS/FETCH_REJECTED",
};

export const initialState = {
    assign: false,
    assignSuccess: false,
    assignError: null,
    fetch: false,
    fetchSuccess: false,
    fetchError: null,
    collection: [],
};

export default function reducer(state = {...initialState}, action) {
    switch (action.type) {
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

        case types.ASSIGN_START:
            return {
                ...state,
                assign: true,
                assignSuccess: false,
                assignError: null,
            };

        case types.ASSIGN_FULFILLED:
            return {
                ...state,
                assign: false,
                assignSuccess: true,
                collection: action.data,
            };

        case types.ASSIGN_REJECTED:
            return {
                ...state,
                assign: false,
                assignSuccess: false,
                assignError: action.data,
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
