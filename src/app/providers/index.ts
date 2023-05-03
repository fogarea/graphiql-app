import compose from 'compose-function';
import { withI18Next } from './with-i18next';
import { withRouter } from './with-router';

export const withProviders = compose(withRouter, withI18Next);
