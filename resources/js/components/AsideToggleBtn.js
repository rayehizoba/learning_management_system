import React from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {selectAside} from "../store/app/app.selectors";
import * as appActions from "../store/app/app.actions";

function AsideToggleBtn(props) {
    const dispatch = useDispatch();
    const aside = useSelector(selectAside);
    return (
        <button
            type="button"
            onClick={() => dispatch(appActions.toggleAside())}
            className={classNames(
                'rounded-md border-y-2 border-r-2 aspect-square w-9 md:w-8 border-gray-400 transition-all',
                aside ? 'border-l-[12px] hover:border-l-4' : 'border-l-4 hover:border-l-[12px]'
            )}
        >
            <i
                className={classNames(
                    "mdi text-gray-400 text-2xl md:text-lg",
                    aside ? 'mdi-chevron-left' : 'mdi-chevron-right'
                )}
            ></i>
        </button>
    );
}

export default AsideToggleBtn;
