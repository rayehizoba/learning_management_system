import {types as sectionTypes} from '../section/section.reducer';
import {types as userTypes} from '../user/user.reducer';
import {types as appTypes} from '../app/app.reducer';

export const types = {
    CREATE: "SECTIONS/CREATE",

    FETCH_START: "SECTIONS/FETCH_START",
    FETCH_FULFILLED: "SECTIONS/FETCH_FULFILLED",
    FETCH_REJECTED: "SECTIONS/FETCH_REJECTED",

    STORE_START: "SECTIONS/STORE_START",
    STORE_FULFILLED: "SECTIONS/STORE_FULFILLED",
    STORE_REJECTED: "SECTIONS/STORE_REJECTED",

    CLEAR_COLLECTION: "SECTIONS/CLEAR_COLLECTION",
};

export const initialState = {
    fetch: false,
    fetchSuccess: false,
    fetchError: null,

    store: false,
    storeSuccess: false,
    storeError: null,

    collection: [],
};

export default function reducer(state = {...initialState}, action) {
    switch (action.type) {
        case sectionTypes.SET:
            return {
                ...state,
                collection: state.collection.map(each => {
                    let key;
                    if (
                        action.data &&
                        Object.keys(each).includes('id') && Object.keys(action.data).includes('id')
                    ) key = 'id';
                    else if (
                        action.data &&
                        Object.keys(each).includes('updated_at') && Object.keys(action.data).includes('updated_at')
                    ) key = 'updated_at';
                    return key && (action.data[key] === each[key]) ? action.data : each;
                }),
            }

        case types.STORE_START:
            return {
                ...state,
                store: true,
                storeSuccess: false,
                storeError: null,
            };

        case types.STORE_FULFILLED:
            return {
                ...state,
                store: false,
                storeSuccess: true,
                collection: action.data,
            };

        case types.STORE_REJECTED:
            return {
                ...state,
                store: false,
                storeSuccess: false,
                storeError: action.data,
            };

        case types.CLEAR_COLLECTION:
            return {
                ...state,
                collection: initialState.collection
            };

        case appTypes.CLEAR_ERRORS:
            return {
                ...initialState,
                collection: state.collection,
            };

        case types.CREATE:
            return {
                ...state,
                collection: [...state.collection, {
                    name: '',
                    updated_at: +Date.now(),
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
