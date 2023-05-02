import { withRouter } from './with-router';
import compose from 'compose-function';
import './firebase';

export const withProviders = compose(withRouter);
