import {types as userTypes} from '../user/user.reducer';
import {types as quizTypes} from '../quiz/quiz.reducer';

export const types = {
    FETCH_START: "QUIZZES/FETCH_START",
    FETCH_FULFILLED: "QUIZZES/FETCH_FULFILLED",
    FETCH_REJECTED: "QUIZZES/FETCH_REJECTED",
};

export const initialState = {
    fetch: false,
    fetchSuccess: false,
    fetchError: null,
    collection: [],
};

export default function reducer(state = {...initialState}, action) {
    switch (action.type) {
        // case courseTypes.STORE_FULFILLED:
        //     return {
        //         ...state,
        //         collection: [...state.collection, action.data]
        //     }

        case quizTypes.DELETE_FULFILLED:
            return {
                ...state,
                collection: state.collection.filter(quiz => quiz.id !== action.data)
            };

        // case courseTypes.UPDATE_FULFILLED:
        //     return {
        //         ...state,
        //         collection: state.collection.map(each => (each.id == action.data.id) ? action.data : each)
        //     };

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
