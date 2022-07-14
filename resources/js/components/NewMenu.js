import React from 'react';

function NewMenu(props) {
    return (
        <ul className="w-52 py-1">
            <li className="text-gray-400 px-1 text-xs mb-1 font-semibold">
                Content
            </li>
            <li>
                <a
                    href=""
                    className="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center"
                >
                    <i className="mdi mdi-plus mr-1 text-lg"></i>
                    New Course
                </a>
            </li>
            <li className="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                <i className="mdi mdi-plus mr-1 text-lg"></i>
                New Quiz
            </li>
            <li className="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                <i className="mdi mdi-plus mr-1 text-lg"></i>
                New Manual
            </li>

            <li className="border-t -mx-2 my-2"></li>

            <li className="text-gray-400 px-1 text-xs mb-1 font-semibold">
                Users
            </li>
            <li className="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                <i className="mdi mdi-plus mr-1 text-lg"></i>
                Add New User
            </li>
            <li className="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                <i className="mdi mdi-plus mr-1 text-lg"></i>
                Create New Group
            </li>

            <li className="border-t -mx-2 my-2"></li>

            <li className="text-gray-400 px-1 text-xs mb-1 font-semibold">
                Files & Folders
            </li>
            <li className="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                <i className="mdi mdi-plus mr-1 text-lg"></i>
                Upload File
            </li>
            <li className="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                <i className="mdi mdi-plus mr-1 text-lg"></i>
                Create New Folder
            </li>
        </ul>
    );
}

export default NewMenu;
