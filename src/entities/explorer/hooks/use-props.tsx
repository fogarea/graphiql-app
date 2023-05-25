import { useEffect } from 'react';

import { getTypeArguments, getTypeDetails, checkArrayInterface } from '../lib';
import { ITypeArguments, TypeParsedField, TypeGetTypeArgumentsReturn } from '../model';

export const useExplorerProps = ({ parsedField, setState, option }: IUseExplorerProps) => {
  useEffect(() => {
    let getParsedArray: TypeGetTypeArgumentsReturn;
    if (option === Options.arguments) {
      getParsedArray = getTypeArguments(parsedField);
    }
    if (option === Options.details) {
      getParsedArray = getTypeDetails(parsedField);
    }
    if (getParsedArray) {
      checkArrayInterface(getParsedArray, setState);
    }
  }, [parsedField, setState, option]);
};

interface IUseExplorerProps {
  parsedField: TypeParsedField;
  setState: React.Dispatch<React.SetStateAction<ITypeArguments[]>>;
  option: Options;
}

export enum Options {
  arguments = 'arguments',
  details = 'details',
}
