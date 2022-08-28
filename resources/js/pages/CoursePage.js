import React from 'react';
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {Link, Outlet, useParams} from "react-router-dom";
import CourseSettingsMenu from "../components/CourseSettingsMenu";
import {
    selectCourse,
    selectCourseFetch,
    selectCourseFetchError,
    selectCourseFetchSuccess
} from "../store/course/course.selectors";
import PageTemplate from "./PageTemplate";
import * as appActions from "../store/app/app.actions";
import * as courseActions from "../store/course/course.actions";
import PublishedState from "../components/PublishedState";
import ApiError from "../components/ApiError";
import TabLink from "../components/TabLink";
import Tippy from "../components/Tippy";

function CoursePage(props) {
    const dispatch = useDispatch();
    const {course_id} = useParams();
    const course = useSelector(selectCourse);
    const courseFetch = useSelector(selectCourseFetch);
    const courseFetchSuccess = useSelector(selectCourseFetchSuccess);
    const courseFetchError = useSelector(selectCourseFetchError);

    React.useEffect(() => {
        if (course_id && !courseFetchSuccess) {
            dispatch(courseActions.fetchCourse(course_id));
        }
        return () => {
            dispatch(appActions.clearErrors());
        }
    }, []);

    const apiError = <ApiError error={courseFetchError}/>

    const pageContent = course && (
        <>
            <section className="p-4 md:p-5 space-y-5">
                {/* Cover Image */}
                <header
                    className="rounded-lg group aspect-[5/2] bg-gray-200 w-full relative grid place-content-center">
                    <i className="mdi mdi-image text-7xl md:text-9xl text-gray-100"></i>
                    <div
                        className="rounded-lg md:pointer-events-none group-hover:pointer-events-auto md:opacity-0 group-hover:opacity-100 transition absolute inset-0 top-0 bg-gradient-to-b from-transparent to-black/25 grid place-content-end">
                        <input type="file" accept="image/*" className="hidden"/>
                        <button
                            className="btn-outline m-3 md:m-5 font-semibold flex items-center space-x-1 text-sm"
                        >
                            <i className="mdi mdi-camera-outline text-lg"></i>
                            <span>Update Cover</span>
                        </button>
                    </div>
                </header>

                {/* Overview */}
                <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-5">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                        {course.name}
                    </p>
                    <ul className="flex items-center space-x-3 md:space-x-4">
                        <Link
                            to={'/courses/' + course.id + '/edit'}
                            className="btn-outline font-semibold flex items-center space-x-1"
                        >
                            <i className="mdi mdi-pencil-outline text-lg"></i>
                            <span>Edit Course</span>
                        </Link>
                        <button className="btn-outline font-semibold flex items-center space-x-1">
                            <i className="mdi mdi-eye-outline text-lg"></i>
                            <span>Preview as Learner</span>
                        </button>
                        <Tippy content={<CourseSettingsMenu course={course}/>}>
                            <button
                                type="button"
                                className="btn-outline w-12 aspect-square font-semibold grid place-content-center"
                            >
                                <i className="mdi mdi-cog-outline text-lg"></i>
                            </button>
                        </Tippy>
                    </ul>
                </div>

                <ul className="flex flex-wrap items-center space-x-3 text-gray-400">
                    <li>
                        <PublishedState published={course.published}/>
                    </li>
                    <li>
                        <div className="flex items-center space-x-1 text-gray-400">
                            <i className="mdi mdi-license"></i>
                            <span className="text-xs">Design</span>
                        </div>
                    </li>
                    <li>&bull;</li>
                    <li>
                        <div className="flex items-center space-x-1 text-gray-400">
                            <i className="mdi mdi-calendar-month-outline"></i>
                            <span className="text-xs">Created: {moment(course.updated_at).format("MMM D, YYYY")}</span>
                        </div>
                    </li>
                    <li>&bull;</li>
                    <div className="flex items-center space-x-1 text-gray-400">
                        <i className="mdi mdi-eye-outline"></i>
                        <span className="text-xs">Public</span>
                    </div>
                    <li>&bull;</li>
                    <div className="flex items-center space-x-1 text-gray-400">
                        <i className="mdi mdi-file-document-outline"></i>
                        <span className="text-xs">Course</span>
                    </div>
                </ul>
            </section>

            {/* Tab Nav */}
            <ul className="border-b px-4 md:px-5 flex space-x-8 text-gray-400">
                <li className="flex">
                    <TabLink to={'/courses/' + course.id + '/content'}>
                        Content
                    </TabLink>
                </li>
                <li className="flex">
                    <TabLink to={'/courses/' + course.id + '/statistic'}>
                        Statistic
                    </TabLink>
                </li>
                <li className="flex">
                    <TabLink to={'/courses/' + course.id + '/learner'}>
                        Learner
                    </TabLink>
                </li>
            </ul>

            <Outlet/>
        </>
    );

    return (
        <PageTemplate
            title={(!course && courseFetch) ? 'Fetching Course...' : 'Course'}
            subtitle={(
                <ul className="flex space-x-1 text-xs">
                    <li>
                        <Link to="/courses" className="hover:underline">Content</Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link to="/courses" className="hover:underline">Courses</Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-400">
                        Course Details
                    </li>
                </ul>
            )}
        >
            {apiError}
            {pageContent}
        </PageTemplate>
    );
}

export default CoursePage;
