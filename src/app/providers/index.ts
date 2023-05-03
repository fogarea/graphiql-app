import { withRouter } from './with-router';
import compose from 'compose-function';
import './with-firebase';

export const withProviders = compose(withRouter);
