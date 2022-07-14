import React from 'react';
import Validator from "validatorjs";
import {useDispatch, useSelector} from "react-redux";
import PageTemplate from "./PageTemplate";
import AsideToggleBtn from "../components/AsideToggleBtn";
import ValidatedComponent from "../components/ValidatedComponent";
import * as courseActions from "../store/course/course.actions";
import * as sectionsActions from "../store/sections/sections.actions";
import {preventDefault} from "../lib/helpers";
import Spinner from "../components/Spinner";
import {
    selectCourse,
    selectCourseStore,
    selectCourseStoreError,
    selectCourseStoreSuccess, selectCourseUpdate, selectCourseUpdateError, selectCourseUpdateSuccess
} from "../store/course/course.selectors";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as coursesActions from "../store/courses/courses.actions";
import {
    selectCourses,
    selectCoursesFetch,
    selectCoursesFetchError,
    selectCoursesFetchSuccess
} from "../store/courses/courses.selectors";
import * as appActions from "../store/app/app.actions";
import moment from "moment";
import {selectSections} from "../store/sections/sections.selectors";
import * as sectionActions from "../store/section/section.actions";
import {selectSection} from "../store/section/section.selectors";
import classNames from "classnames";

function CourseEditPage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {course_id} = useParams();

    const courses = useSelector(selectCourses);
    const coursesFetch = useSelector(selectCoursesFetch);
    const coursesFetchSuccess = useSelector(selectCoursesFetchSuccess);
    const coursesFetchError = useSelector(selectCoursesFetchError);

    const course = useSelector(selectCourse);
    const courseStore = useSelector(selectCourseStore);
    const courseStoreSuccess = useSelector(selectCourseStoreSuccess);
    const courseStoreError = useSelector(selectCourseStoreError);
    const courseUpdate = useSelector(selectCourseUpdate);
    const courseUpdateSuccess = useSelector(selectCourseUpdateSuccess);
    const courseUpdateError = useSelector(selectCourseUpdateError);

    const sections = useSelector(selectSections);
    const section = useSelector(selectSection);

    const [formData, setFormData] = React.useState({
        name: '',
        description: ''
    });
    const [formErrors, setFormErrors] = React.useState(null);

    const changedInput = (field, value) => {
        setFormData({...formData, [field]: value});
        setFormErrors(null);
    };

    const saving = courseStore || courseUpdate;
    const save = () => {
        const validation = new Validator(formData, {
            name: "required|max:30",
        });
        if (validation.passes()) {
            setFormErrors(null);
            dispatch(course_id ? courseActions.update(course_id, formData) : courseActions.store(formData));
        } else {
            setFormErrors(validation.errors.all());
        }
    };

    const newSection = () => {
        dispatch(sectionsActions.createSection());
    };

    React.useEffect(() => {
        if (course_id && !coursesFetchSuccess) {
            dispatch(coursesActions.fetchCourses());
        }
        return () => {
            dispatch(appActions.clearErrors());
            dispatch(courseActions.setCourse());
        }
    }, []);

    React.useEffect( () => {
        if (course_id && courses.length) {
            const course = courses.find(each => (each.id == course_id));
            dispatch(courseActions.setCourse(course));
            setFormData(course);
        }
    }, [courses]);

    React.useEffect(async () => {
        if (courseStoreSuccess) {
            navigate(`/courses/${course.id}/edit`);
        }
    }, [courseStoreSuccess]);

    React.useEffect(async () => {
        if (course_id && courseUpdateSuccess) {
            navigate('/courses');
        }
    }, [courseUpdateSuccess]);

    React.useEffect(() => {
        if (sections.length) {
            const last = sections[sections.length - 1];
            dispatch(sectionActions.setSection(last));
        }
    }, [sections]);

    const header = (
        <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-3 justify-between">
            <div className="flex items-center flex-1">
                <AsideToggleBtn className="lg:hidden"/>
                <div className="h-10 md:h-7 border-l border-gray-300 mx-3 md:mx-5"></div>
                <div
                    className="flex flex-col lg:flex-row lg:flex-1 lg:items-center lg:justify-between lg:space-x-3">
                    <div className="text-xl font-bold whitespace-nowrap">
                        {Boolean(course) ? 'Edit' : 'Create'} Course
                    </div>
                    {Boolean(course) && (
                        <p className="text-sm text-gray-400 font-medium">
                            Last Saved: {moment(course.updated_at).format("MMM D, YYYY")}
                        </p>
                    )}
                </div>
            </div>

            <ul className="grid grid-cols-3 gap-3 h-full lg:w-2/5">
                <li>
                    <button className="btn-outline h-10 w-full">
                        Preview
                    </button>
                </li>
                <li>
                    <div className="relative">
                        <select className="btn-outline h-10 w-full appearance-none outline-none">
                            <option value="0">Draft</option>
                            <option value="1">Published</option>
                        </select>
                        <div className="absolute right-4 inset-y-0 grid place-content-center">
                            <i className="mdi mdi-chevron-down text-gray-400"></i>
                        </div>
                    </div>
                </li>
                <li>
                    <button
                        onClick={save}
                        disabled={saving}
                        className="btn-primary h-10 w-full"
                        type="button"
                    >
                        {courseStore && <Spinner/>}
                        Save
                    </button>
                </li>
            </ul>
        </div>
    );

    const onSetSection = section => () => {
        dispatch(sectionActions.setSection(section));
    };

    const navigation = (
        <div className="flex flex-col divide-y divide-white/50 overflow-y-auto flex-1">
            <div className="divide-y divide-white/50 flex-1">
                <header className="sticky top-0 backdrop-blur divide-y divide-white/50">
                    <div className="flex items-center space-x-2 relative group px-3 pb-5 pt-10">
                        <Link to="/courses" className="absolute inset-0"></Link>
                        <div
                            className="block border border-teal-500 rounded-full w-8 h-8 md:w-6 md:h-6 grid place-content-center group-hover:bg-teal-500 group-hover:text-white transition">
                            <i className="mdi mdi-chevron-left text-2xl"></i>
                        </div>
                        <div className="font-medium">
                            Back to Course List
                        </div>
                    </div>

                    <ul className="flex-1 divide-y divide-white/50">
                        <li
                            onClick={onSetSection()}
                            className={classNames(
                                "border-l-4 p-4 cursor-pointer transition-all",
                                Boolean(section)
                                    ? '!border-l-gray-400 hover:bg-gray-100/50'
                                    : '!border-l-yellow-400 bg-blue-100/50'
                            )}
                        >
                            <p className="">
                                General Information
                            </p>
                            {Boolean(course) && (
                                <p className="text-gray-400 text-xs">
                                    Updated: {moment(course.updated_at).format("MMM D, YYYY h:mma")}
                                </p>
                            )}
                        </li>
                        <li className="p-5 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-5 font-bold">
                                    <p className="">
                                        Sections
                                    </p>
                                    <p className="text-gray-400">
                                        {sections.length}
                                    </p>
                                </div>
                                <button
                                    onClick={newSection}
                                    className="btn-primary h-9 w-9 !text-xl"
                                    type="button"
                                >
                                    <i className="mdi mdi-plus"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </header>

                <ul className="flex-1 divide-y divide-white/50">
                    {sections.map((each, index) => (
                        <li
                            key={index}
                            onClick={onSetSection(each)}
                            className={classNames(
                                "border-l-4 p-4 px-1 cursor-pointer transition-all",
                                Boolean(section) && JSON.stringify(section) == JSON.stringify(each)
                                    ? '!border-l-yellow-400 bg-blue-100/50'
                                    : '!border-l-gray-400 hover:bg-gray-100/50'
                            )}
                        >
                            <div className="flex items-center space-x-1">
                                <i className="mdi mdi-drag-vertical text-gray-400 text-2xl cursor-grab"></i>
                                <div>
                                    <p className="">
                                        {each.name || 'Section - ' + (index + 1)}
                                    </p>
                                    <p className="text-gray-400 text-xs">
                                        Updated: {moment(each.updated_at).format("MMM D, YYYY h:mma")}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-3 sticky bottom-0 backdrop-blur p-5 pt-3">
                <a href="#" className="group px-2 block">
                    <div className="text-gray-400 text-xs">Powered by</div>
                    <div className="font-bold text-xl text-red-900 group-hover:text-red-700 transition">Razorlab</div>
                </a>
            </div>
        </div>
    );

    const generalInformation = Boolean(section) || (
        <section className="max-w-4xl mx-auto p-5">
            <form onSubmit={preventDefault(save)} className="space-y-7">
                <div className="flex space-x-5 justify-between">
                    <div className="space-y-1">
                        <h1 className="text-xl md:text-2xl font-bold">
                            Set the General Information
                        </h1>
                        <p className="text-gray-400 text-xs md:text-sm font-medium">
                            This information will attract learners to take this course, and help them find it
                            easily.
                        </p>
                    </div>
                    <button type="button" className="flex items-center hover:opacity-50 text-gray-400">
                        <i className="mdi mdi-cog-outline text-2xl mr-1"></i>
                        Menu
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2 md:col-span-2">
                        <label className="font-bold">Course Cover</label>
                        <div
                            className="rounded-md group aspect-[5/2] md:aspect-[6/2] bg-gray-200 w-full relative grid place-content-center">
                            <i className="mdi mdi-image text-7xl md:text-9xl text-gray-100"></i>
                            <button
                                className="absolute top-0 right-0 hover:opacity-75 rounded-full bg-black text-white grid place-content-center w-7 aspect-square -m-3.5"
                                type="button"
                            >
                                <i className="mdi mdi-close"></i>
                            </button>
                            <div
                                className="rounded-md md:pointer-events-none group-hover:pointer-events-auto md:opacity-0 group-hover:opacity-100 transition absolute inset-0 top-0 bg-gradient-to-b from-transparent to-black/25 grid place-content-end">
                                <input type="file" accept="image/*" className="hidden"/>
                                <button
                                    className="btn-outline m-3 md:m-5 font-semibold flex items-center space-x-1 text-sm"
                                >
                                    <i className="mdi mdi-camera-outline text-lg"></i>
                                    <span>Upload Cover</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-2 flex flex-col">
                        <label className="font-bold after:content-['*'] after:text-red-600">
                            Course Name
                        </label>
                        <ValidatedComponent
                            name="name"
                            errors={formErrors}
                            className="form-input"
                            renderComponent={(cn) => (
                                <input
                                    value={formData.name}
                                    onChange={(e) => changedInput('name', e.target.value)}
                                    className={cn}
                                />
                            )}
                        />
                    </div>

                    <div className="space-y-2 flex flex-col">
                        <label className="font-bold after:content-['*'] after:text-red-600">
                            Course Category
                        </label>
                        <select className="form-input"></select>
                    </div>

                    <div className="space-y-2 flex flex-col">
                        <label className="font-bold after:content-['*'] after:text-red-600">
                            Focus Area
                        </label>
                        <select className="form-input"></select>
                    </div>

                    <div className="md:col-span-2 space-y-2 flex flex-col">
                        <label className="font-bold">
                            Course Description
                        </label>
                        <ValidatedComponent
                            name="description"
                            errors={formErrors}
                            className="form-input"
                            renderComponent={(cn) => (
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => changedInput('description', e.target.value)}
                                    className={cn}
                                    rows="5"
                                ></textarea>
                            )}
                        />
                    </div>
                </div>
            </form>
        </section>
    );

    const sectionContent = Boolean(section) && (
        <section>
            <header className="p-3 px-4 md:px-7 border-b flex items-start justify-between space-x-3">
                <div
                    contentEditable
                    role="textbox"
                    data-placeholder="Section Title"
                    className="text-2xl font-semibold border-b border-dashed before:text-gray-400 outline-none"
                >{section.name}</div>
                <div className="flex items-center space-x-3 md:space-x-5 text-gray-400">
                    <div className="flex items-center space-x-3 md:space-x-5">
                        <button className="hover:opacity-50">
                            <i className="mdi mdi-undo text-2xl"></i>
                        </button>
                        <button className="hover:opacity-50">
                            <i className="mdi mdi-redo text-2xl"></i>
                        </button>
                    </div>
                    <div className="h-8 border-l"></div>
                    <button className="flex items-center hover:opacity-50">
                        <i className="mdi mdi-cog-outline text-2xl mr-1"></i>
                        Menu
                    </button>
                </div>
            </header>

            <div className="max-w-4xl mx-auto p-5 space-y-3">
                <article className="space-y-3">
                    <div className="figure aspect-video w-full bg-gray-200 rounded-lg relative">
                        <button
                            className="absolute top-0 right-0 hover:opacity-75 rounded-full bg-black text-white grid place-content-center w-6 h-6 -m-3"
                            type="button"
                        >
                            <i className="mdi mdi-close"></i>
                        </button>
                    </div>
                </article>

                <ul className="flex items-center space-x-2">
                    <li>
                        <button
                            className="btn text-gray-400 !py-1 !px-2"
                        >
                            <i className="mdi mdi-plus text-2xl mr-1"></i>
                            Content
                        </button>
                    </li>
                    <li>
                        <button className="btn text-gray-400 !py-1 !px-2">
                            <i className="mdi mdi-newspaper-variant-outline text-2xl mr-1"></i>
                            Library
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    );

    return (
        <PageTemplate
            header={header}
            navigation={navigation}
        >
            {generalInformation}
            {sectionContent}
        </PageTemplate>
    );
}

export default CourseEditPage;
