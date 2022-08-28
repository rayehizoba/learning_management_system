import React from "react";
import {useNavigate} from "react-router-dom";
import {useBodyOverflowHidden} from "./useBodyOverflowHidden";

function useModal() {
    useBodyOverflowHidden();
    const navigate = useNavigate();
    const [dismissed, setDismissed] = React.useState(true);
    const dismiss = () => {
        setDismissed(true);
        navigate(-1);
    };
    React.useEffect(() => setDismissed(false), []);
    React.useLayoutEffect(() => setDismissed(true), [location]);
    return {
        dismissed,
        dismiss,
    };
}

export default useModal;
