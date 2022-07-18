import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PageTemplate from "./PageTemplate";
import * as coursesActions from "../store/courses/courses.actions";
import {
    selectCourses,
    selectCoursesFetch,
    selectCoursesFetchError,
    selectCoursesFetchSuccess
} from "../store/courses/courses.selectors";
import GridListToggle from "../components/GridListToggle";
import GridView from "../components/GridView";
import CourseGridItem from "../components/CourseGridItem";
import PublishedState from "../components/PublishedState";
import CourseSettingsMenu from "../components/CourseSettingsMenu";
import Tippy from "../components/Tippy";
import ApiError from "../components/ApiError";
import {selectGrid} from "../store/app/app.selectors";
import * as appActions from "../store/app/app.actions";
import * as courseActions from "../store/course/course.actions";

function CoursesPage() {
    const dispatch = useDispatch();
    const courses = useSelector(selectCourses);
    const coursesFetch = useSelector(selectCoursesFetch);
    const coursesFetchSuccess = useSelector(selectCoursesFetchSuccess);
    const coursesFetchError = useSelector(selectCoursesFetchError);
    const grid = useSelector(selectGrid);
    const onChangeGrid = value => dispatch(appActions.setGrid(value));

    const onClickCourse = course => () => {
        dispatch(courseActions.setCourse(course));
    }

    React.useEffect(() => {
        if (!coursesFetchSuccess) {
            dispatch(coursesActions.fetchCourses());
        }
    }, []);

    return (
        <PageTemplate title="Courses">
            <header className="p-5 pb-0 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-5">
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="text-2xl font-bold">
                        {coursesFetch
                            ? <div className="text-gray-400">Fetching Courses...</div>
                            : <div>{courses.length} <span className="text-gray-400">Courses in total</span></div>
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
                    <Link to="/courses/create" className="w-full btn-primary md:w-48">
                        + New Course
                    </Link>
                </div>
            </header>

            <ApiError error={coursesFetchError} className="px-5"/>

            {coursesFetchSuccess && (
                <>
                    {grid && (
                        <GridView
                            collection={courses}
                            renderItem={(each) => <CourseGridItem course={each}/>}
                        />
                    )}

                    {grid || (
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full text-left border-y mt-5">
                                <thead className="border-b text-gray-400 text-xs whitespace-nowrap">
                                <tr>
                                    <th className="pl-4 md:pl-5 py-3">
                                        Course Name
                                    </th>
                                    <th className="px-5">
                                        Total Learners
                                    </th>
                                    <th className="px-5">
                                        Category
                                    </th>
                                    <th className="px-5">
                                        Completion Rate
                                    </th>
                                    <th className="px-5">
                                        Reaction Score
                                    </th>
                                    <th className="pr-4 md:pr-5">
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y">
                                {courses.map(each => (
                                    <tr key={each.id}>
                                        <td className="pl-4 md:pl-5 py-5">
                                            <Link
                                                onClick={onClickCourse(each)}
                                                to={'/courses/' + each.id}
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
                                {courses.length === 0 && (
                                    <tr>
                                        <td colSpan="6">
                                            <p>No courses yet</p>
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

export default CoursesPage;
