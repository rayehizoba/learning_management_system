import React from 'react';
import {useLocation, Link} from 'react-router-dom';

function ModalLink(props) {
    const location = useLocation();
    let to = props.to;
    if (typeof props.to === 'object') {
        to = {...props.to}
    } else if (typeof props.to === 'string') {
        to = {pathname: props.to}
    }
    return (
        <Link {...props} to={to} state={{background: location}}>
            {props.children}
        </Link>
    );
}

export default ModalLink;
