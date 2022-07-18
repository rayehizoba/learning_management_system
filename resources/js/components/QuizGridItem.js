import React from 'react';
import PublishedState from "./PublishedState";
import CourseSettingsMenu from "./CourseSettingsMenu";
import Tippy from "./Tippy";
import QuizSettingsMenu from "./QuizSettingsMenu";
import {Link} from "react-router-dom";
import * as quizActions from "../store/quiz/quiz.actions";
import {useDispatch} from "react-redux";

function QuizGridItem({quiz}) {
    const dispatch = useDispatch();
    const onClick = () => dispatch(quizActions.setQuiz(quiz));
    return (
        <div className="border rounded divide-y">
            <header>
                <div className="p-3 flex items-center justify-between">
                    <PublishedState published={quiz.published}/>
                    <Tippy content={<QuizSettingsMenu quiz={quiz}/>}>
                        <button
                            className="h-5 w-5 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-gray-400 hover:text-white"
                            type="button"
                        >
                            <i className="mdi mdi-dots-horizontal text-2xl"></i>
                        </button>
                    </Tippy>
                </div>
                <Link onClick={onClick} to={'/quizzes/' + quiz.id} className="group">
                    <figure className="w-full aspect-[3/1] bg-gray-300 text-gray-100 grid place-content-center">
                        <i className="mdi mdi-image text-5xl"></i>
                    </figure>
                    <div className="p-3">
                        <p className="font-semibold line-clamp-1 group-hover:underline">
                            {quiz.name}
                        </p>
                        <div className="flex items-center space-x-5">
                            <div className="flex items-center space-x-1 text-gray-400">
                                <i className="mdi mdi-account-circle-outline"></i>
                                <span className="text-xs">24 Learners</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-400">
                                <i className="mdi mdi-license"></i>
                                <span className="text-xs">Design</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </header>

            {quiz.published ? (
                <div className="divide-x flex items-center h-16">
                    <div className="p-3 space-y-1.5">
                        <p className="text-xs text-gray-400">Avg Correct Answer</p>
                        <p className="text-sm line-clamp-1">
                            <span className="text-red-500">12</span> / 24 <span className="font-semibold">(50% correct answer rate)</span>
                        </p>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center h-16 text-gray-400 space-x-2">
                    <i className="mdi mdi-finance"></i>
                    <p className="text-sm">This quiz has no stats yet</p>
                </div>
            )}

            <footer className="p-4">
                <button className="btn-primary-outline w-full">
                    <i className="mdi mdi-plus"></i>
                    Assign
                </button>
            </footer>
        </div>
    );
}

export default QuizGridItem;
