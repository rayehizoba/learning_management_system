import React from 'react';
import {CSSTransition as Transition} from "react-transition-group";

function CSSTransition({children, containerClassName, timeout, ...restProps}) {
  const nodeRef = React.useRef(null);
  return (
    <Transition
      {...restProps}
      timeout={timeout || 100}
      // unmountOnExit
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className={containerClassName}>
        {children}
      </div>
    </Transition>
  );
}

export default CSSTransition;
