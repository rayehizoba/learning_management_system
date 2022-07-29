import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PageTemplate from "./PageTemplate";
import * as usersActions from "../store/users/users.actions";
import {
    selectUsersFetch,
    selectUsersFetchError,
    selectUsersFetchSuccess
} from "../store/users/users.selectors";
import GridListToggle from "../components/GridListToggle";
import PublishedState from "../components/PublishedState";
import CourseSettingsMenu from "../components/CourseSettingsMenu";
import Tippy from "../components/Tippy";
import ApiError from "../components/ApiError";
import {selectGrid} from "../store/app/app.selectors";
import * as appActions from "../store/app/app.actions";
import {selectUsers} from "../store/users/users.selectors";
import moment from "moment";

function UsersPage() {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const usersFetch = useSelector(selectUsersFetch);
    const usersFetchSuccess = useSelector(selectUsersFetchSuccess);
    const usersFetchError = useSelector(selectUsersFetchError);
    const grid = useSelector(selectGrid);
    const onChangeGrid = value => dispatch(appActions.setGrid(value));

    const onClickUser = user => () => {
        // dispatch(userActions.setUser(user));
    }

    React.useEffect(() => {
        if (!usersFetchSuccess) {
            dispatch(usersActions.fetchUsers());
        }
    }, []);

    return (
        <PageTemplate title="Individuals">
            <header className="p-5 pb-0 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-5">
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="text-2xl font-bold">
                        {usersFetch
                            ? <div className="text-gray-400">Fetching Users...</div>
                            : <div>{users.length} <span className="text-gray-400">Users in total</span></div>
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
                    <Link to="/users/create" className="w-full btn-primary md:w-48">
                        + User
                    </Link>
                </div>
            </header>

            <ApiError error={usersFetchError} className="px-5"/>

            {usersFetchSuccess && (
                <>
                    {/*{grid && ()}*/}

                    {grid || (
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full text-left border-y mt-5">
                                <thead className="border-b text-gray-400 text-xs whitespace-nowrap">
                                <tr>
                                    <th className="pl-5 py-3">
                                        User
                                    </th>
                                    <th className="px-5">
                                        Contact
                                    </th>
                                    <th className="px-5">
                                        Department
                                    </th>
                                    <th className="px-5">
                                        Group
                                    </th>
                                    <th className="px-5">
                                        Date Added
                                    </th>
                                    <th className="pr-5">
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y">
                                {users.map(each => (
                                    <tr key={each.id}>
                                        <td className="pl-5 py-5">
                                            <div className="flex items-center space-x-5">
                                                <div>
                                                    <figure className="w-16 aspect-[1/1] rounded-full bg-gray-100 text-gray-200 grid place-content-center">
                                                        <i className="mdi mdi-account text-4xl"></i>
                                                    </figure>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="font-semibold line-clamp-2">
                                                        {each.name}
                                                    </p>
                                                    <div className="flex items-center space-x-2">
                                                        <div
                                                            className="inline bg-green-100 text-green-700 text-xs p-1 px-2 rounded font-semibold">
                                                            Active
                                                        </div>
                                                        <div
                                                            className="inline bg-yellow-100 text-yellow-700 text-xs p-1 px-2 rounded font-semibold">
                                                            Learner
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5">
                                            <div className="flex-col space-y-1 text-sm">
                                                <div className="flex items-center space-x-2">
                                                    <i className="mdi mdi-email-outline text-2xl text-gray-400"></i>
                                                    <span>{each.email}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <i className="mdi mdi-phone-outline text-2xl text-gray-400"></i>
                                                    <span>{each.phone}</span>
                                                </div>
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
                                        <td className="px-5">
                                            <div className="flex items-center space-x-1 text-sm whitespace-nowrap">
                                                {moment(each.created_at).format("MMM D, YYYY")}
                                            </div>
                                        </td>
                                        <td className="pr-5">
                                            <div className="flex items-center space-x-5">
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
                                                onClick={onClickUser(each)}
                                                to={'/users/' + each.id}
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
                                {users.length === 0 && (
                                    <tr>
                                        <td colSpan="6">
                                            <p>No users yet</p>
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
