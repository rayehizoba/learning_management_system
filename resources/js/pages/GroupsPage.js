import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PageTemplate from "./PageTemplate";
import * as groupsActions from "../store/groups/groups.actions";
import {
    selectGroupsFetch,
    selectGroupsFetchError,
    selectGroupsFetchSuccess
} from "../store/groups/groups.selectors";
import GridListToggle from "../components/GridListToggle";
import PublishedState from "../components/PublishedState";
import CourseSettingsMenu from "../components/CourseSettingsMenu";
import Tippy from "../components/Tippy";
import ApiError from "../components/ApiError";
import {selectGrid} from "../store/app/app.selectors";
import * as appActions from "../store/app/app.actions";
import {selectGroups} from "../store/groups/groups.selectors";
import moment from "moment";

function UsersPage() {
    const dispatch = useDispatch();
    const groups = useSelector(selectGroups);
    const groupsFetch = useSelector(selectGroupsFetch);
    const groupsFetchSuccess = useSelector(selectGroupsFetchSuccess);
    const groupsFetchError = useSelector(selectGroupsFetchError);
    const grid = useSelector(selectGrid);
    const onChangeGrid = value => dispatch(appActions.setGrid(value));

    const onClickGroup = group => () => {
        // dispatch(groupActions.setGroup(group));
    }

    React.useEffect(() => {
        if (!groupsFetchSuccess) {
            dispatch(groupsActions.fetchGroups());
        }
    }, []);

    return (
        <PageTemplate title="Groups">
            <header className="p-5 pb-0 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-5">
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="text-2xl font-bold">
                        {groupsFetch
                            ? <div className="text-gray-400">Fetching Groups...</div>
                            : <div>{groups.length} <span className="text-gray-400">Groups in total</span></div>
                        }
                    </div>
                    <ol className="flex justify-between md:justify-end items-center h-full space-x-7">
                        <ol className="flex items-center h-full space-x-7">
                            <li>
                                <button
                                    className="text-gray-400 hover:opacity-50 transition text-sm flex items-center whitespace-nowrap">
                                    <i className="text-lg mdi mdi-check-circle-outline mr-1"></i>
                                    All status
                                </button>
                            </li>
                            <li>
                                <button
                                    className="text-gray-400 hover:opacity-50 transition text-sm flex items-center whitespace-nowrap">
                                    <i className="text-lg mdi mdi-filter-variant mr-1"></i>
                                    Filter
                                </button>
                            </li>
                            <li>
                                <button
                                    className="text-gray-400 hover:opacity-50 transition text-sm flex items-center whitespace-nowrap">
                                    <i className="text-lg mdi mdi-sort-variant mr-1"></i>
                                    Sort
                                </button>
                            </li>
                        </ol>
                        <li>
                            <GridListToggle
                                defaultValue={grid}
                                onChange={onChangeGrid}
                            />
                        </li>
                    </ol>
                </div>
                <div className="">
                    <Link to="/groups/create" className="w-full btn-primary md:w-48">
                        + New Group
                    </Link>
                </div>
            </header>

            <ApiError error={groupsFetchError} className="px-5"/>

            {groupsFetchSuccess && (
                <>
                    {/*{grid && ()}*/}

                    {grid || (
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full text-left border-y mt-5">
                                <thead className="border-b text-gray-400 text-xs whitespace-nowrap">
                                <tr>
                                    <th className="pl-5 py-3">
                                        Group Name
                                    </th>
                                    <th className="px-5">
                                        Total Members
                                    </th>
                                    <th className="px-5">
                                        Total Programs
                                    </th>
                                    <th className="px-5">
                                        Date Created
                                    </th>
                                    <th className="pr-5">
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y">
                                {groups.map(each => (
                                    <tr key={each.id}>
                                        <td className="pl-5 py-5">
                                            <div className="flex items-center space-x-5">
                                                <figure
                                                    className="flex-shrink-0 w-28 aspect-[7/4] rounded-md bg-gray-100 text-gray-200 grid place-content-center">
                                                    <i className="mdi mdi-image text-4xl"></i>
                                                </figure>
                                                <p className="font-semibold line-clamp-2 text-sm">
                                                    {each.name}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-5">
                                            <div className="flex items-center -space-x-4">
                                                <div
                                                    className="w-9 aspect-[1/1] rounded-full border-2 border-white bg-gray-100"></div>
                                                <div
                                                    className="w-9 aspect-[1/1] rounded-full border-2 border-white bg-gray-100"></div>
                                                <div
                                                    className="w-9 aspect-[1/1] rounded-full border-2 border-white bg-gray-100"></div>
                                                <div
                                                    className="w-9 aspect-[1/1] rounded-full border-2 border-white bg-yellow-400 text-xs text-white grid place-content-center">
                                                    +21
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5">
                                            <div className="flex items-center space-x-1 text-sm">
                                                8 Programs
                                            </div>
                                        </td>
                                        <td className="px-5">
                                            <div className="flex items-center space-x-1 text-sm">
                                                {moment(each.created_at).format("MMM D, YYYY")}
                                            </div>
                                        </td>
                                        <td className="pr-5">
                                            <div className="flex items-center space-x-5">
                                                <button className="btn-primary-outline !px-10 text-sm">
                                                    <i className="mdi mdi-plus"></i>
                                                    Assign
                                                </button>
                                                <button
                                                    className="w-5 h-5 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-gray-400 hover:text-white">
                                                    <i className="mdi mdi-dots-horizontal text-2xl"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {[].map(each => (
                                    <tr key={each.id}>
                                        <td className="pl-4 md:pl-5 py-5">
                                            <Link
                                                onClick={onClickGroup(each)}
                                                to={'/groups/' + each.id}
                                                className="flex items-center space-x-5 group"
                                            >
                                                <figure
                                                    className="flex-shrink-0 w-28 aspect-[5/2] bg-gray-300 text-gray-100 grid place-content-center">
                                                    <i className="mdi mdi-image text-4xl"></i>
                                                </figure>
                                                <div className="space-y-1">
                                                    <p className="min-w-[16ch] font-semibold line-clamp-2 text-sm group-hover:underline">
                                                        {each.name}
                                                    </p>
                                                    <PublishedState published={each.published}/>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className="px-5">
                                            {each.published ? (
                                                <div className="flex items-center space-x-1 text-sm whitespace-nowrap">
                                                    <i className="mdi mdi-account-circle-outline"></i>
                                                    <span>24 Learners</span>
                                                </div>
                                            ) : '-'}
                                        </td>
                                        <td className="px-5">
                                            <div className="flex items-center space-x-1 text-sm">
                                                <i className="mdi mdi-license"></i>
                                                <span>Design</span>
                                            </div>
                                        </td>
                                        <td className="px-5">
                                            {each.published ? (
                                                <div className="flex items-center space-x-1 text-sm">
                                                    <i className="mdi mdi-check-circle-outline"></i>
                                                    <p>65%</p>
                                                </div>
                                            ) : '-'}
                                        </td>
                                        <td className="px-5">
                                            {each.published ? (
                                                <div className="flex items-center space-x-1 text-sm whitespace-nowrap">
                                                    <i className="mdi mdi-emoticon-outline"></i>
                                                    <p>50% Useful</p>
                                                </div>
                                            ) : '-'}
                                        </td>
                                        <td className="pr-4 md:pr-5">
                                            <div className="flex justify-end items-center space-x-5">
                                                <button
                                                    disabled={!each.published}
                                                    className="btn-primary-outline !px-10 text-sm"
                                                >
                                                    <i className="mdi mdi-plus"></i>
                                                    Assign
                                                </button>
                                                <Tippy content={<CourseSettingsMenu course={each}/>}>
                                                    <button
                                                        className="h-5 w-5 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-gray-400 hover:text-white"
                                                        type="button"
                                                    >
                                                        <i className="mdi mdi-dots-vertical text-2xl"></i>
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {groups.length === 0 && (
                                    <tr>
                                        <td colSpan="6">
                                            <p>No groups yet</p>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}

        </PageTemplate>
    );
}

export default UsersPage;
