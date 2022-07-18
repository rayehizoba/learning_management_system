import React from 'react';
import PageTemplate from "./PageTemplate";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {
    selectCourse,
    selectCourseFetch,
    selectCourseFetchError,
    selectCourseFetchSuccess
} from "../store/course/course.selectors";
import * as appActions from "../store/app/app.actions";
import ApiError from "../components/ApiError";
import Tippy from "../components/Tippy";
import CourseSettingsMenu from "../components/CourseSettingsMenu";
import PublishedState from "../components/PublishedState";
import moment from "moment";
import classNames from "classnames";
import {
    selectQuiz,
    selectQuizFetch,
    selectQuizFetchError,
    selectQuizFetchSuccess
} from "../store/quiz/quiz.selectors";
import * as quizActions from "../store/quiz/quiz.actions";
import QuizSettingsMenu from "../components/QuizSettingsMenu";

function QuizPage(props) {
    const dispatch = useDispatch();
    const {quiz_id} = useParams();

    const quiz = useSelector(selectQuiz);
    const quizFetch = useSelector(selectQuizFetch);
    const quizFetchSuccess = useSelector(selectQuizFetchSuccess);
    const quizFetchError = useSelector(selectQuizFetchError);

    React.useEffect(() => {
        if (quiz_id && !quizFetchSuccess) {
            dispatch(quizActions.fetchQuiz(quiz_id));
        }
        return () => {
            dispatch(appActions.clearErrors());
        }
    }, []);

    const apiError = <ApiError error={quizFetchError}/>

    const pageContent = quiz && (
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
                        {quiz.name}
                    </p>
                    <ul className="flex items-center space-x-3 md:space-x-4">
                        <Link
                            to={'/quizzes/' + quiz.id + '/edit'}
                            className="btn-outline font-semibold flex items-center space-x-1"
                        >
                            <i className="mdi mdi-pencil-outline text-lg"></i>
                            <span>Edit Quiz</span>
                        </Link>
                        <button className="btn-outline font-semibold flex items-center space-x-1">
                            <i className="mdi mdi-eye-outline text-lg"></i>
                            <span>Preview as Learner</span>
                        </button>
                        <Tippy content={<QuizSettingsMenu quiz={quiz}/>}>
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
                        <PublishedState published={quiz.published}/>
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
                            <span className="text-xs">Created: {moment(quiz.updated_at).format("MMM D, YYYY")}</span>
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
                        <span className="text-xs">Quiz</span>
                    </div>
                </ul>
            </section>

            {/* Tab Nav */}
            <ul className="border-b px-4 md:px-5 flex space-x-8 font-bold text-gray-400">
                <li
                    className={classNames(
                        "py-3 hover:text-black transition-all duration-300 cursor-pointer border-b-2",
                        true ? 'border-yellow-400 text-black' : 'border-transparent'
                    )}
                >
                    Content
                </li>
                <li
                    className={classNames(
                        "py-3 hover:text-black transition-all duration-300 cursor-pointer border-b-2",
                        false ? 'border-yellow-400 text-black' : 'border-transparent'
                    )}
                >
                    Statistic
                </li>
                <li
                    className={classNames(
                        "py-3 hover:text-black transition-all duration-300 cursor-pointer border-b-2",
                        false ? 'border-yellow-400 text-black' : 'border-transparent'
                    )}
                >
                    Learner
                </li>
            </ul>
        </>
    );

    return (
        <PageTemplate
            title={(!quiz && quizFetch) ? 'Fetching Quiz...' : 'Quiz'}
            subtitle={(
                <ul className="flex space-x-1 text-xs">
                    <li>
                        <Link to="/quizzes" className="hover:underline">Content</Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link to="/quizzes" className="hover:underline">Quizzes</Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-400">
                        Quiz Details
                    </li>
                </ul>
            )}
        >
            {apiError}
            {pageContent}
        </PageTemplate>
    );
}

export default QuizPage;
