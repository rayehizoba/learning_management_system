import * as React from 'react';

function useInterval(callback, delay) {
  const savedCallback = React.useRef();
  const intervalId = React.useRef(null);
  const [currentDelay, setDelay] = React.useState(delay);

  const toggleRunning = React.useCallback(
    () => setDelay(currentDelay => (currentDelay === null ? delay : null)),
    [delay]
  );

  const clear = React.useCallback(() => clearInterval(intervalId.current), []);

  // Remember the latest function.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (intervalId.current) clear();

    if (currentDelay !== null) {
      intervalId.current = setInterval(tick, currentDelay);
    }

    return clear;
  }, [currentDelay, clear]);

  return [toggleRunning, !!currentDelay];
}

export default useInterval;
