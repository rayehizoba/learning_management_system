import React from 'react';
import classNames from "classnames";

function GridListToggle({defaultValue = true, onChange}) {
    const [grid, setGrid] = React.useState(defaultValue);

    React.useEffect(() => {
        if (typeof onChange === 'function') onChange(grid);
    }, [grid]);

    return (
        <div className="rounded-md border-2 border-gray-200 bg-gray-200 relative">
            <div className="flex relative z-[1]">
                <button onClick={() => setGrid(true)} className="w-8 aspect-square flex items-center justify-center">
                    <i className="mdi mdi-view-grid-outline text-xl"></i>
                </button>
                <button onClick={() => setGrid(false)} className="w-8 aspect-square flex items-center justify-center">
                    <i className="mdi mdi-format-list-bulleted text-xl"></i>
                </button>
            </div>
            <div
                className={classNames(
                    "absolute inset-0 w-1/2 aspect-square bg-white rounded transform transition",
                    grid ? '' : 'translate-x-full'
                )}
            ></div>
        </div>

    );
}

export default GridListToggle;
