import { Dispatch, SetStateAction } from 'react';
import { ITypeArguments, TypeGetTypeArgumentsReturn } from '../model/';

export const checkArrayInterface = (
  array: TypeGetTypeArgumentsReturn,
  setState: Dispatch<SetStateAction<ITypeArguments[]>>
): void => {
  const isValid = array?.every((el): el is ITypeArguments => {
    return el !== undefined;
  });
  if (isValid) setState(array);
};
