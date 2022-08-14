import React from 'react';
import {Link} from "react-router-dom";

function NewMenu(props) {
    return (
        <ul className="w-52 py-1">
            <li className="text-gray-400 px-1 text-xs mb-1 font-semibold">
                Content
            </li>
            <li>
                <Link
                    to="/courses/create"
                    className="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center"
                >
                    <i className="mdi mdi-plus mr-1 text-lg"></i>
                    New Course
                </Link>
            </li>
            <li>
                <Link
                    to="/quizzes/create"
                    className="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center"
                >
                    <i className="mdi mdi-plus mr-1 text-lg"></i>
                    New Quiz
                </Link>
            </li>
            <li className="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                <i className="mdi mdi-plus mr-1 text-lg"></i>
                New Manual
            </li>

            <li className="border-t -mx-2 my-2"></li>

            <li className="text-gray-400 px-1 text-xs mb-1 font-semibold">
                Users
            </li>
            <li>
                <Link
                    to="/users/create"
                    className="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center"
                >
                    <i className="mdi mdi-plus mr-1 text-lg"></i>
                    Add New User
                </Link>
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
