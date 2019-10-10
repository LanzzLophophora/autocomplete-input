import * as constants from './constants';

export const initialState = {
  emails: [],
  error: '',
  loading: false
};

export const emails = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_EMAILS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case constants.GET_EMAILS_SUCCESS:
      return {
        ...state,
        emails: action.payload,
        loading: false
      };

    case constants.GET_EMAILS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
