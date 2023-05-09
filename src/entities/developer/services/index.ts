import { IDeveloperData } from '../types';
import developers from '../model/developers.json';

export const developerService = {
  getAll: (): IDeveloperData[] => {
    return developers;
  },
};
