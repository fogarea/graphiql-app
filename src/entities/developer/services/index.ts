import { TypeDeveloper } from '../model/types';
import developers from '../model/developers.json';

export const developerService = {
  getAll: (): TypeDeveloper[] => {
    return developers;
  },
};
