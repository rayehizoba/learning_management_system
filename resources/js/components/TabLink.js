import React from 'react';
import classNames from "classnames";
import {NavLink} from "react-router-dom";

function TabLink({children, to, ...restProps}) {
    const tabLinkClassName = "font-semibold border-b-2 py-2 block relative before:absolute before:-inset-x-2 before:inset-y-1 before:rounded hover:before:bg-gray-100 before:transition";
    const tabLinkActiveClassName = "border-yellow-400 text-black";
    const tabLinkInactiveClassName = "border-transparent text-gray-400 border-white";
    return (
        <NavLink
            to={to}
            className={({isActive}) => classNames(
                tabLinkClassName,
                isActive ? tabLinkActiveClassName : tabLinkInactiveClassName
            )}
            {...restProps}
        >
            <span className="relative">{children}</span>
        </NavLink>
    );
}

export default TabLink;
