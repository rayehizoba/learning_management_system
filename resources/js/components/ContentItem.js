import React from 'react';
import moment from "moment";
import classNames from "classnames";

function ContentItem({active, model, defaultName}) {
    return (
        <div
            className={classNames(
                "border-l-4 p-4 px-1 cursor-pointer transition-all",
                active ? '!border-l-yellow-400 bg-blue-100/50' : '!border-l-gray-400 hover:bg-gray-100/50'
            )}
        >
            <div className="flex items-center space-x-1">
                <i className="mdi mdi-drag-vertical text-gray-400 text-2xl cursor-grab"></i>
                <div>
                    <p className="">
                        {model.name || defaultName}
                    </p>
                    <p className="text-gray-400 text-xs">
                        Updated: {moment(model.updated_at).format("MMM D, YYYY h:mma")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContentItem;
