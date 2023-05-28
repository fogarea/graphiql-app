import { getIntrospectionQuery } from 'graphql';

import { graphiqlClient } from '@/shared/api';
import { wrapPromise } from '../../../shared/lib/wrap-promise';

export function fetchData() {
  const iQueryString = getIntrospectionQuery();
  const promise = graphiqlClient.request(iQueryString).then((data) => data);
  return wrapPromise(promise);
}
