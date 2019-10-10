import * as constants from './constants';

export const getEmailsRequest = () => ({
  type: constants.GET_EMAILS_REQUEST
});

export const getEmailsSuccess = emails => ({
  type: constants.GET_EMAILS_SUCCESS,
  payload: emails
});

export const getEmailsFailure = error => ({
  type: constants.GET_EMAILS_FAILURE,
  payload: error
});
