import React from 'react';
import classNames from "classnames";
import {useSelector} from "react-redux";
import {selectAside} from "../store/app/app.selectors";

function GridView({collection, renderItem, emptyText = 'No items yet'}) {
    const aside = useSelector(selectAside);
    return (
        <ul
            className={classNames(
                "grid grid-cols-1 sm:grid-cols-2 p-5 gap-7",
                aside ? 'xl:grid-cols-3' : 'lg:grid-cols-3 xl:grid-cols-4'
            )}
        >
            {collection.map((each, index) => <li key={each.id}>{renderItem(each, index)}</li>)}
            {collection.length === 0 && (<li>{emptyText}</li>)}
        </ul>
    );
}

export default GridView;
