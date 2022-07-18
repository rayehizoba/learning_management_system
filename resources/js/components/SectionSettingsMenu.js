import React from 'react';
import {useDispatch} from "react-redux";

function SectionSettingsMenu({section}) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        if (confirm('Are you sure ?')) {
            // dispatch(courseActions.deleteCourse(course.id));
        }
    };
    return (
        <ul className="w-44 py-1">
            <li
                onClick={handleDelete}
                className="hover:bg-red-100 text-red-600 p-0.5 px-1 cursor-pointer font-medium flex items-center"
            >
                <i className="mdi mdi-trash-can-outline mr-1 text-lg opacity-50"></i>
                Delete Section
            </li>
        </ul>
    );
}

export default SectionSettingsMenu;
