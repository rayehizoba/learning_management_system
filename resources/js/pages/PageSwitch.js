import React from "react";
import {useSelector} from "react-redux";
import {Switch, Route, useLocation, Redirect, Routes} from "react-router-dom";
import CoursesPage from "./CoursesPage";
import QuizzesPage from "./QuizzesPage";
import CourseEditPage from "./CourseEditPage";
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

            <Route path="/quizzes" element={<QuizzesPage/>}/>
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
