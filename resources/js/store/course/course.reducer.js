import {types as userTypes} from '../user/user.reducer';
import {types as appTypes} from '../app/app.reducer';

export const types = {
    SET: "COURSE/SET",

    STORE_START: "COURSE/STORE_START",
    STORE_FULFILLED: "COURSE/STORE_FULFILLED",
    STORE_REJECTED: "COURSE/STORE_REJECTED",

    UPDATE_START: "COURSE/UPDATE_START",
    UPDATE_FULFILLED: "COURSE/UPDATE_FULFILLED",
    UPDATE_REJECTED: "COURSE/UPDATE_REJECTED",

    DELETE_START: "COURSE/DELETE_START",
    DELETE_FULFILLED: "COURSE/DELETE_FULFILLED",
    DELETE_REJECTED: "COURSE/DELETE_REJECTED",
};

export const initialState = {
    model: null,

    store: false,
    storeSuccess: false,
    storeError: null,

    update: false,
    updateSuccess: false,
    updateError: null,
};

export default function reducer(state = {...initialState}, action) {
    switch (action.type) {
        case appTypes.CLEAR_ERRORS:
            return {
                ...initialState,
                model: state.model,
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
                model: action.data,
            };

        case types.STORE_REJECTED:
            return {
                ...state,
                store: false,
                storeSuccess: false,
                storeError: action.data,
            };

        case types.UPDATE_START:
            return {
                ...state,
                update: true,
                updateSuccess: false,
                updateError: null,
            };

        case types.UPDATE_FULFILLED:
            return {
                ...state,
                update: false,
                updateSuccess: true,
                model: action.data,
            };

        case types.UPDATE_REJECTED:
            return {
                ...state,
                update: false,
                updateSuccess: false,
                updateError: action.data,
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