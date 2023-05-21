import developers, { TypeDeveloper } from '../model';

export const developerService = {
  getAll: (): TypeDeveloper[] => {
    return developers.developers;
  },
};
