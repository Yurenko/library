import React from 'react';

function BookContent({ elem }) {
  return (
    <>
      <span>{elem[0]}</span>
      {elem[1]}.
    </>
  );
}

export default BookContent;
