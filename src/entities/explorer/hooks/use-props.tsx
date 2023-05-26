import { useEffect, useState } from 'react';

import { getTypeArguments, getTypeDetails, checkArrayInterface } from '../lib';
import { ITypeArguments, TypeParsedField, TypeGetTypeArgumentsReturn } from '../model';

export const useExplorerProps = ({ parsedField, option }: IUseExplorerProps) => {
  const [docs, setDocs] = useState<ITypeArguments[]>([]);

  useEffect(() => {
    let getParsedArray: TypeGetTypeArgumentsReturn;
    if (parsedField) {
      if (option === Options.arguments) {
        getParsedArray = getTypeArguments(parsedField);
      }
      if (option === Options.details) {
        getParsedArray = getTypeDetails(parsedField);
      }
      if (getParsedArray) {
        checkArrayInterface(getParsedArray, setDocs);
      }
    } else setDocs([]);
  }, [parsedField, option]);
  return docs;
};

interface IUseExplorerProps {
  parsedField: TypeParsedField | undefined;
  option: Options;
}

export enum Options {
  arguments = 'arguments',
  details = 'details',
}
