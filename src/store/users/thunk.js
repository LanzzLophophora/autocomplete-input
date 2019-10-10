import * as actions from './actions';
import { getComments } from '../api';

export const handleGettingComments = () => dispatch => {
  dispatch(actions.getEmailsRequest());
  getComments()
    .then(({ data }) => {
      const emails = data.map(comment => comment.email);
      dispatch(actions.getEmailsSuccess(emails));
    })
    .catch(error => {
      dispatch(actions.getEmailsFailure(error));
    });
};
