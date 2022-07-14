import React from 'react';

function UseScrollTop(props) {
  React.useEffect(() => window.scrollTo(0, 0), []);
}

export default UseScrollTop;
