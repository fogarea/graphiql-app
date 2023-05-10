import { TypeDeveloper } from '../types';
import developers from '../model/developers.json';

export const developerService = {
  getAll: (): TypeDeveloper[] => {
    return developers;
  },
};
