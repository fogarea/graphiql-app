import { useState } from 'react';

export const useBurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return {
    isMenuOpen,
    toggleMenu,
  };
};
