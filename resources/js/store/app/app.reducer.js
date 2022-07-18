export const types = {
    CLEAR_ERRORS: 'APP/CLEAR_ERRORS',
    TOGGLE_ASIDE: 'APP/TOGGLE_ASIDE',
    SET_GRID: 'APP/SET_GRID',
};

const initialState = {
    aside: true,
    grid: true,
};

export default function reducer(state = {...initialState}, action) {
    switch (action.type) {
        case types.SET_GRID:
            return {
                ...state,
                grid: action.data
            }

        case types.TOGGLE_ASIDE:
            return {
                ...state,
                aside: !state.aside,
            }

        default:
            return state;
    }
}
