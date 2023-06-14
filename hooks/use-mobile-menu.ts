import { useState } from 'react';

const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return { isOpen, toggleMobileMenu };
};

export default useMobileMenu;
