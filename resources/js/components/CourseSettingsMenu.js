import React from 'react';

function CourseSettingsMenu(props) {
    return (
        <ul className="w-44 py-1">
            <li className="hover:bg-gray-100 hover:text-gray-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                <i className="mdi mdi-lock-outline mr-1 text-lg opacity-50"></i>
                Lock Course
                <label className="w-10 aspect-[2/1] relative ml-auto rounded-full">
                    <input type="checkbox" className="sr-only peer"/>
                    <span
                        className="absolute inset-0 rounded-full bg-gray-100 peer-checked:bg-teal-100 transition border peer-checked:border-teal-500"></span>
                    <span
                        className="w-1/2 aspect-[1/1] rounded-full shadow bg-white transform scale-75 transition-all left-0 absolute peer-checked:left-1/2 peer-checked:bg-teal-500"></span>
                </label>
            </li>
            <li>
                <a
                    href="#"
                    className="hover:bg-gray-100 hover:text-gray-600 p-0.5 px-1 cursor-pointer font-medium flex items-center"
                >
                    <i className="mdi mdi-pencil-outline mr-1 text-lg opacity-50"></i>
                    Edit Course
                </a>
            </li>
            <li className="hover:bg-gray-100 hover:text-gray-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                <i className="mdi mdi-history mr-1 text-lg opacity-50"></i>
                Edit History
            </li>
            <li className="hover:bg-gray-100 hover:text-gray-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                <i className="mdi mdi-export-variant mr-1 text-lg opacity-50"></i>
                Export Course
            </li>
            <li className="hover:bg-red-100 text-red-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                <i className="mdi mdi-trash-can-outline mr-1 text-lg opacity-50"></i>
                Delete Course
            </li>
        </ul>
    );
}

export default CourseSettingsMenu;
