import { withRouter } from './with-router';
import compose from 'compose-function';
import './with-firebase';
import { withI18Next } from './with-i18next';

export const withProviders = compose(withRouter);
