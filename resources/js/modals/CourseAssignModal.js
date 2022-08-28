import React from 'react';
import ModalTemplate from "./ModalTemplate";
import useModal from "../lib/useModal";

function CourseAssignModal(props) {
    const {dismiss, dismissed} = useModal();
    return (
        <ModalTemplate
            title="Assign to course"
            className="max-w-5xl"
        >
            {/* Modal header */}
            <nav className="px-5">
                <ul className="text-sm flex items-center space-x-8">
                    <li className="border-b-2 border-yellow-500 py-2 relative cursor-pointer before:absolute before:-inset-x-2 before:inset-y-1 before:rounded hover:before:bg-gray-100 before:transition">
                        <span className="relative z-10">Individuals</span>
                    </li>
                    <li className="border-b-2 border-white text-gray-400 py-2 relative cursor-pointer before:absolute before:-inset-x-2 before:inset-y-1 before:rounded hover:before:bg-gray-100 before:transition">
                        <span className="relative z-10">Group</span>
                    </li>
                </ul>
            </nav>

            {/* Modal body */}
            <div className="border-y max-h-[70vh] md:max-h-[60vh] overflow-y-auto">
                <div className="bg-gray-100 border-b p-5 py-3 sticky top-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-3 space-y-3 lg:space-y-0 ">
                        <div className="relative">
                            <label htmlFor="search"
                                   className="absolute left-0 inset-y-0 grid place-content-center w-10">
                                <i className="mdi mdi-magnify text-2xl text-gray-400"></i>
                            </label>
                            <input id="search" type="text"
                                   className="p-2 pl-10 border focus:border-teal-600 outline-none transition rounded-md w-full md:w-96"
                                   placeholder="Name, Email, Group"/>
                        </div>
                        <ol className="flex flex-wrap md:flex-nowrap items-center w-full space-x-3">
                            <li>
                                <button className="btn-outline !py-1.5 flex items-center bg-white">
                                    <i className="text-lg mdi mdi-filter-variant mr-1"></i>
                                    Filter
                                </button>
                            </li>
                            <li>
                                <button className="btn-outline !py-1.5 flex items-center bg-white">
                                    <i className="text-lg mdi mdi-sort-variant mr-1"></i>
                                    Sort
                                </button>
                            </li>
                            <li className="!ml-auto">
                                2 people selected
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-b">
                        <thead className="border-b text-xs whitespace-nowrap">
                        <tr>
                            <th className="pl-5 py-3">
                                Name
                            </th>
                            <th className="px-5">
                                Email
                            </th>
                            <th className="px-5">
                                Department
                            </th>
                            <th className="px-5">
                                Group
                            </th>
                            <th className="pr-5">
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y">
                        {Array(10).fill().map((each, index) => (
                            <tr key={index}>
                                <td className="pl-5 py-3">
                                    <div className="flex items-center space-x-5">
                                        <div>
                                            <figure className="w-16 aspect-[1/1] rounded-full bg-blue-100">
                                            </figure>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-semibold line-clamp-2">
                                                Jack Bower Samuel
                                            </p>
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className="inline bg-green-100 text-green-700 text-xs p-1 px-2 rounded font-semibold">
                                                    Active
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5">
                                    <div className="text-sm">
                                        fakeusername@foo.com
                                    </div>
                                </td>
                                <td className="px-5">
                                    <div className="flex items-center space-x-1 text-sm">
                                        <span>Design</span>
                                    </div>
                                </td>
                                <td className="px-5">
                                    <div className="flex items-center space-x-1 text-sm">
                                        Design Team
                                    </div>
                                </td>
                                <td className="pr-5">
                                    <label className="text-2xl text-teal-500">
                                        <input type="checkbox" className="peer sr-only"/>
                                        <i className="mdi mdi-checkbox-marked hidden peer-checked:block"></i>
                                        <i className="mdi mdi-checkbox-blank-outline peer-checked:hidden"></i>
                                    </label>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal footer */}
            <footer className="flex items-center justify-end p-5 space-x-3">
                <button
                    type="button"
                    onClick={dismiss}
                    className="btn-outline !px-10"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={dismiss}
                    className="btn-primary !px-10"
                >
                    Assign
                </button>
            </footer>
        </ModalTemplate>
    );
}

export default CourseAssignModal;