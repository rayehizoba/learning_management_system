import React from 'react';
import classNames from "classnames";
import ContentItem from "./ContentItem";
import {useDispatch, useSelector} from "react-redux";
import {
    selectQuestions,
    selectQuestionsFetchError,
    selectQuestionsFetchSuccess
} from "../store/questions/questions.selectors";
import * as questionActions from "../store/question/question.actions";
import * as questionsActions from "../store/questions/questions.actions";
import {useParams} from "react-router-dom";
import {selectQuestion} from "../store/question/question.selectors";
import * as appActions from "../store/app/app.actions";

function QuizContent(props) {
    const dispatch = useDispatch();
    const {quiz_id} = useParams();
    const question = useSelector(selectQuestion);
    const questions = useSelector(selectQuestions);
    const questionsFetchSuccess = useSelector(selectQuestionsFetchSuccess);
    const questionsFetchError = useSelector(selectQuestionsFetchError);

    const [expand, setExpand] = React.useState(true);

    const toggleExpand = () => setExpand(!expand);
    const onSetQuestion = question => () => {
        dispatch(questionActions.setQuestion(question));
    };

    React.useEffect(() => {
        if (quiz_id && !questionsFetchSuccess) {
            dispatch(questionsActions.fetchQuestions(quiz_id));
        }
        return () => {
            dispatch(appActions.clearErrors());
            dispatch(questionsActions.clearQuestions());
            dispatch(questionActions.setQuestion());
        }
    }, []);

    React.useEffect(() => {
        if (!question && questions.length) {
            const firstQuestion = questions[0];
            dispatch(questionActions.setQuestion(firstQuestion));
        }
    }, [question, questions]);

    return (
        <section className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x">
            <div className="md:w-1/4">
                <ul
                    className={classNames(
                        "md:max-h-fit overflow-hidden transition-all flex-1 divide-y divide-gray-200",
                        expand ? 'max-h-[1000vh] border-b' : 'max-h-0'
                    )}
                >
                    {questions.map((each, index) => (
                        <li
                            key={index}
                            onClick={onSetQuestion(each)}
                        >
                            <ContentItem
                                model={each}
                                active={Boolean(question) && JSON.stringify(question) == JSON.stringify(each)}
                                defaultName={'Question - ' + (index + 1)}
                            />
                        </li>
                    ))}
                </ul>
                <div
                    onClick={toggleExpand}
                    className="p-4 border-t font-bold bg-gray-100 hover:bg-teal-100 md:hidden flex items-center"
                >
                    <i className="mdi mdi-unfold-more-horizontal text-2xl text-gray-400"></i>
                    <div>
                        {expand ? 'Hide Course Questions' : 'View Course Questions'}
                    </div>
                </div>
            </div>
            <article className="md:w-3/4 p-4 md:p-5">
                <p className="text-2xl font-bold mb-1">Lorem ipsum dolor sit amet.</p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores autem commodi, corporis
                eius fugiat, ipsum minus molestias, perferendis placeat quos velit voluptates. Blanditiis deleniti
                ipsum quasi quisquam rerum voluptatibus.
            </article>
        </section>
    );
}

export default QuizContent;
