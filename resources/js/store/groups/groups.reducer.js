import {types as userTypes} from '../user/user.reducer';

export const types = {
  FETCH_START: 'GROUPS/FETCH_START',
  FETCH_FULFILLED: 'GROUPS/FETCH_FULFILLED',
  FETCH_REJECTED: 'GROUPS/FETCH_REJECTED',
};

const initialState = {
  fetch: false,
  fetchSuccess: false,
  fetchError: null,
  collection: [],
  pagination: null,
};

export default function reducer(state = {...initialState}, action) {
  switch (action.type) {

    case types.FETCH_START:
      return {
        ...state,
        fetch: true,
        fetchSuccess: false,
        fetchError: null
      };

    case types.FETCH_FULFILLED:
      return {
        ...state,
        fetch: false,
        fetchSuccess: true,
        collection: action.data,
        // pagination: {
        //   current_page: action.data.current_page,
        //   data: action.data.data,
        //   first_page_url: action.data.first_page_url,
        //   from: action.data.from,
        //   last_page: action.data.last_page,
        //   last_page_url: action.data.last_page_url,
        //   links: action.data.links.map((link) => ({
        //     url: link.url,
        //     label: link.label,
        //     active: link.active,
        //   })),
        //   next_page_url: action.data.next_page_url,
        //   path: action.data.path,
        //   per_page: action.data.per_page,
        //   prev_page_url: action.data.prev_page_url,
        //   to: action.data.to,
        //   total: action.data.total,
        // },
      };

    case types.FETCH_REJECTED:
      return {
        ...state,
        fetch: false,
        fetchSuccess: false,
        fetchError: action.data
      };

    case userTypes.LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
