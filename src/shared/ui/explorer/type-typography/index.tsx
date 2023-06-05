import { HTMLAttributes } from 'react';

export const TypeTypography = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return <span {...rest}>{'type '}</span>;
};
