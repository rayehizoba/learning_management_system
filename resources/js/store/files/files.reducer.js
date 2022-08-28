import {types as userTypes} from '../user/user.reducer';
// import {types as courseTypes} from '../folder/folder.reducer';

export const types = {
    FETCH_START: "FILES/FETCH_START",
    FETCH_FULFILLED: "FILES/FETCH_FULFILLED",
    FETCH_REJECTED: "FILES/FETCH_REJECTED",
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
        //
        // case courseTypes.DELETE_FULFILLED:
        //     return {
        //         ...state,
        //         collection: state.collection.filter(course => course.id !== action.data)
        //     };
        //
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