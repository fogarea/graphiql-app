import features, { TypeFeature } from '../model';

export const featuresService = {
  getAll: (): TypeFeature[] => {
    return features.results;
  },
};
