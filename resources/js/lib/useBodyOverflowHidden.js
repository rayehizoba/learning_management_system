import * as React from "react";

export function useBodyOverflowHidden() {
  React.useEffect(() => {
    document
      .querySelector('body')
      .classList.add('overflow-hidden');
    return () => {
      document
        .querySelector('body')
        .classList.remove('overflow-hidden');
    }
  }, []);
}
