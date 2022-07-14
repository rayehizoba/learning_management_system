import React from "react";

function useHookWithRefCallback(next) {
  const [node, setRef] = React.useState(null);

  React.useEffect(
    () => {
      if (node && (typeof next === 'function')) {
        next(node);
      }
    },
    [node],
  );

  return [setRef];
}

export default useHookWithRefCallback;
