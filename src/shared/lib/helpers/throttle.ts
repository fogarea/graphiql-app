export const throttle = <T>(fn: (arg: T) => void, wait = 10) => {
  let time = Date.now();

  return (arg: T): void => {
    if (time + wait - Date.now() < 0) {
      fn(arg);
      time = Date.now();
    }
  };
};
