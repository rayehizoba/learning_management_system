import React from 'react';
import GridListToggle from "./GridListToggle";
import classNames from "classnames";
import ModalLink from "./ModalLink";
import {useSelector} from "react-redux";
import {selectCourse} from "../store/course/course.selectors";

function CourseLearner(props) {
    const course = useSelector(selectCourse);
    return (
        <section>
            <div className="bg-gray-100 border-b p-5 py-3">
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-3 space-y-3 lg:space-y-0 ">
                    <div className="relative">
                        <label htmlFor="search" className="absolute left-0 inset-y-0 grid place-content-center w-10">
                            <i className="mdi mdi-magnify text-2xl text-gray-400"></i>
                        </label>
                        <input
                            id="search"
                            type="text"
                            className="p-2 pl-10 border focus:border-teal-600 outline-none transition rounded-md w-full md:w-96"
                            placeholder="Email, Name"
                        />
                    </div>
                    <ol className="flex flex-wrap md:flex-nowrap items-center w-full space-x-3">
                        <li>
                            <button className="btn-outline !py-1.5 flex items-center whitespace-nowrap">
                                <i className="text-lg mdi mdi-filter-variant mr-1"></i>
                                Filter
                            </button>
                        </li>
                        <li>
                            <button className="btn-outline !py-1.5 flex items-center whitespace-nowrap">
                                <i className="text-lg mdi mdi-sort-variant mr-1"></i>
                                Sort
                            </button>
                        </li>
                        <li className="!ml-auto">
                            <GridListToggle />
                        </li>
                        <li className="!ml-0 md:!ml-3 w-full md:w-auto mt-3 md:mt-0">
                            <ModalLink
                                to={`/courses/${course.id}/assign`}
                                className={classNames(
                                    'btn-primary !px-8 w-full',
                                    !course.published && 'disabled'
                                )}
                            >
                                <i className="mdi mdi-plus"></i>
                                Assign Learner
                            </ModalLink>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-b text-sm md:text-base">
                    <thead className="border-b text-gray-400 whitespace-nowrap">
                    <tr>
                        <th className="pl-5 py-3 font-normal">
                            <div className="flex items-center space-x-3">
                                <label className="text-2xl text-teal-500">
                                    <input type="checkbox" className="peer sr-only"/>
                                    <i className="mdi mdi-checkbox-marked hidden peer-checked:block"></i>
                                    <i className="mdi mdi-checkbox-blank-outline peer-checked:hidden"></i>
                                </label>
                                <p>Learner Name</p>
                            </div>
                        </th>
                        <th className="px-5 font-normal">
                            Date Assigned
                        </th>
                        <th className="px-5 font-normal">
                            Status
                        </th>
                        <th className="px-5 font-normal">
                            Reaction Score
                        </th>
                        <th className="px-5 font-normal">
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y">
                    {Array(10).fill().map((_, index) => (
                        <tr key={index}>
                            <td className="pl-5 py-5">
                                <div className="flex items-center space-x-3">
                                    <label className="text-2xl text-teal-500">
                                        <input value={false} type="checkbox" className="peer sr-only"/>
                                        <i className="mdi mdi-checkbox-marked hidden peer-checked:block"></i>
                                        <i className="mdi mdi-checkbox-blank-outline peer-checked:hidden"></i>
                                    </label>
                                    <div className="aspect-[1/1] w-10 bg-gray-200 rounded-full"></div>
                                    <p className="whitespace-nowrap">Jerry Paula</p>
                                </div>
                            </td>
                            <td className="px-5">
                                <p>Dec 29, 2022</p>
                            </td>
                            <td className="px-5 lg:max-w-[16ch] xl:max-w-[12ch]">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center space-x-5">
                                        <p className="text-xs text-gray-400 font-semibold">Completed</p>
                                        <p className="text-sm font-medium">100%</p>
                                    </div>
                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="bg-teal-500 h-full rounded-full" style={{width: '90%'}}></div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5">
                                <p>100% Useful</p>
                            </td>
                            <td className="px-5">
                                <button
                                    className="w-5 h-5 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-gray-400 hover:text-white">
                                    <i className="mdi mdi-dots-vertical text-2xl"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default CourseLearner;
