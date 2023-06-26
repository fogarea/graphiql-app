import features, { TypeFeature } from '../model';

export const developerService = {
  getAll: (): TypeFeature[] => {
    return features.results;
  },
};
