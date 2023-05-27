import { useEffect, useState } from 'react';

export const useScrollTrigger = (target: HTMLDivElement, threshold = 100) => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleChangeScroll = (): void => {
      if (target.scrollTop > threshold) {
        setTrigger(true);
      } else {
        setTrigger(false);
      }
    };

    target.addEventListener('scroll', () => handleChangeScroll());

    return target.removeEventListener('scroll', () => handleChangeScroll());
  }, [threshold, target]);

  return { trigger, target: target };
};
