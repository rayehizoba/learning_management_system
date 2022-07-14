import React from 'react';
import PageTemplate from "./PageTemplate";
import AsideToggleBtn from "../components/AsideToggleBtn";
import Spinner from "../components/Spinner";

function CourseEditPage(props) {
    return (
        <PageTemplate
            header={(
                <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-3 justify-between">
                    <div className="flex items-center flex-1">
                        <AsideToggleBtn className="lg:hidden"/>
                        <div className="h-10 md:h-7 border-l border-gray-300 mx-3 md:mx-5"></div>
                        <div
                            className="flex flex-col lg:flex-row lg:flex-1 lg:items-center lg:justify-between lg:space-x-3">
                            <div className="text-xl font-bold whitespace-nowrap">
                                Create Course
                            </div>
                            {/*<p className="text-sm text-gray-400 font-medium">*/}
                            {/*    Last Saved: March 17, 2021*/}
                            {/*</p>*/}
                        </div>
                    </div>

                    <ul className="grid grid-cols-3 gap-3 h-full lg:w-2/5">
                        <li>
                            <button className="btn-outline h-10 w-full">
                                Preview
                            </button>
                        </li>
                        <li>
                            <div className="relative">
                                <select className="btn-outline h-10 w-full appearance-none outline-none">
                                    <option value="0">Draft</option>
                                    <option value="1">Published</option>
                                </select>
                                <div className="absolute right-4 inset-y-0 grid place-content-center">
                                    <i className="mdi mdi-chevron-down text-gray-400"></i>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button
                                className="btn-primary h-10 w-full"
                                type="button"
                            >
                                <Spinner/>
                                Save
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        >

        </PageTemplate>
    );
}

export default CourseEditPage;
