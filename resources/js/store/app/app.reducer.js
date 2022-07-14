export const types = {
    CLEAR_ERRORS: 'APP/CLEAR_ERRORS',
    TOGGLE_ASIDE: 'APP/TOGGLE_ASIDE',
};

const initialState = {
    aside: true,
};

export default function reducer(state = {...initialState}, action) {
    switch (action.type) {
        case types.TOGGLE_ASIDE:
            return {
                ...state,
                aside: !state.aside,
            }

        default:
            return state;
    }
}
