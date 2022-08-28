import React from 'react';
import PageTemplate from "./PageTemplate";
import {useDispatch, useSelector} from "react-redux";
import {
    selectLearningPaths,
    selectLearningPathsFetch, selectLearningPathsFetchError,
    selectLearningPathsFetchSuccess
} from "../store/learningPaths/learningPaths.selectors";
import * as learningPathsActions from "../store/learningPaths/learningPaths.actions";
import ApiError from "../components/ApiError";

function LearningPathsPage(props) {
    const dispatch = useDispatch();
    const paths = useSelector(selectLearningPaths);
    const pathsFetch = useSelector(selectLearningPathsFetch);
    const pathsFetchSuccess = useSelector(selectLearningPathsFetchSuccess);
    const pathsFetchError = useSelector(selectLearningPathsFetchError);

    React.useEffect(() => {
        if (!pathsFetchSuccess) {
            dispatch(learningPathsActions.fetchLearningPaths());
        }
    }, []);

    return (
        <PageTemplate title="Learning Paths">
            <header
                className="p-5 border-b flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-5">
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="text-2xl font-bold">
                        {pathsFetch
                            ? <div className="text-gray-400">Fetching Learning Paths...</div>
                            : <div>{paths.length} <span className="text-gray-400">Learning Paths in total</span></div>
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
                    </ol>
                </div>
                <div className="">
                    <a href="#" className="w-full btn-primary">
                        + New Learning Path
                    </a>
                </div>
            </header>

            <ApiError error={pathsFetchError} className="px-5" />

            {pathsFetchSuccess && (
                <ul className="p-5 space-y-4">
                    {paths.map(each => (
                        <li key={each.id}>
                            <div className="border rounded-lg overflow-hidden flex">
                                <figure className="w-2/6 aspect-[2/1.5] bg-gray-100"></figure>
                                <div className="w-4/6 p-5 space-y-3">
                                    <ul className="flex flex-wrap items-center space-x-3 text-gray-400">
                                        <li>
                                            <div className="bg-green-100 text-green-700 text-xs p-1 px-2 rounded-md">
                                                <i className="mdi mdi-web"></i>
                                                Published
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center space-x-1 text-gray-400">
                                                <i className="mdi mdi-license"></i>
                                                <span className="text-xs">Design</span>
                                            </div>
                                        </li>
                                        <li>•</li>
                                        <li>
                                            <div className="flex items-center space-x-1 text-gray-400">
                                                <i className="mdi mdi-calendar-month-outline"></i>
                                                <span className="text-xs">Created: March 7 2022</span>
                                            </div>
                                        </li>
                                        <li>•</li>
                                        <div className="flex items-center space-x-1 text-gray-400">
                                            <i className="mdi mdi-eye-outline"></i>
                                            <span className="text-xs">Public</span>
                                        </div>
                                    </ul>
                                    <p className="font-semibold text-lg">
                                        {each.name}
                                    </p>
                                    <p className="text-sm text-gray-400 line-clamp-2">
                                        {each.description}
                                    </p>
                                    <hr/>
                                    <div className="divide-x flex space-x-5">
                                        <div className="w-1/2 space-y-2">
                                            <p className="font-semibold text-sm">
                                                Contents
                                            </p>
                                            <div className="grid grid-cols-3 gap-2">
                                                <div
                                                    className="aspect-[1.5/1] w-full bg-purple-100 text-purple-700 rounded-md grid place-content-center text-center leading-none">
                                                    <p className="font-bold">8</p>
                                                    <p className="text-xs">Courses</p>
                                                </div>
                                                <div
                                                    className="aspect-[1.5/1] w-full bg-yellow-100 text-yellow-700 rounded-md grid place-content-center text-center leading-none">
                                                    <p className="font-bold">2</p>
                                                    <p className="text-xs">Quizzes</p>
                                                </div>
                                                <div
                                                    className="aspect-[1.5/1] w-full bg-green-100 text-green-700 rounded-md grid place-content-center text-center leading-none">
                                                    <p className="font-bold">5</p>
                                                    <p className="text-xs">Manuals</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 flex flex-col justify-center space-y-4">
                                            <div className="flex items-center space-x-2 px-5">
                                                <p className="text-sm font-semibold">
                                                    Total Learner
                                                </p>
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
                                            </div>
                                            <div className="flex items-center space-x-2 px-5">
                                                <p className="text-sm font-semibold">
                                                    Completion Rate
                                                </p>
                                                <p className="text-teal-500 text-sm">
                                                    75% Completed this path
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </PageTemplate>
    );
}

export default LearningPathsPage;
