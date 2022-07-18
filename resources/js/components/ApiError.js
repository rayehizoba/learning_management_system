import React from 'react';

function ApiError({className, error}) {

  const cn = ("text-red-400 font-semibold text-xs italic " + className);

  if (error) {
    if (error.message) {
      return (
        <div className={cn} role="alert">
          {error.message}
        </div>
      );
    } else if (
      error.response &&
      error.response.status !== 401 &&
      error.response.data &&
      error.response.data.message
    ) {
      return (
        <div className={cn} role="alert">
          {error.response.data.message}
        </div>
      );
    }
  }
  return <div></div>;
}

export default ApiError;
