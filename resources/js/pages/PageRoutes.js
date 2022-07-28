import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import CoursesPage from "./CoursesPage";
import QuizzesPage from "./QuizzesPage";
import CourseEditPage from "./CourseEditPage";
import QuizEditPage from "./QuizEditPage";
import QuizPage from "./QuizPage";
import CoursePage from "./CoursePage";
import CourseContent from "../components/CourseContent";
import CourseStatistic from "../components/CourseStatistic";
import CourseLearner from "../components/CourseLearner";

function PageRoutes(props) {
    return (
        <Routes>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/courses/create" element={<CourseEditPage/>}/>
            <Route path="/courses/:course_id/edit" element={<CourseEditPage/>}/>
            <Route path="/courses/:course_id" element={<CoursePage />}>
                <Route index element={<Navigate to="content"/>} />
                <Route path="content" element={<CourseContent/>} />
                <Route path="statistic" element={<CourseStatistic/>} />
                <Route path="learner" element={<CourseLearner/>} />
            </Route>

            <Route path="/quizzes" element={<QuizzesPage/>}/>
            <Route path="/quizzes/create" element={<QuizEditPage/>}/>
            <Route path="/quizzes/:quiz_id/edit" element={<QuizEditPage/>}/>
            <Route path="/quizzes/:quiz_id" element={<QuizPage/>}/>
        </Routes>
    );
}

export default PageRoutes;
