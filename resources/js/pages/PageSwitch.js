import React from "react";
import {useSelector} from "react-redux";
import {Switch, Route, useLocation, Redirect, Routes} from "react-router-dom";
import CoursesPage from "./CoursesPage";
import QuizzesPage from "./QuizzesPage";
import CourseEditPage from "./CourseEditPage";
import QuizEditPage from "./QuizEditPage";
import QuizPage from "./QuizPage";
import CoursePage from "./CoursePage";
// import {selectAuthenticated} from "../store/user/user.selectors";
// import AuthUserRoute from "../components/AuthUserRoute";
// import HomePage from "./HomePage";

function PageSwitch(props) {

    const location = useLocation();
    const background = location.state && location.state.background;
    // const authenticated = useSelector(selectAuthenticated);

    return (
        <Routes>
        {/*<Switch location={background || location}>*/}
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/courses/create" element={<CourseEditPage/>}/>
            <Route path="/courses/:course_id/edit" element={<CourseEditPage/>}/>
            <Route path="/courses/:course_id" element={<CoursePage/>}/>

            <Route path="/quizzes" element={<QuizzesPage/>}/>
            <Route path="/quizzes/create" element={<QuizEditPage/>}/>
            <Route path="/quizzes/:quiz_id" element={<QuizPage/>}/>
            {/*<AuthUserRoute*/}
            {/*  path="/team-analytics"*/}
            {/*  component={TeamAnalyticsPage}*/}
            {/*/>*/}
            {/*<AuthUserRoute*/}
            {/*  path="/community"*/}
            {/*  component={CommunityPage}*/}
            {/*/>*/}
            {/*<AuthUserRoute*/}
            {/*  exact*/}
            {/*  path="/courses/:course_id/modules/:module_id"*/}
            {/*  component={CoursePage}*/}
            {/*/>*/}
            {/*<AuthUserRoute*/}
            {/*  path="/courses"*/}
            {/*  component={CoursesPage}*/}
            {/*/>*/}
            {/*{authenticated*/}
            {/*  ? <Redirect to="/courses"/>*/}
            {/*  : <Route exact path="/" component={HomePage}/>}*/}
        </Routes>
    );
}

export default PageSwitch;
