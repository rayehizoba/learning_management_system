import React from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import CoursesPage from "./CoursesPage";
import QuizzesPage from "./QuizzesPage";
import CourseEditPage from "./CourseEditPage";
import QuizEditPage from "./QuizEditPage";
import QuizPage from "./QuizPage";
import CoursePage from "./CoursePage";
import CourseContent from "../components/CourseContent";
import CourseStatistic from "../components/CourseStatistic";
import CourseLearner from "../components/CourseLearner";
import UsersPage from "./UsersPage";
import GroupsPage from "./GroupsPage";
import FilesFoldersPage from "./FilesFoldersPage";
import LearningPathsPage from "./LearningPathsPage";
import QuizLearner from "../components/QuizLearner";
import QuizStatistic from "../components/QuizStatistic";
import QuizContent from "../components/QuizContent";
import UserEditPage from "./UserEditPage";

function PageRoutes(props) {
    const location = useLocation();
    const background = location.state && location.state.background;
    return (
        <Routes location={background || location}>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/courses/create" element={<CourseEditPage/>}/>
            <Route path="/courses/:course_id/edit" element={<CourseEditPage/>}/>
            <Route path="/courses/:course_id" element={<CoursePage/>}>
                <Route index element={<Navigate to="content"/>} />
                <Route path="content" element={<CourseContent/>} />
                <Route path="statistic" element={<CourseStatistic/>} />
                <Route path="learner" element={<CourseLearner/>} />
            </Route>

            <Route path="/quizzes" element={<QuizzesPage/>}/>
            <Route path="/quizzes/create" element={<QuizEditPage/>}/>
            <Route path="/quizzes/:quiz_id/edit" element={<QuizEditPage/>}/>
            <Route path="/quizzes/:quiz_id" element={<QuizPage/>}>
                <Route index element={<Navigate to="content"/>} />
                <Route path="content" element={<QuizContent/>} />
                <Route path="statistic" element={<QuizStatistic/>} />
                <Route path="learner" element={<QuizLearner/>} />
            </Route>

            <Route path="/learning-paths" element={<LearningPathsPage/>}/>

            <Route path="/files-folders" element={<FilesFoldersPage/>}/>

            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/users/create" element={<UserEditPage/>}/>

            <Route path="/groups" element={<GroupsPage/>}/>
        </Routes>
    );
}

export default PageRoutes;
