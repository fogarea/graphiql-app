import { useState } from 'react';

export const useExplorer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDocumentation = () => {
    setIsOpen(!isOpen);

    console.log('handleToggleDocumentation');
  };

  return { isOpen, handleToggleDocumentation };
};
