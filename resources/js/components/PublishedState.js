import React from 'react';

function PublishedState({published}) {
    if (published) return (
        <div className="inline-flex bg-green-100 text-green-600 text-xs p-1 px-2 rounded-md">
            <i className="mdi mdi-web mr-1"></i>
            Published
        </div>
    );
    return (
        <div className="inline-flex bg-gray-100 text-gray-500 text-xs p-1 px-2 rounded-md">
            <i className="mdi mdi-square-edit-outline mr-1"></i>
            Draft
        </div>
    );
}

export default PublishedState;
