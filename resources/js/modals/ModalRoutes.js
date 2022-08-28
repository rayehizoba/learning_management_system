import React from 'react';
import {Route, useLocation, Routes} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import CourseAssignModal from "./CourseAssignModal";

function ModalRoutes(props) {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="opacity"
        timeout={{enter: 300, exit: 150,}}
      >
        <Routes location={location}>
          <Route
            path="/courses/:id/assign"
            element={<CourseAssignModal/>}
          />
          <Route
            path="/quizzes/:id/assign"
            element={<CourseAssignModal/>}
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default ModalRoutes;
