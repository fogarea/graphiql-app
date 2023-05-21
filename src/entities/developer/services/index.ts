import developers from '../model/developers.json';
import { TypeDeveloper } from '../model/types';

export const developerService = {
  getAll: (): TypeDeveloper[] => {
    return developers;
  },
};
