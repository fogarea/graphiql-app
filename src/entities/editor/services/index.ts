import endpoints, { TypeEndpoint } from '../model';

export const endpointsService = {
  getAll: (): TypeEndpoint[] => {
    return endpoints.results;
  },
};
