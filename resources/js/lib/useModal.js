import React from "react";
import {useHistory} from "react-router-dom";
import {useBodyOverflowHidden} from "./useBodyOverflowHidden";

function useModal() {

  useBodyOverflowHidden();

  const history = useHistory();

  const [dismissed, setDismissed] = React.useState(true);

  React.useEffect(() => {
    setDismissed(false);
    const unListen = history.listen(() => setDismissed(true));
    return () => unListen();
  }, []);

  const dismiss = () => {
    setDismissed(true);
    history.goBack();
  };

  return {
    dismissed,
    dismiss,
  };
}

export default useModal;
