import React from 'react';
import {Route, useLocation, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import ModuleDescriptionModal from "./ModuleDescriptionModal";
import ProfileModal from "./ProfileModal";
import CertificateModal from "./CertificateModal";
import ConversationModal from "./ConversationModal";
import LockedCourseModal from "./LockedCourseModal";

function ModalSwitch(props) {

  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="opacity"
        timeout={{enter: 300, exit: 150,}}
      >
        <Switch location={location}>
          <Route
            path="/conversation/:id"
            component={ConversationModal}
          />
          <Route
            path="/profile/:user_id/certificate/:module_id"
            component={CertificateModal}
          />
          <Route
            path="/profile"
            component={ProfileModal}
          />
          <Route
            path="/profile/:id"
            component={ProfileModal}
          />
          <Route
            path="/courses/:course_id/modules/:module_id/description"
            component={ModuleDescriptionModal}
          />
          <Route
            path="/locked-course"
            component={LockedCourseModal}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default ModalSwitch;
