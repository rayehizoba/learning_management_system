import React from 'react';
import classNames from "classnames";
import {NavLink, useMatch} from "react-router-dom";

function NavigationGroup({trigger, children, ...restProps}) {
    return (
        <>
            {trigger}
            {children}
        </>
    );
}

function NavigationLink({
                            to,
                            icon,
                            children,
                            activeClassName = "bg-teal-400/25 hover:bg-teal-400/50",
                            inActiveClassName = "hover:bg-white/25 text-gray-500",
                            ...restProps
                        }) {
    const className = icon
        ? "px-2 py-1 flex items-center space-x-2 rounded-md transition"
        : "p-2 pl-10 block rounded-md transition";
    return (
        <NavLink
            to={to}
            className={({isActive}) => classNames(className, isActive ? activeClassName : inActiveClassName)}
            {...restProps}
        >
            {Boolean(icon) && <span className="text-2xl">{icon}</span>}
            <span className="font-medium">{children}</span>
        </NavLink>
    );
}

function Navigation(props) {
    const className = 'px-2 py-1 flex items-center space-x-2 rounded-md transition';
    const activeClassName = 'font-bold bg-teal-400/25 hover:bg-teal-400/50';
    const inactiveClassName = 'hover:bg-white/25 text-gray-500';

    const contentMatch = useMatch('/courses/*') || useMatch('/quizzes/*');
    const userMatch = useMatch('/users/*') || useMatch('/groups/*');

    return (
        <div className="flex flex-col space-y-6 overflow-y-auto flex-1 p-5 pb-0">
            <figure className="bg-white shadow rounded-lg p-3 flex items-center sticky top-0">
                <div className="border rounded h-10 w-10 flex items-center justify-center">
                    <div className="h-5 w-5 rounded-md rounded-tr-none bg-black"></div>
                </div>
                <div className="px-2">
                    Fikri Studio
                </div>
                <i className="mdi mdi-unfold-more-horizontal text-xl text-gray-400 ml-auto px-2"></i>
            </figure>

            <ul className="space-y-3 flex-1 select-none">
                {/* Dashboard */}
                <li>
                    <a href="#" className={classNames(className, inactiveClassName)}>
                        <i className="mdi mdi-view-dashboard-outline text-2xl"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                {/* Inbox */}
                <li>
                    <a href="#" className={classNames(className, inactiveClassName)}>
                        <i className="mdi mdi-email-outline text-2xl"></i>
                        <span>Inbox</span>
                    </a>
                </li>
                <li className="border-t border-white/50"></li>

                {/* Contents */}
                <li>
                    <Expands
                        defaultOpen={contentMatch}
                        trigger={(
                            <div className={classNames(
                                className,
                                inactiveClassName,
                                contentMatch && 'font-bold text-black'
                            )}>
                                <i className={classNames(
                                    "mdi mdi-clipboard-text-outline text-2xl",
                                    contentMatch && 'text-teal-500'
                                )}></i>
                                <span>Contents</span>
                            </div>
                        )}
                    >
                        <ul>
                            <li>
                                <NavLink
                                    to="/courses"
                                    className={({isActive}) => classNames(
                                        "p-2 pl-10 block rounded-md transition",
                                        isActive ? activeClassName : inactiveClassName
                                    )}
                                >
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/quizzes"
                                    className={({isActive}) => classNames(
                                        "p-2 pl-10 block rounded-md transition",
                                        isActive ? activeClassName : inactiveClassName
                                    )}
                                >
                                    Quiz
                                </NavLink>
                            </li>
                            <li>
                                <a href="#"
                                   className="p-2 pl-10 block rounded-md transition hover:bg-white/25 text-gray-500">
                                    <span className="">Manuals</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="p-2 pl-10 block rounded-md transition hover:bg-white/25 text-gray-500">
                                    <span className="">Files & Folders</span>
                                </a>
                            </li>
                        </ul>
                    </Expands>
                </li>

                {/* Learning Path */}
                <li>
                    <a href="#" className={classNames(className, inactiveClassName)}>
                        <i className="mdi mdi-book-open-outline text-2xl"></i>
                        <span className="">Learning Path</span>
                    </a>
                </li>

                {/* Public Site */}
                <li>
                    <a href="#" className={classNames(className, inactiveClassName)}>
                        <i className="mdi mdi-application-outline text-2xl"></i>
                        <span className="">Public Site</span>
                    </a>
                </li>

                {/* User */}
                <li>
                    <Expands
                        defaultOpen={userMatch}
                        trigger={(
                            <div className={classNames(
                                className,
                                inactiveClassName,
                                userMatch && 'font-bold text-black'
                            )}>
                                <i className={classNames(
                                    "mdi mdi-account-outline text-2xl",
                                    userMatch && 'text-teal-500'
                                )}></i>
                                <span>User</span>
                            </div>
                        )}
                    >
                        <ul>
                            <li>
                                <NavLink
                                    to="/users"
                                    className={({isActive}) => classNames(
                                        "p-2 pl-10 block rounded-md transition",
                                        isActive ? activeClassName : inactiveClassName
                                    )}
                                >
                                    Individuals
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/groups"
                                    className={({isActive}) => classNames(
                                        "p-2 pl-10 block rounded-md transition",
                                        isActive ? activeClassName : inactiveClassName
                                    )}
                                >
                                    Groups
                                </NavLink>
                            </li>
                        </ul>
                    </Expands>
                </li>

                {/* Tracking */}
                <li>
                    <a href="#" className={classNames(className, inactiveClassName)}>
                        <i className="mdi mdi-poll text-2xl"></i>
                        <span className="">Tracking</span>
                    </a>
                </li>
            </ul>

            <ul className="space-y-3 sticky bottom-0 backdrop-blur pt-3 pb-5 border-t border-white/50">
                {/* Help */}
                <li className="">
                    <a href="#" className={classNames(className, inactiveClassName)}>
                        <i className="mdi mdi-chat-question-outline text-2xl"></i>
                        <span className="">Help</span>
                    </a>
                </li>

                {/* Settings */}
                <li className="">
                    <a href="#" className={classNames(className, inactiveClassName)}>
                        <i className="mdi mdi-cog-outline text-2xl"></i>
                        <span className="">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="group px-2 block">
                        <div className="text-gray-400 text-xs">Powered by</div>
                        <div className="font-bold text-xl text-red-900 group-hover:text-red-700 transition">Razorlab
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;

function Expands({defaultOpen = false, children, trigger}) {
    const [open, setOpen] = React.useState(defaultOpen);
    return (
        <>
            <div onClick={() => setOpen(!open)} className="relative">
                {trigger}
                <i className={classNames(
                    "absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 mdi",
                    open ? 'mdi-chevron-up' : 'mdi-chevron-down'
                )}></i>
            </div>
            <div className={classNames(
                "transition-all",
                open ? 'max-h-screen opacity-100 duration-500' : 'max-h-0 opacity-0 pointer-events-none'
            )}>
                {children}
            </div>
        </>
    )
}
