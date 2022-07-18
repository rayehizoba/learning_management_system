import React from 'react';
import classNames from "classnames";
import {useSelector} from "react-redux";
import Tippy from "../components/Tippy";
import Navigation from "../components/Navigation";
import AsideToggleBtn from "../components/AsideToggleBtn";
import {selectAside} from "../store/app/app.selectors";
import NewMenu from "../components/NewMenu";

function PageTemplate({navigation, header, title, subtitle, children}) {
    const aside = useSelector(selectAside);
    return (
        <main className="relative">
            <div className="h-screen w-screen overflow-hidden relative flex">
                {/*   LHS: Main Menu   */}
                <aside
                    className={classNames("absolute inset-y-0 left-0 w-72 lg:w-3/12 xl:w-1/5 flex transition", aside ? 'opacity-100' : 'opacity-0')}
                >
                    {navigation || <Navigation/>}
                </aside>

                {/*  RHS: Main Content  */}
                <section
                    className={classNames("w-full ml-auto transition-all transform", aside ? 'lg:w-9/12 xl:w-4/5 translate-x-72 lg:translate-x-0 p-5' : 'p-0')}
                >
                    <div
                        className={classNames("bg-white overflow-y-auto h-full transition-all", aside ? '-ml-5 rounded-2xl shadow' : '')}
                    >
                        <header className="sticky top-0 z-10 bg-white py-3 px-4 md:px-5 border-b">
                            {header || (
                                <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between">
                                    <div className="flex items-center space-x-3 md:space-x-5">
                                        <AsideToggleBtn/>
                                        <div className="h-10 md:h-7 border-l border-gray-300"></div>
                                        <div className="">
                                            {title ? (<>
                                                <div className="text-xl md:text-2xl font-bold">
                                                    {title}
                                                </div>
                                                {subtitle && (<div>
                                                    {subtitle}
                                                </div>)}
                                            </>) : (<>
                                                <div className="text-xl md:text-2xl font-semibold">
                                                    Welcome, Raymond 👋
                                                </div>
                                                <div className="text-gray-400 text-xs">
                                                    Here's what happened with your learning system
                                                </div>
                                            </>)}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-5 justify-between">
                                        <ul className="flex space-x-3 w-1/2 md:w-auto">
                                            <li>
                                                <Tippy content={<NewMenu/>}>
                                                    <button
                                                        className="btn-primary h-9 aspect-square !px-0"
                                                        type="button"
                                                    >
                                                        <i className="mdi mdi-plus text-xl"></i>
                                                    </button>
                                                </Tippy>
                                            </li>
                                            <li>
                                                <button className="btn-outline h-9 aspect-square !px-0" type="button">
                                                    <i className="mdi mdi-bell-outline text-xl"></i>
                                                </button>
                                            </li>
                                            <li>
                                                <button className="btn-outline h-9 aspect-square !px-0" type="button">
                                                    <i className="mdi mdi-magnify text-xl"></i>
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="h-10 md:h-7 border-l border-gray-300 hidden md:block"></div>
                                        <div className="w-1/2 md:w-auto">
                                            <div
                                                className="select-none flex items-center space-x-2 cursor-pointer relative before:absolute before:-inset-1 before:-inset-x-2 before:hover:bg-gray-100 before:transition before:rounded-md">
                                                <div
                                                    className="relative rounded-full w-8 aspect-square bg-gray-200"></div>
                                                <div className="relative flex-1">
                                                    <div className="text-sm font-semibold">
                                                        Theresa
                                                    </div>
                                                    <div className="text-gray-400 text-xs">
                                                        Super Admin
                                                    </div>
                                                </div>
                                                <i className="relative mdi mdi-chevron-down text-gray-400"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                        </header>
                        <section className="">
                            {children}
                        </section>
                    </div>
                </section>
            </div>

            {/* Linear Gradient BG */}
            <figure
                className="fixed inset-0 bg-gradient-to-tr from-[#e4f7ee] via-[#f0bc05] to-[#41b8b0] opacity-[20%] -z-10">
            </figure>
        </main>);
}

export default PageTemplate;
